<template>
  <div>{{ res }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  name: "test",
  async setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve()
      }, 2000)
    })
  },
});
</script>
