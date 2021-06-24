<template>
  <div class="bg wh"></div>
  <div class="container fl">
    <div class="left fl cc">
      <div class="login fldc cc pd-40">
        <img class="logo mb-40" src="../assets/logo.png" alt="" />
        <div class="inputBox pd-10 mb-10 wh">
          <input class="wh" type="text" placeholder="PHONE" />
        </div>
        <div class="inputBox pd-10 mb-10 wh">
          <input class="wh" type="password" placeholder="PASSWORD" />
        </div>
        <div class="loginBtn mb-20 mt-20 wh pd-10 fl cc">LOGIN</div>
        <div class="registerBtn mb-20 wh pd-10 fl cc">SIGN UP</div>
        <div class="forgetPassword fs-10">Forgot password?</div>
      </div>
    </div>
    <div class="right fl cc">
      <div class="info pd-40">
        <p class="fs-40 pd-10">NICE</p>
        <p class="fs-40 pd-10">TO</p>
        <p class="fs-40 pd-10">MEET</p>
        <p class="fs-40 pd-10">YOU</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="less" scoped>
.bg {
  background: url("../assets/33.jpeg") no-repeat left top;
  background-size: cover;
  position: absolute;
  z-index: -1;
}
.container {
  font-family: monospace;
  width: 100vw;
  height: 100vh;
  justify-content: space-evenly;

  .left,
  .right {
    .login {
      width: 80%;
      background-color: #f0f0f09a;
      position: relative;

      .logo {
        width: 80%;
        height: 80%;
      }

      .inputBox {
        position: relative;

        input {
          border: none;
          outline: none;
          background-color: transparent;
        }

        &::after {
          content: "";
          position: absolute;
          width: 90%;
          height: 2px;
          left: 5%;
          border-radius: 16px;
          bottom: 0;
          background-color: #686868;
        }
      }

      .loginBtn {
        background-color: #000;
        color: #fff;
        border-radius: 30px;
      }
      .registerBtn {
        background-color: #cbcbcb;
        border-radius: 30px;
      }
      .forgetPassword {
        position: absolute;
        bottom: 10px;
      }
    }

    .info {
      width: 30%;

      p:first-child {
        margin: 20px 0 20px 40px;
      }
      p:nth-child(2) {
        margin: 20px 0 20px 60px;
      }
      p:nth-child(3) {
        margin: 20px 20px 20px 0;
      }
      p:nth-child(4) {
        margin: 20px 0 20px 60px;
      }
    }
  }
}
</style>
