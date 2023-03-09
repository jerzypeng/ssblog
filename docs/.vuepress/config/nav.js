// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '工具箱',
    link: '/tools/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        text: '开发日志', link: '/pages/log/'
      },
      { text: '使用指南', link: '/pages/manual/2015021401/' }
    ]
  },
  {
    text: '模型',
    link: '/models/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '模型概述', link: '/pages/model/general/2021090801/'
    },    
      {
      text: '模型平台', items: [
        { text: '平台开发', link: '/pages/model/dev/2021090801/' },
        { text: '平台展示', link: '/pages/mode/show/2015021401/' },
        { text: '标准化接口', link: '/pages/model/apidoc/' },
      ]
    },
      {
      text: 'MIKE模型', items: [
        { text: '模型简介', link: '/pages/mike-model/introduction/mike/' },
        { text: '使用技巧', link: '/pages/mike-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/mike-mode/dev/2015021401/' }]
    },
    {
      text: 'EFDC模型', items: [
        { text: '模型简介', link: '/pages/efdc-model/introduction/efdc/' },
        { text: '使用技巧', link: '/pages/efdc-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/efdc-mode/dev/2015021401/' }]
    },
    {
      text: 'Delft3D模型', items: [
        { text: '模型简介', link: '/pages/delft-model/introduction/delft/' },
        { text: '使用技巧', link: '/pages/delft-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/delft-mode/dev/2015021401/' }]
    },
    {
      text: 'HEC模型', items: [
        { text: '模型简介', link: '/pages/hec-model/introduction/hecras/' },
        { text: '使用技巧', link: '/pages/hec-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/hec-mode/dev/2015021401/' }]
    },
    {
      text: 'WASH123D模型', items: [
        { text: '模型简介', link: '/pages/wash-model/introduction/wash123d/' },
        { text: '使用技巧', link: '/pages/wash-model/application/2020090301/' },
        { text: '开发技巧', link: '/pages/wash-mode/dev/2015021401/' }]
    },
    {
      text: 'SWMM模型', items: [
        { text: '模型简介', link: '/pages/swmm-model/introduction/swmm/' },
        { text: '使用技巧', link: '/pages/swmm-model/application/2023020601/' },
        { text: '开发技巧', link: '/pages/swmm-mode/dev/2023020602/' }]
    },
    {
      text: '水文模型', link: '/pages/model/hydroloymodel/tr55/'
    },
    {
      text: '机器学习', items: [
        { text: '模型简介', link: '/pages/ml-model/introduction/ml/' },
        { text: '使用技巧', link: '/pages/ml-model/application/hydro/' },
        { text: '开发技巧', link: '/pages/ml-mode/dev/2015021401/' }]
    },
    { text: '模型比较', link: '/pages/models/modelcompare/2022060102/'}],
  },
  {
    text: 'GIS',
    link: '/gis/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '坐标系统', link: '/pages/gis/application/coordsys/2022121101/'
    },
      {
      text: 'Arcgis', items: [
        { text: '软件简介', link: '/pages/gis/introduction/arcgis/' },
        { text: '使用技巧', link: '/pages/gis/application/arcgis/2021090801/' },
        { text: '开发技巧', link: '/pages/gis/dev/arcgis/2015021401/' }]
    },
    {
      text: 'QGIS', items: [
        { text: '软件简介', link: '/pages/gis/introduction/qgis/' },
        { text: '使用技巧', link: '/pages/gis/application/qgis/2022071301/' },
        { text: '开发技巧', link: '/pages/gis/dev/opengis/2015021401/' }]
    },
    ],
  },
  {
    text: '数据库',
    link: '/database/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '项目库', items: [
        { text: '政府采购环保项目', link: '/pages/projects/hb/' },
        { text: '政府采购水利项目', link: '/pages/projects/hb/' }]
    },
    {
      text:'模拟数据',items:[
        {text:'水文数据',link:'/pages/database/hydrodata/'}
      ]
    },
    {
      text:'环境信息',items:[
        {text:'污染源',link:'/pages/database/enviodata/sources/water/2023010701/'}
      ]
    }
    ]
  },
  {
    text: '程序开发',
    link: '/coding/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '闲聊', link: '/pages/coding/memo/2022101101/'
    },{
      text: '语言', items: [
        { text: '.net', link: '/pages/coding/.net/2022070301/' },
        { text: 'python', link: '/pages/coding/python/2020090301/' },
        { text: '混合编程', link: '/pages/coding/mixcoding/2022110902/' }]
    },{
      text: '数据库及分布式存储', link: '/pages/coding/database/2022102303/' 
    },{
      text: 'Web、服务器安全', link: '/pages/coding/security/2022120701/' 
    },{
      text: '工具', items: [
        { text: 'git', link: '/pages/coding/tools/git/2020090301/' },
        { text: 'vs', link: '/pages/coding/tools/vs/2020090301/' }]
    },{ text:'开发问题集锦', link: '/pages/coding/Q&A/2022102306/'},
    {text: '电脑小知识', link: '/pages/coding/computerskills/2022110903/'}
    ]
  },
  {
    text: '流域研究',
    link: '/research/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [{
      text: '鄱阳湖流域', items: [
        { text: '模型研究', link: '/pages/research/pyh/model/' },
        { text: '信息管理平台', link: '/pages/research/pyh/dss/' }]
    },{
      text: '太湖流域', items: [
        { text: '模型研究', link: '/pages/research/th/model/' },
        { text: '信息管理平台', link: '/pages/research/th/dss/' }]
    },{
      text: '巢湖流域', items: [
        { text: '模型研究', link: '/pages/research/chh/model/' },
        { text: '信息管理平台', link: '/pages/research/chh/dss/' }]
    },{
      text: '渤海湾', items: [
        { text: '模型研究', link: '/pages/research/bhw/model/' },
        { text: '信息管理平台', link: '/pages/research/bhw/dss/' }]
    },
    ]
  },
  {
    text: '侃一侃',
    link: '/talk/',
    items: [
      {text: '环境观察',link:'/pages/talk/view/2022082301/'},
      { text: '环评', link:'/pages/talk/eia/20190927/' },
      { text: '排污许可', link:'/pages/talk/ppermit/' },
      { text: '防洪、内涝', link:'/pages/talk/flood/' },
      { text: '水环境治理', link:'/pages/talk/bmp/' },
      { text: '那些年那些事', link:'/pages/talk/miss/2022120401/' },
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
  { text: '关于', link: '/aboutus/' },
  // {
  //   text: '收藏',
  //   link: '/',
  //   // items: [
  //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  //   // ],
  // },
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
