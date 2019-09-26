<template>
  <div id="login">
    <span @click="login()">登入</span>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      this.$router.push({
        path: "/auth",
        key: new Date()
      });
    }
  }
};
</script>

<style lang='scss'>
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   /* text-align: center; */
//   color: #2c3e50;
//   height: 100%;
//   /* margin-top: 60px; */
// }
</style>
