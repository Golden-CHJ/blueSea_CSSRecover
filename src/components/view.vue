<template>
  <div class="view">
    <div class="test">
      <div :style="style">
        <p>sadfaskljdhfglkasjdhf;kasjdhfklajshdfl23424kja23523shfklasjhdflkjhlasdasdasdasdasdasdasd</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewPanel",
  props: {
    style: Object,
  },
};
</script>

<style lang="stylus">
.view {
  width: 100%;
  height: 600px;
  border: 1px solid black;
}

.test {
  position: relative;
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background: url('../assets/test1.jpg');
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  width: 200px;
  height: 200px;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;

  p {
    word-wrap: break-word;
  }
}
</style>