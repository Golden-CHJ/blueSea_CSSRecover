<template>
  <div class="tip">
    <div>title:{{content.title}}</div>
    <div>know:{{content.know}}</div>
    <div>detail"{{content.detail}}</div>
    <div>tip:{{content.tip}}</div>
  </div>
</template>

<script>
export default {
  name: "tip",
  props: {
    content: Object,
  },
};
</script>

<style lang="stylus">
.tip {
  width: 100%;
  height: 200px;
  border: 2px solid black;
}
</style>
