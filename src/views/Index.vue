<template>
  <!-- <img class="wh bg" :src="returnBgImg()" alt="" /> -->
  <video class="bg" autoplay="autoplay" loop="loop" muted>
    <source :src="returnBgVideo()" type="video/mp4" />
  </video>
  <header class="header">
    <HEADER />
  </header>
  <article class="content fl">
    <div class="left fl cc">
      <INFO />
    </div>
    <div class="right fl">
      <RECOMMEND />
    </div>
  </article>
  <!-- <Suspense>
    <template #default>
      <test></test>
    </template>
    <template #fallback>
      <LOADING />
    </template>
  </Suspense> -->
</template>

<script lang="ts">
import LOADING from "../components/Loading.vue";
import HEADER from "../components/Header.vue";
import INFO from "../components/Info.vue";
import RECOMMEND from "../components/Recommend.vue";
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {
    LOADING,
    HEADER,
    INFO,
    RECOMMEND
  },
  setup() {
    const state = reactive({});
    const returnBgVideo = () => {
      const path = `../assets/demp.mp4`;
      const modules = import.meta.globEager("../assets/demp.mp4");
      return modules[path].default;
    };
    onMounted(() => {});
    // const state = reactive({
    //   clickLeft: false,
    //   clickRight: false,
    // });
    // const clickbtn = (e: any) => {
    //   let x = e.clientX - e.target.offsetLeft;
    //   let y = e.clientY - e.target.offsetTop;
    //   e.target.children[0].style.left = x + "px";
    //   e.target.children[0].style.top = y + "px";
    //   if (e.target.className == "left") state.clickLeft = true;
    //   else if (e.target.className == "right") state.clickRight = true;
    //   setTimeout(() => {
    //     state.clickLeft = false;
    //     state.clickRight = false;
    //   }, 600);
    // };
    return {
      // clickbtn,
      returnBgVideo,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>
.bg {
  position: fixed;
  z-index: -1;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  filter: brightness(80%);

  source {
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
  }
}

.header {
  height: 60px;
}

.content {
  height: calc(100vh - 60px);

  .left {
    flex: 2;
  }
  
  .right {
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
