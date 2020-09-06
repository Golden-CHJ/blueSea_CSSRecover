<template>
  <div>
    <div class="view">
      <div class="text">
        <div :style="style">
          <p>无聊感的产生主要归咎于两个因素：一是外部的刺激；二是自身的调节能力。相反，不清楚自己的需要和愿望，找不到生活的目标和意义，就会深陷在“无聊”的深渊中。</p>
        </div>
      </div>
    </div>
    <control-panel :style="style" @changeStylePanel="changeStyleView"></control-panel>
    <tip :content="content"></tip>
  </div>
</template>

<script>
import controlPanel from "../../components/controlPanel";
import tip from "../../components/tip";
export default {
  name: "A1",
  components: {
    controlPanel,
    tip,
  },
  data() {
    return {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        "margin-top": "-100px",
        "margin-left": "-100px",
        width: "200px",
        height: "200px",
        "box-shadow": "0 0 0 10px #655",
        background: "yellow",
        outline: "5px solid deeppink",
        "word-wrap": "break-word",
      },
      content: {
        title: "多重边框",
        know: "box-shaow outline",
        detail:
          "box-shadows:5个参数h-shadow	必需的。水平阴影的位置。允许负值\n" +
          "v-shadow	必需的。垂直阴影的位置。允许负值" +
          "blur	可选。模糊距离\n" +
          "spread	可选。阴影的大小\n" +
          "color	可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表" +
          "inset	可选。从外层的阴影（开始时）改变阴影内侧阴影" +
          "这个也可以多穿几个参数比如： box-shadow： 0 0 0 10px #665, 0 0 0 15 px deeppink" +
          "outline 描边 outline:#00FF00 dotted thick;" +
          "outline 不会贴合圆边",
        tip:
          '父子组件的传值，输入框input v-model而不是：value，div文字不换行使用"word-wrap": "break-word"',
      },
    };
  },
  methods: {
    changeStyleView: function (style) {
      console.log(style);
      this.style = style;
    },
  },
};
</script>

<style lang="stylus">
.view {
  width: 100%;
  height: 600px;
  border: 1px solid black;
}
</style>