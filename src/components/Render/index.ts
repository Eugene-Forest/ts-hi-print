import { App } from "vue";
import Render from "./Render.vue";

// export * from '../interface/hiprint';

Render.install = function (app: App) {
    app.component(Render.name!, Render);
}

export const TsRender = Render;
export type TsRenderInstance = InstanceType<typeof Render>;