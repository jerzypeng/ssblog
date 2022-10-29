const path = require("path");

module.exports = (opts, ctx) => {
  return {
    define: {
      COMMENT_OPTIONS: opts.options || {
        serverURL: "http://127.0.0.1:8360", // 部署后这里应该切换为Waline服务器对应的公网入口
        reaction: true,
        dark: 'body[class~="theme-mode-dark"]',
        pageview: true,
      },
      COMMENT_CONTAINER: opts.container || "main.page",
    },
    enhanceAppFiles: path.resolve(__dirname, "comment.js"),
    globalUIComponents: "Comment",
  };
};
