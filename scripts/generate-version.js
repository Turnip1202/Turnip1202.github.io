// 生成版本信息文件
const fs = require('fs');
const path = require('path');

// 生成版本信息
const generateVersionInfo = () => {
  const version = '1.0.0'; // 可以从package.json读取
  const buildTime = new Date().toISOString();
  const hash = Math.random().toString(36).substring(2, 10);

  return {
    version,
    buildTime,
    hash
  };
};

// 生成version.json文件
const generateVersionFile = () => {
  const versionInfo = generateVersionInfo();
  const distDir = path.join(__dirname, '../dist');
  
  // 确保dist目录存在
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 写入version.json文件
  fs.writeFileSync(
    path.join(distDir, 'version.json'),
    JSON.stringify(versionInfo, null, 2)
  );

  console.log('Version info generated:', versionInfo);
};

// 执行生成
if (require.main === module) {
  generateVersionFile();
}

module.exports = { generateVersionFile };
