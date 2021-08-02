// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '工具箱',
    link: '/tools/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: '开发日志', items: [
        {text: '日志', link: '/pages/log/2015021401/' }
        ]},
      { text: '使用指南', link: '/pages/manual/2015021401/' }
    ]
  },
  // {
  //   text: '模型',
  //   link: '/models/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  //   items: [
  //     { text: 'EFDC', link: '/pages/efdc/' },
  //     { text: 'Delft3d', link: '/pages/delft3d/' }
  //   ]
  // },
  // {
  //   text: '洪水',
  //   link: '/flood/',
  //   items: [
  //     { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },
  //     { text: 'CSS', link: '/pages/0a83b083bdf257cb/' },
  //   ],
  // },
  // {
  //   text: '环境',
  //   link: '/environment/',
  //   items: [
  //     { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
  //     { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
  //     { text: 'Nodejs', link: '/pages/117708e0af7f0bd9/' },
  //     { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
  //   ],
  // },
  // {
  //   text: '生态',
  //   link: '/eco/',
  //   items: [
  //     { text: '学习', link: '/pages/f2a556/' },
  //     { text: '面试', link: '/pages/aea6571b7a8bae86/' },
  //     { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
  //     { text: '实用技巧', link: '/pages/baaa02/' },
  //     { text: '友情链接', link: '/friends/' },
  //   ],
  // },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
