<template>
  <div class="w-screen h-screen">
    <div
      class="w-full lg:h-[215px] bg-gradient-to-br from-myDarkBlue to-myBlack flex justify-between pt-24 lg:pt-32 pb-6 lg:pb-0 px-12 font-medium text-sm lg:text-2xl"
    >
      <p
        class="text-myCyan transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default"
        data-aos="fade-down"
      >
        [ The World ]
      </p>
      <p
        class="bg-gradient-to-r from-myCyan to-myWhite inline-block text-transparent bg-clip-text transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default"
        data-aos="fade-down"
      >
        Of Technology
      </p>
      <p
        class="text-myWhite transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default"
        data-aos="fade-down"
      >
        [ On Your Hand ]
      </p>
    </div>
    <div
      class="parallax bg-home h-[calc(100%-215px)] px-12 flex flex-col lg:flex-row lg:justify-between lg:items-end lg:pb-24"
    >
      <div
        class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-5xl lg:text-9xl font-bold cursor-default"
        data-aos="fade-right"
      >
        <h1 class="text-myWhite">DUNIA</h1>
        <h1 class="text-myCyan">TEKNOLOGI</h1>
        <h1 class="text-myWhite">DI UJUNG</h1>
        <h1 class="text-myCyan">JARI ANDA</h1>
      </div>
      <div
        class="text-md mt-4 lg:text-xl font-medium text-wrap text-justify text-myWhite lg:w-1/3 lg:mr-32"
        data-aos="fade-left"
      >
        <p
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-default"
        >
          Selamat datang di platform yang dirancang khusus untuk pecinta
          teknologi! Jelajahi tren terkini, berita inovasi, dan solusi praktis
          untuk kebutuhan teknologi Anda.
        </p>
        <button
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-myWhite px-4 py-2 rounded-lg mt-4 text-myDarkBlue hover:text-myCyan hover:bg-myDarkBlue"
        >
          Selengkapnya
          <Icon
            icon="material-symbols:arrow-outward"
            width="24"
            height="24"
            class="inline-block ml-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.parallax {
  background-image: url("@/assets/images/bg_home.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
