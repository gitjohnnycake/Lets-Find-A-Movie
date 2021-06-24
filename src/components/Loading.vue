<template>
  <div class="loading fl cc">
    <ul class="mb-40">
      <li
        v-for="(item, index) in range"
        :key="index"
        :class="'item' + (index + 1)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    const range = 9;
    return { range };
  },
};
</script>

<style lang="less" scoped>
@keyframes loading {
  0%,
  5%,
  95%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  30%,
  70% {
    transform: translate(-50px, 0px) rotate(-90deg);
  }
}
each(range(9), {
  .item@{value} {
    animation-delay: if(@value > 2, ((@value - 2) * 50ms) , 0)!important;
  }
});
@distance: 44px;
.loading {
  width: 100vw;
  height: 100vh;
  background-color: #5aaae5;

  ul {
    position: relative;

    li {
      width: 36px;
      height: 36px;
      background-color: #fff;
      border-radius: 2px;
      margin: 2px;
      position: absolute;
      animation: loading 2s ease-in-out infinite;

      &:nth-child(2),
      &:nth-child(5),
      &:nth-child(8) {
        left: @distance;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        left: @distance * 2;
      }
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        top: @distance;
      }
      &:nth-child(7),
      &:nth-child(8),
      &:nth-child(9) {
        top: @distance * 2;
      }
    }
  }
}
</style>
