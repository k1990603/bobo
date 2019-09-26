<template>
  <div id="wrap">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <pageMenu></pageMenu>
      </a-layout-sider>
      <a-layout>
        <pageTop :collapsed="collapsed" @colla="colla"></pageTop>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '40px', background: '#fff', minHeight: '280px' }"
        >
          <a-locale-provider :locale="zh_CN">
            <transition name="slide-fade">
              <router-view />
            </transition>
          </a-locale-provider>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import pageTop from "../commonComponents/page-top.vue";
import pageMenu from "../commonComponents/page-menu.vue";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

export default {
  name: "wrap",
  data() {
    return {
      collapsed: false,
      zh_CN
    };
  },
  components: {
    pageTop,
    pageMenu
  },
  methods: {
    colla() {
      this.collapsed = !this.collapsed;
    }
  }
};
</script>

<style lang='scss'>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.slide-fade-enter {
  transform: translateX(22px);
  opacity: 0;
  transition: all 0.2s linear;
}

.slide-fade-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.2s linear;
}

.slide-fade-enter {
  transform: translateX(0);
  opacity: 1;
  transition: all 0.2s linear;
}

.slide-fade-leave-active {
  transform: translateX(22px);
  opacity: 0;
  transition: all 0.2s linear;
}
</style>
