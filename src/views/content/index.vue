<template>
  <div id="home">
    <Home />
  </div>
  <div id="news">
    <News />
  </div>
  <div id="carrier">
    <Carrier />
  </div>
  <div id="about">
    <About />
  </div>
</template>
<script>
import Home from "./Home.vue";
import News from "./News.vue";
import Carrier from "./Carrier.vue";
import About from "./About.vue";

export default {
  components: {
    Home,
    News,
    Carrier,
    About
  },
};
</script>
