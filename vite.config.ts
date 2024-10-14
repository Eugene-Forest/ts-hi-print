import { BuildOptions, defineConfig, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isExampleDev = command === "serve";
  const isLibrary = mode === "prod";
  let build: BuildOptions = {};
  const plugins: PluginOption[] = [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ];
  if (isLibrary) {
    build = {
      outDir:"dist",
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
            "element-plus": "ElementPlus",
            "ts-hiprint":"ts-hiprint",
          },
        },
      },
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    };
    // 使用 dts 插件进行 .d.ts 声明文件的打包生成；并 指定 tsconfig.app.json 文件才是参考（主要读取 include 和 exclude 等配置）;
    // rollupTypes 是否合并所有dts文件;cleanVueFileName 去除 vue.d.ts文件声明
    plugins.push(
      dts({
        tsconfigPath: "./tsconfig.app.json",
        cleanVueFileName: true,
        insertTypesEntry: true,
        rollupTypes:true
      }),
    );
  }
  if (isExampleDev) {
    build = {};
  }
  return {
    base: "./",
    // 配置别名绝对路径  https://webpack.js.org/configuration/resolve/
    resolve: {
      // resolve.alias: 更轻松地为import或require某些模块创建别名
      alias: [
        {
          find: "@",
          replacement: resolve(__dirname, "./src"),
        },
        {
          find: "ts-hiprint",
          replacement: resolve(__dirname, "./src"),
        },
      ],
    },
    plugins,
    build,
  };
});
