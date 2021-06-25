<template>
  <div class="header fl">
    <div class="logo mr-20 ml-40">
      <img class="wh" src="" alt="" />
    </div>
    <div class="nav wh">
      <ul class="navContainer wh fl">
        <li
          class="navItem"
          :class="navIndex == index ? 'curNav' : ''"
          v-for="(item, index) in navList"
          :key="index"
          @click="clickNav(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="search wh fl mr-40 ml-40">
      <img class="searchIcon mg-10" src="../assets/search.png" alt="" />
      <input
        class="searchInput wh fs-16"
        type="text"
        placeholder="Search For Movies..."
      />
      <div class="dropDownMenu fl">
        <p>百度搜索</p>
        <img class="ml-10" src="../assets/arrowDown.png" alt="" />
      </div>
    </div>
    <div class="mine fl cc ml-40">
      <div class="avator mr-16 ml-16">
        <img class="wh" src="" alt="" />
      </div>
      <div class="name">name</div>
      <div class="arrow fl cc ml-10">
        <img class="arrowDown" src="../assets/arrowDown.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const state = reactive({
      navList: ["Home", "Movies", "Series", "My List"],
      navIndex: 0,
    });
    const clickNav = (index) => {
      state.navIndex = index;
    };
    return { clickNav, ...toRefs(state) };
  },
});
</script>

<style lang="less" scoped>
.header {
  justify-content: space-around;
  align-items: center;

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid;
  }

  .nav {
    flex: 1;

    .navContainer {
      justify-content: space-evenly;
      align-items: center;

      .navItem {
        flex: 1;
        cursor: pointer;
        color: #adadad;
        height: 100%;
        text-align: center;
        line-height: 60px;
      }

      .curNav {
        position: relative;
        color: @white;

        &::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          left: 45%;
          bottom: 5px;
          background: @themeColor;
        }
      }
    }
  }

  .search {
    flex: 1;
    align-items: center;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 96%;
      height: 1px;
      left: 2%;
      bottom: 5px;
      background: @themeColor;
    }

    .searchIcon {
      width: 24px;
      height: 24px;
    }

    .searchInput {
      outline: none;
      border: none;
      background: transparent;
    }

    .dropDownMenu {
      width: 160px;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }

  .mine {
    margin-right: 60px;

    .avator {
      width: 50px;
      border-radius: 50%;
      height: 50px;
      border: 1px solid;
    }

    .arrow {
      .arrowDown {
        width: 14px;
        height: 14px;
      }
    }
  }
}
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: @white;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: @white;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: @white;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: @white;
}
</style>
