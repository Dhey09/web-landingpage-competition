<template>
  <div class="pr-4 flex flex-col">
    <p class="text-md font-medium text-myWhite text-center">Kursus Online</p>
    <div class="flex justify-center items-center mt-4">
      <a href="https://www.udemy.com/" target="_blank">
        <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">Udemy</v-tooltip>
          <img
            src="@/assets/icons/logo-udemy.svg"
            alt="Udemy"
            class="w-8 h-8"
          />
        </div>
      </a>
      <a href="https://www.coursera.org/" target="_blank">
        <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">Coursera</v-tooltip>
          <img
            src="@/assets/icons/coursera.svg"
            alt="coursera"
            class="w-8 h-8"
          />
        </div>
      </a>
      <a href="https://www.edx.org/" target="_blank">
        <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">edX</v-tooltip>
          <img
            src="@/assets/icons/edx-logo-elm.svg"
            alt="edx"
            class="w-8 h-8"
          />
        </div>
      </a>
    </div>
    <div class="flex justify-center items-center mt-4">
      <a href="https://www.pluralsight.com/" target="_blank">
        <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">Pluralsight</v-tooltip>
          <img
            src="@/assets/icons/pluralsight.png"
            alt="pluralsight"
            class="w-12 h-4"
          />
        </div>
      </a>
      <a href="https://www.codecademy.com/" target="_blank">
        <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">codecademy</v-tooltip>
          <img
            src="@/assets/icons/codecademy.png"
            alt="codecademy"
            class="w-12 h-4"
          />
        </div>
      </a>
    </div>
  </div>
</template>
