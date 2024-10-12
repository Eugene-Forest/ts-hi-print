import { App } from "vue";
import Designer from "./Designer.vue";

// export * from '../interface/hiprint';

Designer.install = function (app: App) {
    app.component(Designer.name!, Designer);
}
// 注册组件
export const TsDesigner = Designer;
export type TsDesignerInstance = InstanceType<typeof Designer>;