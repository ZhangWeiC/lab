<template>
  <div class="evo-container">
    <el-card class="single-card">
      <div slot="header" class="card-header">
        <span>安全评估</span>
      </div>
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="单项评估" name="single"></el-tab-pane>
          <el-tab-pane label="生存性" name="live"></el-tab-pane>
          <el-tab-pane label="抗毁" name="maintain"></el-tab-pane>
          <el-tab-pane label="综合评估" name="comprehensive"></el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
    <el-card class="single-card">
      <router-view></router-view>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'single'
    }
  },
  methods: {
    handleClick(tab) {
      console.log(this.activeName);
      this.$router.push({name: this.activeName})
    },
  }
}
</script>
<style lang="scss" scoped>
.single-card {
  margin: 15px 20px;
}
</style>