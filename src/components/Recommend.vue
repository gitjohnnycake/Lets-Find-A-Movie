<template>
  <div class="container fldc">
    <div class="item fl" v-for="(movie, index) in movie" :key="index">
      <div class="leftImg">
        <img class="wh" :src="movie.cover" alt="" />
      </div>
      <div class="rightInfo fldc">
        <img class="rightImg wh" :src="movie.cover" alt="" />
        <div class="introductionTitle ml-10 mt-10 mr-10 fs-14">{{movie.title}}</div>
        <div class="introduction mg-10 fs-13">{{movie.actors}}</div>
        <div class="btnList fl mg-10">
          <div class="go fl cc ts-3">
            <img src="../assets/playSmall.png" alt="" />
            <p class="ml-8 ts-3">Go</p>
          </div>
          <div class="myList fl cc ts-3">
            <img src="../assets/plusSmall.png" alt="" />
            <p class="ml-8 ts-3">Add MyList</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";

export default defineComponent({
  props: {
    movieList: {
      type: Array
    }
  },
  setup(props) {
    const state = reactive({
      movie: props.movieList.slice(1, 3)
    })
    return { ...toRefs(state) }
  }
});
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
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
      }

      .rightImg {
        position: absolute;
        z-index: -1;
        filter: brightness(50%);
      }

      .btnList {
        justify-content: space-around;

        .go,
        .myList {
          user-select: none;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
          &:hover p {
            color: @themeColor;
          }
        }
        img {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>
