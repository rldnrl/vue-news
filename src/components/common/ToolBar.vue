<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<style lang="scss" scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 1rem;
  > .router-link-exact-active {
    color: #35495e;
  }
  > a {
    display: inline-block;
    color: white;
  }
}
</style>
