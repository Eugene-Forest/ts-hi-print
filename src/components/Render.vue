<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <!-- 这是 "拖拽设计器" 容器 -->
        <div id="hiprint-printTemplate"></div>
      </el-main>
      <el-aside width="200px">
        <!-- 这是 "元素参数设置" 容器 -->
        <div id="PrintElementOptionSetting"></div>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup lang="ts">

import {
  autoConnect,
  disAutoConnect,
  hiprint,
  defaultElementTypeProvider,
  PrintTemplate,
} from "@sv-print/hiprint";
import { onMounted } from "vue";
import $ from "jquery";
let hiprintTemplate: PrintTemplate;
function init() {
  hiprint.init();
  // 有时可能是第二次进入此页面, 所以需要先清空 "拖拽设计器" 容器
  $("#hiprint-printTemplate").empty();
  // 创建模板对象
  // @ts-ignore
  hiprintTemplate = new hiprint.PrintTemplate({
    // "初始模板 json"
    template: {},
    // "元素参数设置" 容器
    settingContainer: "#PrintElementOptionSetting",
  });
  // 将模板渲染到 "拖拽设计器" 容器 中
  hiprintTemplate.design("#hiprint-printTemplate");
  // 如果你只想打印, 那么 创建模板 对象 参数只需要 "初始模板 json" 然后调用 print/print2 即可
  // let printData = { text: "这是打印时显示的文本" };
  // hiprintTemplate.print(printData);
  disAutoConnect();
}

onMounted(() => {
  init();
});

</script>

<style lang="css" scoped></style>
