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
  name: "A4",
  components: {
    controlPanel,
    tip,
  },
  data() {
    return {
      style: {
        position: "absolute",
        top: "10%",
        left: "50%",
        "margin-top": "-100px",
        "margin-left": "-100px",
        width: "200px",
        height: "200px",
        "border-radius": "3px",
        "box-shadow": "0 0 0 10px #655",
        background: "yellow",
        outline: "5px solid 655",
        "word-wrap": "break-word",
      },
      content: {
        title: "边框类圆角",
        know: "box-shaow outline",
        detail:
          "box-shadow 会贴合边框投影 圆边也是圆边投影， 使outline月box-shadow颜色一致就行",
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