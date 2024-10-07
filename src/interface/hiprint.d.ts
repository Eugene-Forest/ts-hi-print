/**
 * 实现对 @sv-print/hiprint 核心js 代码库的类型的二次封装
 *
 * 针对 class 的重写，按照通常的 Java 重写语法即可
 *
 * 针对 interface 的重写，通过 Pick 或者 Omit 语法实现继承即可
 */

import "@sv-print/hiprint";

declare module "@sv-print/hiprint" {
  export class hiprint {
    /** 初始化 */
    static init: (...args: any) => void;
    static register: (...args: any) => void;
    static setConfig: (...args: any) => void;
    static updateElementType: (...args: any) => void;
    static hiwebSocket: any;
    static refreshPrinterList: (...args: any) => void;
    static getAddress: (...args: any) => void;
    static ippPrint: (...args: any) => void;
    static ippRequest: (...args: any) => void;
    static PrintElementTypeManager: any;
    static PrintElementTypeGroup: any;
    /** 模板 */
    static PrintTemplate: TsPaintTemplate;
    static print: (...args: any) => any;
    static print2: (...args: any) => any;
    static getHtml: (...args: any) => any;
  }

  export declare interface TsPaintTemplate extends Pick<PrintTemplate, "id"> {
    constructor(options?: any);
    id: string;
    history: boolean;
    historyPos: number;
    historyList: Array<any>;
    container: any;
    editingPanel: Array<any>;
    /** 面板数组 */
    printPanels: Array<Panel>;
    design: (...args: any) => any;
    update: (...args: any) => any;
    print: (...args: any) => any;
    print2: (...args: any) => any;
    getHtml: (...args: any) => any;
    clear: () => any;
    rotatePaper: () => any;
    setPaper: () => any;
    getOrient: () => any;
    zoom: (...args: any) => any;
    undo: () => any;
    redo: () => any;
    getPrintStyle: () => any;
    getPaperType: () => any;
    copyJson: () => any;
    cutJson: () => any;
    canPaste: () => boolean;
    getSelectEls: (...args: any) => any;
    updateOption: (...args: any) => any;
    setElsAlign: (...args: any) => any;
    setElsSpace: (...args: any) => any;
    getJson: (...args: any) => any;
    getJsonTid: (...args: any) => any;
    getPrinterList: (...args: any) => any;
    on: (...args: any) => any;
    setFields: (...args: any) => any;
    setFontList: (...args: any) => any;
    setPaperList: (...args: any) => any;
    setOnImageChooseClick: (...args: any) => any;
    onDataChanged: (...args: any) => any;
    /** 新建一个面板 */
    addPrintPanel(option: AddPanelOption): Panel;
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

  /** 画板参数 */
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
