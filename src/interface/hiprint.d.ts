/**
 * 实现对 @sv-print/hiprint 核心js 代码库的类型的二次封装
 */

import "@sv-print/hiprint";

declare module "@sv-print/hiprint" {
  export declare interface PrintTemplate {
    /** 新建一个面板 */
    addPrintPanel(option: AddPanelOption): Panel;
    /** 面板数组 */
    printPanels: Array<Panel>;
  }
  declare class DesignPaper {
    /**
     * 创建水印
     * @param watch 是否删除同名水印(!并不确定是此含义)
     * @param templateId 画板ID
     * @param option 水印选项
     */
    createWaterMark(
      watch: boolean,
      templateId: string,
      option: WaterMarkOption
    );
  }
  /** 画板对象 */
  declare class Panel {
    /** ID */
    templateId: string;
    designPaper: DesignPaper;
    watermarkOptions: any;
    /** 添加文本对象 */
    addPrintText(...args: any): any;
    /** 添加横线对象 */
    addPrintHline(...args: any): any;
    /** 添加竖线对象 */
    addPrintVline(...args: any): any;
    /** 添加矩形对象 */
    addPrintRect(...args: any): any;
    /** 添加椭圆对象 */
    addPrintOval(...args: any): any;
    /** 添加图片对象 */
    addPrintImage(...args: any): any;
    /** 添加表格对象 */
    addPrintTable(...args: any): any;
    /** 添加长文对象 */
    addPrintLongText(...args: any): any;
    /** 添加html */
    addPrintHtml(...args: any): any;
  }

  interface AddPanelOption {
    width: number;
    height: number;
    panelPageRule?: string;
    name?: string;
    leftOffset?: number;
    topOffset?: number;
    paperHeader?: number;
    paperFooter?: number;
    paperNumberDisabled?: boolean;
    paperNumberFormat?: string;
    fontFamily?: string;
    orient?: string;
    panelPaperRule?: string;
    firstPaperFooter?: number;
    lastPaperFooter?: number;
    evenPaperFooter?: number;
    oddPaperFooter?: number;
    watermarkOptions?: any;
  }

  /** 水印参数 */
  interface WaterMarkOption {
    /** 水印id */
    id: string;
    /** 是否监听 */
    watch: boolean;
    /** 水印内容 */
    content: string;
    /** 水印容器, jquery 查询 class 或 id 的字符串 */
    container: string;
    /** 水印宽度 */
    width: number;
    /** 水印高度 */
    height: number;
    /** 水印文字水平对齐方式 */
    textAlign: string;
    /** 水印文字垂直对齐方式 */
    textBaseline: string;
    /** 水印文字大小 */
    fontSize: string;
    /** 水印文字字体 */
    fontFamily: string;
    /** 水印文字颜色 */
    fillStyle: string;
    /** 水印文字旋转角度 */
    rotate: number;
    /** 是否显示时间戳 */
    timestamp: boolean;
    /** 时间戳格式 */
    format: string;
    /** 图层 */
    zIndex: number;
  }
}
