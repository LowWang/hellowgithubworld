Page({
  data: {
    inputVal: "",
     lists: [
       {
         classfity:"湿垃圾",
         describe:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;包括剩菜剩饭、骨头、菜根菜叶、果皮等食品类废物。经生物技术就地处理堆肥，每吨可生产0.6~0.7吨有机肥料。",
         image:"../../resources/image/shilaji.png",
         cardcolor:" background: rgb(95, 66, 23);",
         bgcolor:"background: rgb(253, 233, 204);"
       },
       {
         classfity: "干垃圾",
         describe: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;包括除上述几类垃圾之外的砖瓦陶瓷、渣土、卫生间废纸、纸巾等难以回收的废弃物及果壳、尘土、食品袋（盒）。采取卫生填埋可有效减少对地下水、地表水、土壤及空气的污染。",
           image: "../../resources/image/ganlaji.png",
         cardcolor: "background: rgb(44, 31, 11)",
         bgcolor: "background: rgb(204, 204, 204);"
       },
       {
         classfity: "可回收物",
         describe: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主要包括废纸、塑料、玻璃、金属和布料五大类。废纸：主要包括报纸、期刊、图书、各种包装纸等。但是，要注意纸巾和厕所纸由于水溶性太强不可回收。塑料：各种塑料袋、塑料泡沫、塑料包装、一次性塑料餐盒餐具、硬塑料、塑料牙刷、塑料杯子、矿泉水瓶等。玻璃：主要包括各种玻璃瓶、碎玻璃片、镜子、暖瓶等。金属物：主要包括易拉罐、罐头盒等。布料：主要包括废弃衣服、桌布、洗脸巾、书包、鞋等。",
         image: "../../resources/image/huishoulaji.png",
         cardcolor: "background:rgb(14, 30, 85);",
         bgcolor: "background: rgb(217, 238, 255);"
       },
       {
         classfity: "有害垃圾",
         describe: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;含有对人体健康有害的重金属、有毒的物质或者对环境造成现实危害或者潜在危害的废弃物。包括电池、荧光灯管、灯泡、水银温度计、油漆桶、部分家电、过期药品、过期化妆品等。这些垃圾一般使用单独回收或填埋处理。",
         image: "../../resources/image/youhailaji.png",
         cardcolor: "background: rgb(255, 17, 17)",
         bgcolor: "background:rgb(255, 174, 174);"
       },
    ],
    indexId: 0,
    currentlist:[
      {
        name:"瓜子",
        classify:"湿垃圾",
      },
      {
        name: "纸巾",
        classify: "干垃圾",},
      {
        name: "小壮",
        classify: "真垃圾",}
    ],
    searchlist:{


    },
  },
  onLoad: function (options) {
  },

  jumpIndex:function(e) {
    let index = e.currentTarget.dataset.tapindex;
    this.setData({
      indexId: index
    });
  },

  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});