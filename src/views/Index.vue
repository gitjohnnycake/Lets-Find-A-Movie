<template>
  <LOADING v-if="loading" />
  <video v-if="!loading" :src="cgSrc" type="video/mp4" class="bg" autoplay="autoplay" loop="loop" muted>
  </video>
  <header v-if="!loading" class="header">
    <HEADER :navCur="0" />
  </header>
  <article v-if="!loading" class="content fl">
    <div class="left fl cc">
      <INFO :movieList="movieList" />
    </div>
    <div class="right fl">
      <RECOMMEND :movieList="movieList" @clickMovie="clickMovie" />
    </div>
  </article>
</template>

<script lang="ts">
import LOADING from "../components/Loading.vue";
import HEADER from "../components/Header.vue";
import INFO from "../components/Info.vue";
import RECOMMEND from "../components/Recommend.vue";
import { defineComponent, reactive, toRefs } from "vue";
import { getMovie } from "../api/index";

interface state {
  loading: boolean,
  movieList: Array<any>,
  cgSrc: string
}

export default defineComponent({
  name: "App",
  components: {
    LOADING,
    HEADER,
    INFO,
    RECOMMEND,
  },
  setup() {
    const state: state = reactive({
      loading: true,
      movieList: [],
      cgSrc: "",
    });
    function clickMovie(movie: any): void {
      state.loading = true
      state.movieList = movie;
      state.cgSrc = (state.movieList[0] as any).cg;
      state.loading = false
    }
    getMovie().then((res) => {
      console.log(res.data);
      state.movieList = res.data;
      state.cgSrc = res.data[0].cg;
      state.loading = false;
    });
    return {
      ...toRefs(state),
      clickMovie,
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
  background: #00000091;
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
