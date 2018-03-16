<template>
  <div class="counter-wrapper">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="3" disabled>The Venue</el-menu-item>
  <el-menu-item index="2">Staying in San Francisco</el-menu-item>
  <el-menu-item index="1">RSVP</el-menu-item>
</el-menu>
  </div>
</template>

<script>


export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss">
.el-menu-item{
  float:right;
}
</style>
