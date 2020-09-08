<template>
  <div>
    <div class="view">
      <div class="test">
        <div :style="style"></div>
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
        border: "10px solid black",
        background: "linear-gradient(#fb3 50%,#58a 50%)",
        "background-size": "100% 30px",
      },
      content: {
        title: "背景条纹",
        know: "linear-gradient background-size",
        detail:
          "linear-gradien为了创建一个线性渐变，你需要设置一个起始点和一个方向（指定为一个角度）的渐变效果。你还要定义终止色。终止色就是你想让Gecko去平滑的过渡，并且你必须指定至少两种，当然也会可以指定更多的颜色去创建更复杂的渐变效果。\n" +
          "linear-gradient(to right ,#fb3 50% ,#58a 50%)竖直渐变\n" +
          "background-size: 宽 高",
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