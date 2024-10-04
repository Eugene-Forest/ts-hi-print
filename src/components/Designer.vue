<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header
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
    PrintTemplate,
  } from "@sv-print/hiprint";
  import { onMounted } from "vue";
  import $ from "jquery";
  
  let hiprintTemplate: PrintTemplate;
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
    disAutoConnect();
  }
  
  onMounted(() => {
    init();
  });
  </script>
  