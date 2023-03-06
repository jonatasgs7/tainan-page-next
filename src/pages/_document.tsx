import { Html, Head, Main, NextScript } from 'next/document'
import { TagManager } from '@/scripts/TagManager'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <TagManager />
      <body>
        <Main />
        <NextScript />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLZKHBQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </Html>
  )
}
