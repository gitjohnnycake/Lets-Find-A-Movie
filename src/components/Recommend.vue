<template>
  <div class="container fldc">
    <div class="item fl">
      <div class="leftImg">
        <img class="wh" src="../assets/hh.jpeg" alt="" />
      </div>
      <div class="rightInfo fldc">
        <img class="rightImg wh" src="../assets/hh.jpeg" alt="" />
        <div class="introduction mg-20">简介</div>
        <div class="btnList fl mg-10">
          <div class="go fl cc">
            <img src="../assets/playSmall.png" alt="" />
            <p class="ml-8">Go</p>
          </div>
          <div class="myList fl cc">
            <img src="../assets/plusSmall.png" alt="" />
            <p class="ml-8">Add MyList</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item fl">
      <div class="leftImg">
        <img class="wh" src="../assets/hh.jpeg" alt="" />
      </div>
      <div class="rightInfo fldc">
        <img class="rightImg wh" src="../assets/hh.jpeg" alt="" />
        <div class="introduction mg-20">简介</div>
        <div class="btnList fl mg-10">
          <div class="go fl cc">
            <img src="../assets/playSmall.png" alt="" />
            <p class="ml-8">Go</p>
          </div>
          <div class="myList fl cc">
            <img src="../assets/plusSmall.png" alt="" />
            <p class="ml-8">Add MyList</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  justify-content: space-evenly;

  .item {
    align-items: flex-end;

    .leftImg {
      width: 170px;
      height: 200px;
      img {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
    }

    .rightInfo {
      position: relative;
      width: 220px;
      height: 180px;

      .introduction {
        height: 100%;
      }

      .rightImg {
        position: absolute;
        z-index: -1;
        filter: brightness(50%);
      }

      .btnList {
        justify-content: space-around;
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
