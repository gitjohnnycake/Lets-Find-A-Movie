<template>
  <div class="container fldc mb-40">
    <div class="title mg-20">{{ movie[0].title }}</div>
    <div class="info fl mb-20">
      <div
        class="infoItem fl cc"
        v-for="(item, index) in infoList"
        :key="index"
      >
        <img :src="returnIcon(item.img)" alt="" />
        <p class="ml-10" v-if="index == 0">豆瓣: {{ item.info }}</p>
        <p class="ml-10" v-if="index == 1">DURATION:{{ item.info }}</p>
        <p class="ml-10" v-if="index == 2">YEAR: {{ item.info }}</p>
      </div>
    </div>
    <div class="introduction mb-32">
      {{ movie[0].actors }}
    </div>
    <div class="btnList fl">
      <div class="go fl cc ts-3">
        <img src="../assets/play.png" alt="" />
        <p class="ml-10">Go</p>
      </div>
      <div class="myList fl cc ts-3">
        <img src="../assets/plus.png" alt="" />
        <p class="ml-10">Add MyList</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from "@vue/runtime-core";

export default defineComponent({
  name: "Info",
  props: {
    movieList: {
      type: Array,
    },
  },
  setup(props) {
    const state = reactive({
      infoList: [
        {
          img: "star.png",
          info: "",
        },
        {
          img: "time.png",
          info: "",
        },
        {
          img: "date.png",
          info: "",
        },
      ],
      movie: [],
    });
    state.movie = props.movieList;
    const returnIcon = (src) => {
      const path = `../assets/${src}`;
      const modules = import.meta.globEager("../assets/*.png");
      return modules[path].default;
    };
    onMounted(() => {
      state.infoList.forEach((item, index) => {
        if (index == 0) item.info = state.movie[0].rate;
        if (index == 1) item.info = state.movie[0].duration;
        if (index == 2) item.info = state.movie[0].release_year;
      });
    });
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
      background: @white;
    }
    .go,
    .myList {
      user-select: none;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 30px;
      &:hover {
        transform: scale(1.2);
      }

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
