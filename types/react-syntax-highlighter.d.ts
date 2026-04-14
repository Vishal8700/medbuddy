declare module 'react-syntax-highlighter' {
  export interface PrismProps {
    children: string
    language?: string
    style?: Record<string, Record<string, string | number>>
    showLineNumbers?: boolean
    wrapLines?: boolean
    wrapLongLines?: boolean
    customStyle?: Record<string, string | number>
    codeTagProps?: Record<string, any>
    lineProps?: Record<string, any>
    onCodeTagProps?: (props: Record<string, any>) => Record<string, any>
    lineNumberStyle?: Record<string, string | number>
    useInlineStyles?: boolean
    startingLineNumber?: number
    [key: string]: any
  }

  export class Prism extends React.Component<PrismProps> {}
  export default Prism
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
  export const oneDark: Record<string, Record<string, string | number>>
  export const oneLight: Record<string, Record<string, string | number>>
  export const atomDark: Record<string, Record<string, string | number>>
  export const dracula: Record<string, Record<string, string | number>>
  [key: string]: Record<string, Record<string, string | number>>
}
