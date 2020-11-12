const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ryota.murakami/laststance/laststance.io/.docz/.cache/dev-404-page.js"))),
  "component---components-button-mdx": hot(preferDefault(require("/Users/ryota.murakami/laststance/laststance.io/components/Button.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Users/ryota.murakami/laststance/laststance.io/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ryota.murakami/laststance/laststance.io/.docz/src/pages/404.js")))
}

