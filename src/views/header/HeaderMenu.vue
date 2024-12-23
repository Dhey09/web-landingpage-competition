<template>
  <div class="relative">
    <header class="fixed w-full backdrop-filter backdrop-blur-lg bg-myDarkBlue bg-opacity-50 fixed z-10 trasition ease-in-out duration-500">
      <div class=" mx-12 flex justify-between items-center py-4 ">
        <!-- Logo -->
        <img src="@/assets/images/logo.png" alt="Logo" />
  
        <!-- Navigation Menu -->
        <nav class="hidden md:flex space-x-6 ">
          <a href="#home" class="text-myWhite hover:text-myCyan transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Beranda</a>
          <a href="#news" class="text-myWhite hover:text-myCyan transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Berita Teknologi</a>
          <a href="#carrier" class="text-myWhite hover:text-myCyan transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Karir</a>
          <a href="#about" class="text-myWhite hover:text-myCyan transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Tentang</a>
        </nav>
  
        <!-- Mobile Menu Button -->
        <button
        @click="toggleMenu"
        class="md:hidden text-myWhite focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
  
        <!-- Mobile Menu -->
        <div
        v-if="isMenuOpen"
        class="absolute top-16 left-0 w-full bg-myDarkBlue shadow-lg flex flex-col space-y-4 py-4 px-6 md:hidden"
        >
        <a href="#home" class="text-myWhite hover:text-myCyan">Beranda</a>
        <a href="#news" class="text-myWhite hover:text-myCyan">Berita Teknologi</a>
        <a href="#carrier" class="text-myWhite hover:text-myCyan">Karir</a>
        <a href="#about" class="text-myWhite hover:text-myCyan">Tentang</a>
      </div>
    </div>
  </header>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styling tambahan jika diperlukan */
  </style>
  