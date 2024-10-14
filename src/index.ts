import { App, Plugin } from "vue";

// 引入组件样式
import "@sv-print/hiprint/dist/style.css";
import { TsDesigner } from "./components/Design";
import { TsRender } from "./components/Render";
import { TsMain } from "./components/Main";
import { hiprint } from "@sv-print/hiprint";

const components = [TsDesigner, TsRender, TsMain];

const TsHiPrint: Plugin = {
  install(app: App) {
    components.map((c) => {
      app.component(c.name!, c);
    });
  },
};

export default TsHiPrint;

export * from "./components";
export * from "./interface";

export { hiprint };
