<template>
  <div id="app">
    <navbar @myClick="myClick"></navbar>
    {{a}}
    <div :class="$style.container">
      <div :class="$style['route-view']">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      a: 111
    }
  },
  mounted() {},
  components: {
    Navbar
  },
  methods: {
    myClick(a) {
      this.a = a;
      console.log('asdilufghioausdghfoi', a)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  height: 100%;
  background-color: rgb(229, 229, 229);
}
</style>


<style lang="scss" module>
.container {
  margin: 15px auto;
  box-sizing: border-box;
  padding: 0 15px;
}
.route-view {
  background-color: #fff;
  margin: auto;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
