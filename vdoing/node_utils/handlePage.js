// 生成或删除页面（分类页、标签页、归档页...）

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { type } = require('./modules/fn');

function createPage(sourceDir, page) {
  const dirPath = path.join(sourceDir, '@pages');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const pagePath = path.join(dirPath, `${page}.md`);

  if (fs.existsSync(pagePath)) {
    return;
  }

  let content = '';
  if (page.indexOf('categories') > -1) {
    content = `---
categoriesPage: true
title: 分类
permalink: /categories/
article: false
---`;
  } else if (page.indexOf('tags') > -1) {
    content = `---
tagsPage: true
title: 标签
permalink: /tags/
article: false
---`;
  } else if (page.indexOf('archives') > -1) {
    content = `---
archivesPage: true
title: 归档
permalink: /archives/
article: false
---`;
  }

  if (content) {
    fs.writeFileSync(pagePath, content);
    console.log(chalk.blue('tip ') + chalk.green(`create page(生成页面): ${pagePath}`));
  }
}

function deletePage(sourceDir, page) {
  const dirPath = path.join(sourceDir, '@pages');
  const pagePath = path.join(dirPath, `${page}.md`);

  if (fs.existsSync(pagePath)) {
    fs.unlinkSync(pagePath);
    console.log(chalk.blue('tip ') + chalk.green(`delete page(删除页面): ${pagePath}`));
  }
  deleteDir(dirPath);
}

function deleteDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    if (type(files) === 'array' && files.length === 0) {
      fs.rmdirSync(dirPath);
      console.log(chalk.blue('tip ') + chalk.green(`delete dir(删除目录): ${dirPath}`));
    }
  }
}

module.exports = {
  createPage,
  deletePage,
};
