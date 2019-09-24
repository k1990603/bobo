<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="colla" />
  </a-layout-header>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      detail: false
    }
  },
  methods: {
    colla() {
      this.$emit("colla");
    }
  }
};
</script>