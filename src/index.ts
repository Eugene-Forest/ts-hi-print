import { App, Plugin } from "vue";

import { TsDesigner } from "./components/Design";
import { TsRender } from "./components/Render";
import { TsMain } from "./components/Main";

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

