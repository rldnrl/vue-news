<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Spinner :loading="isLoading"></Spinner>
  </div>
</template>

<script>
import bus from './utils/bus'
export default {
  name: 'App',
  components: {
    ToolBar: () => import('./components/common/ToolBar'),
    Spinner: () => import('./components/common/Spinner')
  },
  data: () => {
    return {
      isLoading: false
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  },
  methods: {
    startSpinner() {
      this.isLoading = true
    },
    endSpinner() {
      this.isLoading = false
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

html,
body,
* {
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #34495e;
}
a:hover {
  text-decoration: underline;
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
