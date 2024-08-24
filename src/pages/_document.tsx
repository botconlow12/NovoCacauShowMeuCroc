/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <script
          disable-devtool-auto
          src="https://cdn.jsdelivr.net/npm/disable-devtool"
        />
        <script>
          window.pixelId = "66c641c58509d9abbf5d9edb"; var a =
          document.createElement("script"); a.setAttribute("async", "");
          a.setAttribute("defer", ""); a.setAttribute("src",
          "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
