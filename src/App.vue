<template>
  <div id="app" class="font-poppins bg-myWhite">
    <HeaderMenu />
    <Content />
    <Footer/>
  </div>
</template>
<script>
import HeaderMenu from "@/views/header/HeaderMenu.vue";
import Content from "@/views/content/index.vue";
import Footer from "@/views/footer/Footer.vue";

export default {
  components: {
    HeaderMenu,
    Content,
    Footer
  },
};
</script>
