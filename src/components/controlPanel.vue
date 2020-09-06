<template>
  <div class="control">
    <div v-for="(index,item) in changedStyle" :key="index" class="panel">
      <p>{{item}}</p>
      <input type="text" v-model="changedStyle[item]" />
    </div>
    <button @click="changeStyle">让我试试</button>
  </div>
</template>

<script>
export default {
  name: "controlPanel",
  props: {
    style: Object,
  },
  data() {
    return {
      changedStyle: {},
    };
  },
  mounted() {
    this.changedStyle = this.style;
  },
  methods: {
    changeStyle: function () {
      console.log("我是控制面板的参数", this.changedStyle);
      this.$emit("changeStylePanel", this.changedStyle);
    },
  },
};
</script>

<style lang="stylus">
.control {
  width: 100%;
  height: 200px;
  border: 1px solid black;
}

.panel {
  float: left;
  margin-left: 5px;
}
</style>