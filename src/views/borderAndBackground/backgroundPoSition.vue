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
        border: "1px solid black",
        background:
          "url('//www.baidu.com/img/flexible/logo/pc/result.png') no-repeat",
        "background-position": "right 20px bottom 10px",
        "background-origin": "border-box",
        "background-position": "calc(100% - 20px) calc(100% - 10px) ",
      },
      content: {
        title: "灵活的背景定位",
        know: "background-position background-origin calc()",
        detail:
          `很多时候，我们先针对容器地摸个叫对背景图片做便宜定位，如右下角可以使用background-position` +
          `如background-position:right 20px bottom 10px想右边做20opx偏移 想下方做10px偏移` +
          `background-origin:  对于background-position ：left top来说 一个元素有三个框 ：borderbox padding box contentbox， 默认情况是paddingbox 可以改为contentbox 或者borderbox` +
          `calc():以左上角来说或 background-position:calc(100%-20px) calc(100%-10px)`,
        tip:
          'calc() 函数用于动态计算长度值。需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；任何长度值都可以使用calc()函数进行计算；calc()函数支持 "+", "-", "*", "/" 运算；calc()函数使用标准的数学运算优先级规则；',
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