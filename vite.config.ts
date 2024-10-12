import { BuildOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  const isExampleDev = command === 'serve';
  const isLibrary = mode === 'prod';
  let build: BuildOptions = {};

  if (isLibrary) {
    build = {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "ts-hiprint",
        // the proper extensions will be added
        fileName: "index",
        formats: ["umd"],
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
          },
        },
      },
    };
  };
  if (isExampleDev) {
    build = {

    }
  }
  return {
    base: "./",
    // 配置别名绝对路径  https://webpack.js.org/configuration/resolve/
    resolve: {
      // resolve.alias: 更轻松地为import或require某些模块创建别名
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, "./src")
        }, {
          find: 'ts-hi-print',
          replacement: resolve(__dirname, './src')
        }
      ]
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    build,
  };
});
