/**
 * Formatting utilities for medical education content
 */

export function formatPercentage(value: number, decimals: number = 0): string {
  return `${Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)}%`
}

export function formatLatex(content: string): string {
  // Replace double dollar signs with markdown-style math formatting
  return content.replace(/\$\$(.*?)\$\$/g, (match, latex) => {
    return `<math>${latex}</math>`
  })
}

export function highlightCode(code: string, language: string = 'javascript'): string {
  // Placeholder for syntax highlighting
  // In a real app, you'd use a library like prismjs
  return code
}

export function parseMarkdown(text: string): string {
  let result = text
  
  // Bold
  result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  
  // Italic
  result = result.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  // Code inline
  result = result.replace(/`(.*?)`/g, '<code>$1</code>')
  
  // Links
  result = result.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
  
  return result
}

export function generateQuestionnaireHash(questions: any[]): string {
  return `questionnaire_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
