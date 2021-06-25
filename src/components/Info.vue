<template>
  <div class="container fldc mb-40">
    <div class="title mg-20">新世纪</div>
    <div class="info fl mb-20">
      <div
        class="infoItem fl cc"
        v-for="(item, index) in infoList"
        :key="index"
      >
        <img :src="returnIcon(item.img)" alt="" />
        <p class="ml-10">{{ item.info }}</p>
      </div>
    </div>
    <div class="introduction mb-32">
      vue动态引入本地图片的方法总结 - 法国梧桐和小伙子 - 博... 2019年10月15日
      方法二:框架里面引入本地图片(在引入vue.js的情况下使用会报错)
      直接在data中引入。 data:{ return{
      img:"require("../../assets/images/case4.png")" } } 方...
    </div>
    <div class="btnList fl">
      <div class="go fl cc">
        <img src="../assets/play.png" alt="" />
        <p class="ml-10">Go</p>
      </div>
      <div class="myList fl cc">
        <img src="../assets/plus.png" alt="" />
        <p class="ml-10">Add MyList</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";

export default defineComponent({
  name: "Info",
  setup() {
    const state = reactive({
      infoList: [
        {
          img: "star.png",
          info: "豆瓣 8.0",
        },
        {
          img: "time.png",
          info: "DURATION: 1H 54M",
        },
        {
          img: "date.png",
          info: "YEAR: 2000",
        },
      ],
    });
    const returnIcon = (src) => {
      const path = `../assets/${src}`;
      const modules = import.meta.globEager("../assets/*.png");
      return modules[path].default;
    };
    return {
      returnIcon,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  width: 60%;

  .title {
    font-size: 50px;
    font-weight: 900;
  }

  .info {
    justify-content: space-between;

    .infoItem {
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .introduction {
    text-indent: 20px;
    letter-spacing: 1px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  .btnList {
    justify-content: space-around;
    .go {
      background: @themeColor;
    }
    .myList {
      background: #ffffff;
    }
    .go,
    .myList {
      padding: 10px 20px;
      border-radius: 30px;

      p {
        color: #000000;
      }
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
