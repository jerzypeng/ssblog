/**
 *  读取所有md文件数据
 */
const fs = require('fs'); // 文件模块
const path = require('path'); // 路径模块

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(item => {
    const filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && item !== '.vuepress' && item !== '@pages') {
      readFileList(path.join(dir, item), filesList);
    } else {
      if (path.basename(dir) !== 'docs') {
        const filename = path.basename(filePath);
        const fileNameArr = filename.split('.');
        const firstDotIndex = filename.indexOf('.');
        const lastDotIndex = filename.lastIndexOf('.');

        let name = null;
        let type = null;
        if (fileNameArr.length === 2) {
          name = fileNameArr[0];
          type = fileNameArr[1];
        } else if (fileNameArr.length >= 3) {
          name = filename.substring(firstDotIndex + 1, lastDotIndex);
          type = filename.substring(lastDotIndex + 1);
        }

        if (type === 'md') {
          filesList.push({
            name,
            filePath,
          });
        }
      }
    }
  });
  return filesList;
}

module.exports = readFileList;
