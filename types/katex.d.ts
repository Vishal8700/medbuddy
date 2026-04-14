declare module 'katex/contrib/auto-render' {
  function renderMathInElement(
    element: HTMLElement,
    options?: {
      delimiters?: Array<{
        left: string
        right: string
        display: boolean
      }>
      [key: string]: any
    }
  ): void
  export = renderMathInElement
}
