// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content:
        '嗖嗖,嗖嗖水环境,数字孪生,水利,环境,洪水,水质,污染,模型,水质模型,洪水模型,技术博客,技术文档,学习,',
    },
  ],
  // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  // [
  //   'script',
  //   {
  //     'data-ad-client': 'ca-pub-7254565008152153',
  //     async: 'async',
  //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //   },
  // ], // 网站关联Google AdSense 与 html格式广告支持
  // [
  //   'script',
  //   {
  //     async: 'async',
  //     src: 'https://www.googletagmanager.com/gtag/js?id=G-2RW2PZSB0P'
  //   }
  // ],
];
