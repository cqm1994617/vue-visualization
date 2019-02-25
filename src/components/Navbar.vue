<template>
  <div :class="$style.navbar" @click="$emit('myClick', 44)">
    <ul :class="$style.container">
      <li
        v-for="item in listInfo"
        :key="item.to"
        :class="active === item.to ? $style.active : ''"
        @click="handleClick(item)"
      >
        <router-link :to="item.to">{{item.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    myClick: 'Object'
  },
  data() {
    return {
      active: this.$route.path,
      listInfo: [
        {
          to: "/",
          text: "主页"
        },
        {
          to: "/d3",
          text: "d3"
        },
        {
          to: "/echarts",
          text: "echarts"
        },
        {
          to: "/highcharts",
          text: "highcharts"
        },
        {
          to: "/three",
          text: "three.js"
        }
      ]
    };
  },
  methods: {
    handleClick(data) {
      this.active = data.to;
    }
  }
};
</script>

<style lang="scss" module>
.navbar {
  background-color: #fff;
  height: 60px;
}
.container {
  list-style: none;
  display: flex;
  max-width: 1200px;
  margin: auto;
  box-sizing: border-box;
  padding: 0 30px;
  line-height: 60px;
  a {
    display: block;
    height: 100%;
    padding: 0 20px;
    text-decoration: none;
    color: #333;
  }
}
.active > a {
  color: rgb(248, 136, 9) !important;
}
</style>
