const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Laststance.io',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/ryota.murakami/laststance/laststance.io/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Laststance.io',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/ryota.murakami/laststance/laststance.io',
          templates:
            '/Users/ryota.murakami/laststance/laststance.io/node_modules/docz-core/dist/templates',
          docz: '/Users/ryota.murakami/laststance/laststance.io/.docz',
          cache: '/Users/ryota.murakami/laststance/laststance.io/.docz/.cache',
          app: '/Users/ryota.murakami/laststance/laststance.io/.docz/app',
          appPackageJson:
            '/Users/ryota.murakami/laststance/laststance.io/package.json',
          appTsConfig:
            '/Users/ryota.murakami/laststance/laststance.io/tsconfig.json',
          gatsbyConfig:
            '/Users/ryota.murakami/laststance/laststance.io/gatsby-config.js',
          gatsbyBrowser:
            '/Users/ryota.murakami/laststance/laststance.io/gatsby-browser.js',
          gatsbyNode:
            '/Users/ryota.murakami/laststance/laststance.io/gatsby-node.js',
          gatsbySSR:
            '/Users/ryota.murakami/laststance/laststance.io/gatsby-ssr.js',
          importsJs:
            '/Users/ryota.murakami/laststance/laststance.io/.docz/app/imports.js',
          rootJs:
            '/Users/ryota.murakami/laststance/laststance.io/.docz/app/root.jsx',
          indexJs:
            '/Users/ryota.murakami/laststance/laststance.io/.docz/app/index.jsx',
          indexHtml:
            '/Users/ryota.murakami/laststance/laststance.io/.docz/app/index.html',
          db:
            '/Users/ryota.murakami/laststance/laststance.io/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
