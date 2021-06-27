<template>
  <div class="container">
    <header>
      <HEADER :navCur="1" />
    </header>
    <article>
      <LIST />
    </article>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";
import HEADER from "../components/Header.vue";
import LIST from "../components/List.vue";
export default defineComponent({
  name: "mylist",
  components: {
    HEADER,
    LIST
  },
  setup() {
    // const state = reactive({
    //   navCur: 3
    // })
    // return { ...toRefs(state) }
  }
});
</script>

<style lang="less" scoped>
.container {
  background: #202020;
}
</style>
