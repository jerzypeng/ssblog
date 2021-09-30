// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '工具箱',
    link: '/tools/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '开发日志', items: [
          { text: '日志', link: '/pages/log/2015021401/' }
        ]
      },
      { text: '使用指南', link: '/pages/manual/2015021401/' }
    ]
  },
  {
    text: '模型',
    link: '/models/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '模型平台', items: [
        { text: '平台开发', link: '/pages/model/dev/2021090801/' },
        { text: '平台展示', link: '/pages/mode/show/2015021401/' },
        { text: '标准化接口', link: '/pages/mode/api/2015021401/' },
      ]
    },
      {
      text: 'MIKE模型', items: [
        { text: '使用技巧', link: '/pages/mike-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/mike-mode/dev/2015021401/' }]
    },
    {
      text: 'EFDC模型', items: [
        { text: '使用技巧', link: '/pages/efdc-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/efdc-mode/dev/2015021401/' }]
    },
    {
      text: 'Delft3D模型', items: [
        { text: '使用技巧', link: '/pages/delft-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/delft-mode/dev/2015021401/' }]
    },
    {
      text: 'HEC模型', items: [
        { text: '使用技巧', link: '/pages/hec-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/hec-mode/dev/2015021401/' }]
    },
    {
      text: 'WASH123D模型', items: [
        { text: '使用技巧', link: '/pages/wash-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/wash-mode/dev/2015021401/' }]
    },
    ],
  },
  {
    text: 'GIS',
    link: '/gis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: 'Arcgis', items: [
        { text: '使用技巧', link: '/pages/mike-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/mike-mode/dev/2015021401/' }]
    },
    {
      text: 'opengis', items: [
        { text: '使用技巧', link: '/pages/efdc-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/efdc-mode/dev/2015021401/' }]
    },
    ],
  },
  {
    text: '程序开发',
    link: '/coding/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '语言', items: [
        { text: '.net', link: '' },
        { text: 'python', link: '' }]
    },{
      text: '工具', items: [
        { text: 'git', link: '/pages/coding/tools/git/2020090301/' },
        { text: 'vs', link: '/pages/coding/tools/vs/2020090301/' }]
    },
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
