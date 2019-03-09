<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>Meal Manager v 1.0.0</h1>
      </el-header>
      <el-row :gutter="20">
        <el-col :span="4" class="el-col-left">
          <el-menu default-active="1">
            <el-menu-item index="1" @click="loadView('home')">
              <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-menu-item index="2" @click="loadView('menu')">
              <span slot="title">Menu</span>
            </el-menu-item>
            <el-menu-item index="3" @click="loadView('bills')">
              <span slot="title">Bills</span>
            </el-menu-item>
            <el-menu-item index="4" @click="loadView('admin')">
              <span slot="title">Admin</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="20" class="grid-content">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  methods: {
    loadView(view){
      this.$router.push({name: view})
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
  height: 60px;
  padding-top: 20px !important;
  background-color: aliceblue;
}
.el-row {
  width: 100%;
}
.el-col-left {
  text-align: left;
}
.el-menu {
  border-right-style: none !important;
}
.grid-content {
  background-color: aliceblue;
  border-radius: 4px;
  min-height: 360px;
  padding: 10px;
}
</style>
