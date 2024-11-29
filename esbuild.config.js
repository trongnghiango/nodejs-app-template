/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require('esbuild')

// const alias = require('esbuild-plugin-alias')

const options = {
  color: true,
  entryPoints: ['./src/index.js'],
  target: ['node20.17.0'],
  outfile: 'dist/index.js',
  sourcemap: true,
  minify: true,
  bundle: true,
  platform: 'node',
  // format: 'js',
  define: { 'process.env.NODE_ENV': '"production"' },
  external: ['./node_modules/*', './keys/*', './logs/*'],
  alias: {
    '@': './src',
    // '@utils': './src/utils',
  },
}

// run build with esbuild
;(async () => {
  console.time('Build Duration')
  const res = await esbuild.build(options)
  console.timeEnd('Build Duration')
  console.tim
  if (!res) {
    process.exit(1)
  }
})()
