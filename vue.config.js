// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "captain",
        productName: "captain", //项目名，也是生成的安装文件名，即aDemo.exe
        copyright: "nicnic © 2022", //版权信息
        directories: {
          output: "./dist" //输出文件路径
        },
        win: {
          //win相关配置
          icon: "./build/icons/icon.ico", //图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", //利用nsis制作安装程序,打包文件的后缀为exe
              arch: [
                "x64", //64位
                "ia32" //32位
              ]
            }
          ]
        },
        nsis: {
          oneClick: false, //一键安装
          language: "2052", //安装语言
          perMachine: true, //应用所有用户
          allowToChangeInstallationDirectory: true //用户可以选择路径
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@base", resolve("baseConfig"))
      .set("@public", resolve("public"));
  }
};
