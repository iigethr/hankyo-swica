// next.config.js

const withPlugins       = require("next-compose-plugins")
const withImages        = require("next-optimized-images")
const withCss           = require("@zeit/next-css")
const withSass          = require("@zeit/next-sass")
const withYml           = require("js-yaml-loader")
const withPWA           = require("next-pwa")
// const withOffline       = require('next-offline')

// Note: Keep it Last here and withPlugins()
const withTM  = require("next-transpile-modules")([
  "react-ga",
  "js-cookie",
  "next-cookies",
  "@hankyo/hankyo",
  "@iigethr/zaha_alignments"
])

// withSass
const withSassConfig = {
  cssModules: false
}

// withPWA
const withPWAConfig = {
  pwa: {
    dest: "public"
  }
}

// withImages
const withImagesConfig = {
  inlineImageLimit: 1024,
  imagesFolder: "images",
  imagesName: "[name]-[hash].[ext]",
  handleImages: ["jpg", "jpeg", "png", "svg", "webp", "gif"],
  optimizeImages: true
}

// nextEnvConfig
const nextEnvConfig = {
  env: {
    HANKYO_ACCESS_TOKEN: process.env.HANKYO_ACCESS_TOKEN,
    HANKYO_SECRET_ACCESS_TOKEN: process.env.HANKYO_SECRET_ACCESS_TOKEN,
    PROJECT_SLUG: process.env.PROJECT_SLUG
  }
}

const nextConfig = {
  webpack: (config) => {
    config.node = { // eslint-disable-line no-param-reassign
      fs: "empty"
    }
    return config
  }
}

module.exports = withPlugins([
  [nextEnvConfig],
  [withPWA, withPWAConfig],
  [withCss],
  [withSass, withSassConfig],
  [withImages, withImagesConfig],
  [withYml],
  [withTM]
], nextConfig)
