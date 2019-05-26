module.exports = {
  title: 'CSS Tricks',
  description: '记录常用的 CSS 技巧',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Github', link: 'https://github.com/onecun' },
    ],
    sidebar: [
      ['/', '首页'],
      {
        title: '技巧',
        collapsable: false,
        children: [
            '/tricks/vertical-middle/',
            '/tricks/horizontal-middle/',
            '/tricks/layout/three/',
            '/tricks/layout/two/',
            '/tricks/sticky-footor/',
            '/tricks/ellipsis/',
            '/tricks/glass/',
            '/tricks/line-break/',
        ]
      },
      {
        title: '动画',
        collapsable: false,
        children: [
            '/animation/tab/',
            '/animation/accordion/',
            '/animation/border/',
            '/animation/loading/',
        ]
      },
      {
        title: '原理',
        collapsable: false,
        children: [
            '/theory/css-animation/',
            '/theory/flex/',
            '/theory/grid/',
            '/theory/bfc/',
            '/theory/box-shadow/',
            '/theory/cursor/',
        ]
      },
    ],
  },
}