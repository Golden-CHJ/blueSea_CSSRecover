<template>
  <div>
    <div class="view">
      <div class="test">
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
        border: "10px solid hsla(0, 0%, 100%, 0.5)",
        background: "white",
        "background-clip": "padding-box",
        "word-wrap": "break-word",
      },
      content: {
        title: "半透明背景框",
        know: "hsla background-clip",
        detail:
          "hsla:色相（H）是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等,\n" +
          "饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取 0-100% 的数值。\n" +
          "亮度（L） 取 0-100%，增加亮度，颜色会向白色变化；减少亮度，颜色会向黑色变化。\n" +
          "透明度（A） 取值 0~1 之间， 代表透明度。\n" +
          "background-clip:这个属性的初始值是border-box，意味着背景会被元素的border剪裁掉，我们要做的事把他的值设为padding-box，这样浏览器就会用类变局的外延来吧背景裁剪掉" +
          "默认状态下，背景会延伸到边框的区域下层",
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