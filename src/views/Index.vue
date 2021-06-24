<template>
  <!-- <Suspense>
    <template #default>
      <test></test>
    </template>
    <template #fallback>
      <LOADING />
    </template>
  </Suspense> -->
  <div></div>
</template>

<script lang="ts">
import LOADING from "../components/Loading.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {
    LOADING,
  },
  setup() {
    const state = reactive({
      clickLeft: false,
      clickRight: false,
    });
    const clickbtn = (e) => {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      e.target.children[0].style.left = x + "px";
      e.target.children[0].style.top = y + "px";
      if (e.target.className == "left") state.clickLeft = true;
      else if (e.target.className == "right") state.clickRight = true;
      setTimeout(() => {
        state.clickLeft = false;
        state.clickRight = false;
      }, 600);
    };
    return {
      clickbtn,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>

</style>
