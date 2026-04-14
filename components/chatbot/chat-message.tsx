'use client'

import React, { useMemo } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'katex/dist/katex.min.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
  isStreaming?: boolean
}

export function ChatMessage({ message }: { message: Message }) {
  const renderedContent = useMemo(() => {
    if (message.role === 'user') return message.content
    return <div className="space-y-2">{parseBlocks(message.content)}</div>
  }, [message.content, message.role])

  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} gap-2`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          message.role === 'user'
            ? 'bg-primary text-primary-foreground rounded-tr-sm'
            : 'bg-muted text-foreground rounded-tl-sm'
        }`}
      >
        {typeof renderedContent === 'string' ? (
          <p className="whitespace-pre-wrap break-words">{renderedContent}</p>
        ) : (
          renderedContent
        )}
      </div>
    </div>
  )
}

// ─── Block parser ─────────────────────────────────────────────────────────────

function parseBlocks(content: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const codeBlockRe = /```(\w*)\n?([\s\S]*?)```/g
  let last = 0
  let match: RegExpExecArray | null

  while ((match = codeBlockRe.exec(content)) !== null) {
    if (match.index > last) {
      nodes.push(...parseTextBlocks(content.slice(last, match.index), nodes.length))
    }
    const lang = match[1] || 'text'
    const code = match[2].trimEnd()
    nodes.push(
      <div key={`cb-${match.index}`} className="my-2 rounded-lg overflow-hidden text-xs">
        <div className="bg-zinc-800 px-3 py-1.5">
          <span className="text-zinc-400 text-xs font-mono">{lang}</span>
        </div>
        <SyntaxHighlighter
          language={lang}
          style={oneDark}
          customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.78rem' }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    )
    last = match.index + match[0].length
  }

  if (last < content.length) {
    nodes.push(...parseTextBlocks(content.slice(last), nodes.length))
  }

  return nodes
}

function parseTextBlocks(text: string, offset: number): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const lines = text.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.trim() === '') { i++; continue }

    // Heading: ### or ## or #
    const headingMatch = line.match(/^(#{1,3})\s+(.+)/)
    if (headingMatch) {
      const level = headingMatch[1].length
      const cls = level === 1
        ? 'text-base font-bold mt-3 mb-1'
        : level === 2
        ? 'text-sm font-bold mt-2 mb-0.5'
        : 'text-sm font-semibold mt-1'
      nodes.push(
        <p key={`h-${offset}-${i}`} className={cls}>
          {inlineFormat(headingMatch[2])}
        </p>
      )
      i++; continue
    }

    // Unordered list
    if (/^[-•]\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^[-•]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-•]\s/, ''))
        i++
      }
      nodes.push(
        <ul key={`ul-${offset}-${i}`} className="list-disc list-inside space-y-1 pl-1 my-1">
          {items.map((item, j) => <li key={j}>{inlineFormat(item)}</li>)}
        </ul>
      )
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''))
        i++
      }
      nodes.push(
        <ol key={`ol-${offset}-${i}`} className="list-decimal list-inside space-y-1 pl-1 my-1">
          {items.map((item, j) => <li key={j}>{inlineFormat(item)}</li>)}
        </ol>
      )
      continue
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      nodes.push(<hr key={`hr-${offset}-${i}`} className="border-border my-2" />)
      i++; continue
    }

    // Paragraph — collect until blank line or block element
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,3}|[-•]|\d+\.)\s/.test(lines[i]) &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^```/.test(lines[i])
    ) {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length) {
      nodes.push(
        <p key={`p-${offset}-${i}`} className="break-words leading-relaxed">
          {inlineFormat(paraLines.join('\n'))}
        </p>
      )
    }
  }

  return nodes
}

// ─── Inline formatter ─────────────────────────────────────────────────────────
// Order matters: check $$ before $, ** before *

function inlineFormat(text: string): React.ReactNode {
  // Token pattern — order is critical
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*\n]+?\*\*|\*[^*\n]+?\*|`[^`]+`)/g
  const parts: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null

  while ((m = re.exec(text)) !== null) {
    // Plain text before this token
    if (m.index > last) parts.push(text.slice(last, m.index))

    const tok = m[0]

    if (tok.startsWith('$$')) {
      // Display math
      parts.push(
        <span key={m.index} className="font-mono text-xs bg-background/60 px-1.5 py-0.5 rounded mx-0.5 inline-block">
          {tok.slice(2, -2).trim()}
        </span>
      )
    } else if (tok.startsWith('$')) {
      // Inline math
      parts.push(
        <span key={m.index} className="font-mono text-xs bg-background/60 px-1 py-0.5 rounded mx-0.5">
          {tok.slice(1, -1).trim()}
        </span>
      )
    } else if (tok.startsWith('**')) {
      // Bold — strip the ** and render as strong
      parts.push(
        <strong key={m.index} className="font-semibold">
          {tok.slice(2, -2)}
        </strong>
      )
    } else if (tok.startsWith('*')) {
      // Italic
      parts.push(<em key={m.index}>{tok.slice(1, -1)}</em>)
    } else if (tok.startsWith('`')) {
      // Inline code
      parts.push(
        <code key={m.index} className="font-mono text-xs bg-background/60 px-1 py-0.5 rounded">
          {tok.slice(1, -1)}
        </code>
      )
    }

    last = m.index + tok.length
  }

  if (last < text.length) parts.push(text.slice(last))

  if (parts.length === 0) return text
  if (parts.length === 1 && typeof parts[0] === 'string') return parts[0]
  return <>{parts}</>
}
