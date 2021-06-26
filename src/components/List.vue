<template>
  <ul class="Listcontainer mt-20">
    <li class="item fldc ts-3" v-for="(item, index) in t" :key="index">
      <div class="delete ts-3">
        <img class="wh ts-3" src="../assets/delete.png" alt="" />
      </div>
      <div class="imgBox wh">
        <img
          class="ts-3"
          src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2026157878.webp"
          alt=""
        />
      </div>
      <div class="info fldc mb-14 ml-10 ts-3">
        <div class="name">新世纪</div>
        <div class="year fs-14 txt">
          <p class="fs-10">Year:</p>
          2000
        </div>
        <div class="type fs-14 txt">
          <p class="fs-10">Category:</p>
          冒险、动作、悬疑asdadasd
        </div>
        <div class="star fs-14 txt">
          <p class="fs-10">豆瓣:</p>
          5.7
        </div>
      </div>
      <div class="btn ts-3 pd-10 fl cc fs-12">
        <img class="mr-10 ts-3" src="../assets/playSmall.png" alt="" />
        View
      </div>
    </li>
  </ul>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";

export default defineComponent({
  name: "list",
  setup() {
    const state = reactive({
      t: 17,
    });
    return { ...toRefs(state) };
  },
});
</script>

<style lang="less" scoped>
.Listcontainer {
  overflow: hidden;
  padding: 0 4%;

  .item {
    width: 18%;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    margin: 0 1% 10px 1%;
    position: relative;
    justify-content: flex-end;
    align-items: center;

    &:hover {
      background: #3a3a3a52;
    }

    &:hover .imgBox img {
      filter: brightness(20%);
    }
    &:hover .info,
    &:hover .btn,
    &:hover .delete {
      opacity: 1;
      z-index: 99;
    }

    .delete {
      position: absolute;
      top: 10px;
      z-index: -99;
      right: 14px;

      img {
        width: 14px;
        height: 14px;

        &:hover {
          transform: scale(1.4);
        }
      }
    }

    .imgBox {
      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
      }
    }

    .info {
      z-index: -99;
      opacity: 0;
      width: 80%;
      margin: 0 10px 58px;
      position: absolute;

      p {
        display: inline-block;
      }
    }
    .btn {
      opacity: 0;

      &:hover {
        transform: scale(1.4);
        color: @themeColor;
      }

      img {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
