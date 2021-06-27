<template>
  <div class="header fl">
    <div class="logo mr-20 ml-40">
      <img class="wh" src="" alt="" />
    </div>
    <div class="nav wh">
      <ul class="navContainer wh fl">
        <li
          class="navItem ts-4"
          :class="navIndex == index ? 'curNav' : ''"
          v-for="(item, index) in navList"
          :key="index"
          @click="clickNav(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="search wh fl mr-40 ml-40">
      <img class="searchIcon mg-10" src="../assets/search.png" alt="" />
      <input
        class="searchInput wh fs-16"
        type="text"
        placeholder="Search For Movies..."
        v-model="searchValue"
        @keypress.enter="search"
      />
      <div class="dropDownMenu fl" @click="clickDropDown">
        <p class="ts-4">{{ searchList[searchCur].name }}</p>
        <img
          class="ml-10 ts-6"
          :class="show ? 'rotate' : ''"
          src="../assets/arrowDown.png"
          alt=""
        />
        <ul class="dropDown" :style="show ? 'display: block' : 'display: none'">
          <li
            class="dropDownItem pd-4 ts-2"
            v-for="(item, index) in searchList"
            :key="index"
            @click.stop="clickDropDownItem(index)"
          >
            {{ item.name }}
          </li>
        </ul>
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
import { defineComponent, reactive, toRefs, watch } from "@vue/runtime-core";
import router from "../router";

export default defineComponent({
  props: {
    navCur: {
      type: Number
    }
  },
  setup(props) {
    const state = reactive({
      navList: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "My List",
          url: "mylist",
        },
      ],
      navIndex: 0,
      show: false,
      searchValue: "",
      searchCur: 0,
      searchList: [
        {
          name: "豆瓣",
          url: "https://search.douban.com/movie/subject_search?search_text=",
        },
        {
          name: "百度",
          url: "https://www.baidu.com/s?ie=UTF-8&wd=",
        },
        {
          name: "谷歌",
          url: "https://www.google.com/search?q=",
        },
        {
          name: "爱奇艺",
          url: "https://so.iqiyi.com/so/q_",
        },
        {
          name: "腾讯视频",
          url: "https://v.qq.com/x/search/?q=",
        },
        {
          name: "优酷",
          url: "https://so.youku.com/search_video/q_",
        },
        {
          name: "乐视",
          url: "http://so.le.com/s?wd=",
        },
        {
          name: "网盘",
          url: "http://www.slimego.cn/search.html?q=",
        },
      ],
    });
    state.navIndex = props.navCur
    const clickNav = (index) => {
      router.push(state.navList[index].url)
    };
    const clickDropDown = () => {
      state.show = !state.show;
    };
    const clickDropDownItem = (index) => {
      state.searchCur = index;
      state.show = false;
    };
    const search = () => {
      let value = state.searchValue;
      if (state.searchCur === 7)
        window.open(
          state.searchList[state.searchCur].url +
            value +
            "&page=1&rows=20&type=video"
        );
      else window.open(state.searchList[state.searchCur].url + value);
    };
    return {
      clickNav,
      ...toRefs(state),
      clickDropDown,
      clickDropDownItem,
      search,
    };
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
      user-select: none;
      justify-content: space-evenly;
      align-items: center;

      .navItem {
        flex: 1;
        cursor: pointer;
        color: #adadad;
        height: 100%;
        text-align: center;
        line-height: 60px;

        &:hover {
          color: @themeColor;
          background: #6464648e;
        }
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
          left: 48%;
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
      user-select: none;
      width: 160px;
      cursor: pointer;
      align-items: center;
      position: relative;

      p:hover {
        color: @themeColor;
      }

      .dropDown {
        position: absolute;
        background: #000000;
        border: 1px solid #fad222;
        top: 40px;
        text-align: center;
        left: -10px;
        width: 100%;

        .dropDownItem {
          cursor: pointer;

          &:hover {
            color: @themeColor;
            background: #6464648e;
          }
        }
      }

      .rotate {
        transform: rotate(180deg);
      }

      img {
        width: 12px;
        height: 12px;
      }
    }
  }

  .mine {
    margin-right: 60px;
    user-select: none;

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
