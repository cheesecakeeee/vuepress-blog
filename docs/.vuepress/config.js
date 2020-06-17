module.exports = {
  title: 'Eudora Cheng',
  description: 'just another blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about/' }
    ]
  },
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
      require('vuepress-plugin-reading-time')
    ]
  }
}
