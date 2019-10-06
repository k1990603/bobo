<template>
  <div id="login">
    <span @click="login()">登入</span>
  </div>
</template>

<script>
import * as API from "../../api/one";

export default {
  name: "login",
  methods: {
    login() {
      this.$router.push({
        path: "/auth",
        key: new Date()
      });
    }
  },
  mounted() {
    let postBody = {
      password: 123456,
      username: "admin"
    };
    // var xhr = new XMLHttpRequest();
    // xhr.open(
    //   "POST",
    //   "http://127.0.0.1:8080/auth/sys/login?password=123456&username=admin",
    //   true
    // );
    // // 添加http头，发送信息至服务器时内容编码类型
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
    //     // fn.call(this, xhr.responseText);
    //     console.log(JSON.parse(xhr.responseText).data);
    //   }
    // };
    // xhr.send(null);
    API.login(postBody)
      .then(res => {
        // console.log(res, "222222222");
        if ((res.code = 200)) {
          console.log();
          this.$message.success(res.data);
        }
      })
      .catch(err => {
        console.log(err, "1111111111111");
      });
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
