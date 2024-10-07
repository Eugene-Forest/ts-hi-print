<template>
  <div class="common-layout">
    <el-container>
      <el-header
        >Header
        <!-- 这是 "多面板" 容器 点击切换面板 -->
        <div class="hiprint-printPagination"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- "可拖拽元素" 容器 -->
          <div
            title="这是方式2,仅显示自定义元素的标题"
            class="hiprintEpContainer2"
          ></div>
        </el-aside>
        <el-main>
          <!-- 这是 "拖拽设计器" 容器 -->
          <div id="hiprint-printTemplate"></div>
        </el-main>
        <el-aside width="200px">
          <!-- 这是 "元素参数设置" 容器 -->
          <div id="PrintElementOptionSetting"></div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// 这里和 vue-plugin-hiprint 使用方式一样。
import {
  autoConnect,
  disAutoConnect,
  hiprint,
  defaultElementTypeProvider,
  Panel,
  TsPaintTemplate,
} from "@sv-print/hiprint";
import { onMounted } from "vue";
import $ from "jquery";

// 水印参数
const defaultOption = {
  id: "watermark", // 水印id
  watch: false,
  content: "ts-hiprint", // 水印内容
  container: "#hiprint-printTemplate", // 水印容器
  width: 200, // 水印宽度
  height: 200, // 水印高度
  textAlign: "center", // 水印文字水平对齐方式
  textBaseline: "middle", // 水印文字垂直对齐方式
  fontSize: "14px", // 水印文字大小
  fontFamily: "Microsoft Yahei", // 水印文字字体
  fillStyle: "rgba(184, 184, 184, 0.3)", // 水印文字颜色
  rotate: 25, // 水印文字旋转角度
  timestamp: false, // 是否显示时间戳
  format: "YYYY-MM-DD HH:mm", // 时间戳格式
  zIndex: 0,
};
let hiprintTemplate: TsPaintTemplate
function init() {
  // 初始化 provider , 才能让 "可拖拽元素" 可正常拖拽 【因为要先去处理 provider 中的 "tid"】
  hiprint.init({
    providers: [new defaultElementTypeProvider()],
  });
  // 渲染 "可拖拽元素" 方式2, 指定 "可拖拽元素" 容器
  $(".hiprintEpContainer2").empty(); // // 有时可能是第二次进入此页面, 所以需要先清空 "可拖拽元素" 容器
  // hiprintEpContainer2 => "可拖拽元素" 容器
  // defaultModule => provider 对应的 ElementTypes --> context.addPrintElementTypes("defaultModule",[])
  // 有时如果你发现你页面出现重复的 "可拖拽元素" 元素, 那么你需要 先移除"旧"的 ElementTypes --> context.removePrintElementTypes("defaultModule");
  hiprint.PrintElementTypeManager.build(
    ".hiprintEpContainer2",
    "defaultModule"
  );
  // 有时可能是第二次进入此页面, 所以需要先清空 "拖拽设计器" 容器
  $("#hiprint-printTemplate").empty();
  // 创建模板对象
  // @ts-ignore
  hiprintTemplate = new hiprint.PrintTemplate({
    // "初始模板 json"
    template: {},
    // "元素参数设置" 容器
    settingContainer: "#PrintElementOptionSetting",
    // "多面板" 容器
    // 实现多面板， 需要在页面添加一个 <div class="hiprint-printPagination"/>
    // 不添加, 可不用下方代码, 如果没有对应 容器 写了也没用
    paginationContainer: ".hiprint-printPagination",
  });
  // 将模板渲染到 "拖拽设计器" 容器 中
  hiprintTemplate.design("#hiprint-printTemplate");
  // 如果你只想打印, 那么 创建模板 对象 参数只需要 "初始模板 json" 然后调用 print/print2 即可
  // let printData = { text: "这是打印时显示的文本" };
  // hiprintTemplate.print(printData);
  // console.log(hiprintTemplate);
  disAutoConnect();
  const mainPanel = hiprintTemplate.printPanels[0];
  // mainPanel.watermarkOptions = defaultOption;
  // 添加水印
  mainPanel.designPaper.createWaterMark(
    true,
    mainPanel.templateId,
    defaultOption
  );
}

function createPanel() {
  // 新建一个面板, 宽:100 高:100
  const panel = hiprintTemplate.printPanels[0];

  // let panel: Panel = hiprintTemplate.addPrintPanel({ width: 600, height: 600 });
  console.log(hiprintTemplate.printPanels.length);
  // 面板中 添加一个文本
  panel.addPrintText({
    options: {
      width: 100,
      height: 15,
      top: 20,
      left: 20,
      title: "手动添加的text",
      textAlign: "center",
    },
  });
  // 面板中 添加一个条形码
  panel.addPrintText({
    options: {
      width: 100,
      height: 40,
      top: 40,
      left: 20,
      title: "123456",
      textType: "barcode",
    },
  });
  // 面板中 添加一个二维码
  panel.addPrintText({
    options: {
      width: 100,
      height: 100,
      top: 80,
      left: 20,
      title: "123456",
      textType: "qrcode",
    },
  });
  console.log(hiprintTemplate.printPanels);
}

onMounted(() => {
  init();
  createPanel();
});
</script>
