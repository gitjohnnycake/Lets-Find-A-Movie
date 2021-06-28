<template>
  <div class="loading fl cc">
    <div class="box">
      <div class="eye"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const range = 9;
    return { range };
  },
};
</script>

<style lang="less" scoped>
@-webkit-keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
@-moz-keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
@keyframes eyeball {
  0% {
    left: 9px;
  }
  100% {
    left: 1px;
  }
}
@distance: 44px;
.loading {
  width: 100vw;
  height: 100vh;
  background-color: #000000;

  .box {
    width: 100px;
    background-color: rgba(0, 0, 0, 0.02);
    height: 100px;
    border-radius: 1px;

    .eye {
      width: 20px;
      height: 20px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      box-shadow: 30px 0px 0px 0px rgb(255 255 255 / 80%);
      position: relative;
      margin: 36px 26px;

      &::after {
        background-color: #59488b;
        width: 10px;
        height: 10px;
        box-shadow: 30px 0px 0px 0px #59488b;
        border-radius: 50%;
        left: 9px;
        top: 8px;
        position: absolute;
        content: "";
        -webkit-animation: eyeball .4s linear infinite alternate;
        -moz-animation: eyeball .4s linear infinite alternate;
        animation: eyeball .4s linear infinite alternate;
      }
    }
  }
}
</style>
