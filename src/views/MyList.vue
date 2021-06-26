<template>
  <div class="container">
    <header>
      <HEADER />
    </header>
    <article>
      <LIST />
    </article>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import HEADER from "../components/Header.vue";
import LIST from "../components/List.vue";
export default defineComponent({
  name: "mylist",
  components: {
    HEADER,
    LIST
  },
});
</script>

<style lang="less" scoped>
.container {
  background: #202020;
}
</style>
