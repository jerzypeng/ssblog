const path = require('path');
const FORBIDDEN_WORDS = require('./app/forbidden_words');

module.exports = {
  apps: [
    {
      name: "waline",
      script: path.resolve(__dirname, "../node_modules/@waline/vercel/vanilla.js"),
      env: {
        NODE_ENV: "production",
        TZ: "Asia/Shanghai",
        SQLITE_PATH: path.resolve(__dirname, "./app/data"),
        JWT_TOKEN: "5474207a578311ed9b6a0242ac120002",
        SITE_NAME: "ssblog",
        SECURE_DOMAINS: "localhost,toolsbox.org.cn",
        FORBIDDEN_WORDS,
      },
    },
  ],
};
