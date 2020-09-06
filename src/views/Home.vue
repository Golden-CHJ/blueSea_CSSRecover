<template>
  <div>
    <view-panel :style="style"></view-panel>
    <control-panel @changeStylePanel="changeStyleView"></control-panel>
  </div>
</template>

<script>
// @ is an alias to /src
import controlPanel from "../components/controlPanel.vue";
import viewPanel from "../components/view.vue";
export default {
  name: "Home",
  components: {
    controlPanel,
    viewPanel,
  },
  data() {
    return {
      style: {},
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

<style lang="stylus"></style>