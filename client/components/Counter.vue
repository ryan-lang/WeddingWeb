<template>
      <div class="counter-wrapper">
        <el-menu :default-active="activeIndex" class="pri-nav" mode="horizontal" @select="handleSelect">
          <div class="clearfix">
            <div class="xs-col-8 xs-offset-2">
              <el-menu-item index="3" disabled>The Venue</el-menu-item>
              <el-menu-item index="2">Staying in San Francisco</el-menu-item>
              <el-menu-item index="1">RSVP</el-menu-item>
            </div>
          </div>  
        </el-menu>
      </div>
    </div>  
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
.pri-nav{
  border-bottom:1px solid #08413E;
}
</style>
