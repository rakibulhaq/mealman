<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>Meal Manager v 1.0.0</h1>
      </el-header>
      <el-row :gutter="20">
        <el-col :span="4" class="el-col-left">
          <el-menu default-active="1">
            <el-menu-item index="1">
              <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">Menu</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">Bills</span>
            </el-menu-item>
            <el-menu-item index="4">
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
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
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
  background-color: aliceblue;
}
.el-row {
  width: 100%;
}
.el-col-left {
  text-align: left;
}
.grid-content {
  background-color: aliceblue;
  border-radius: 4px;
  min-height: 360px;
}
</style>
