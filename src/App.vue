<template>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Markdown from './doc.md';
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

$table-border-color: #999;

table {
  border: 1px solid $table-border-color; /*设置边框粗细，实线，颜色*/
  border-collapse: collapse; /*边框重叠，否则你会看到双实线*/
}

th {
  border: 1px solid $table-border-color;
  background-color: #ececec;
  color: black;
  font-weight: bold; /*因为是标题栏，加粗显示*/
}

td {
  border: 1px solid $table-border-color;
  color: #333;
}
</style>
