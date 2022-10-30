# 使用

### 配置

>> https://waline.js.org/reference/env.html 官方环境变量配置


### 启动

>> 部署后须要与前端对接，修改 `docs/.vuepress/plugins/comment/index.js`中的`serverURL`参数指向该waline服务暴露的入口

```

npm run start:waline
or
pnpm start:waline

```

### 停止

```

npm run stop:waline
or
pnpm stop:waline

```



### 日志

```
npx pm2 monit
or
pnpx pm2 monit

```