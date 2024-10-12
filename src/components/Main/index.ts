import { App } from "vue";
import Main from "./Main.vue";

// export * from '../interface/hiprint';

Main.install = function (app: App) {
    app.component(Main.name!, Main);
}

export const TsMain = Main;
export type TsMainInstance = InstanceType<typeof Main>;