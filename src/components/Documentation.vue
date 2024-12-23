<template>
    <div class="pr-4 flex flex-col">
      <p class="text-md font-medium text-myWhite text-center">Membaca Dokumentasi</p>
      <div class="flex justify-center items-center mt-4">
        <a href="https://www.freecodecamp.org/" target="_blank">
          <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Free Code Camp</v-tooltip>
            <img
              src="@/assets/icons/fcc-logo.svg"
              alt="Free Code Camp"
              class="w-12 h-4"
            />
          </div>
        </a>
        <a href="https://www.kaggle.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Kaggle</v-tooltip>
            <img
              src="@/assets/icons/kaggle-logo.svg"
              alt="Kaggle"
              class="w-8 h-8"
            />
          </div>
        </a>
        <a href="https://www.theodinproject.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Theodin Project</v-tooltip>
            <img
              src="https://www.theodinproject.com/mstile-310x310.png"
              alt="Theodin Project"
              class="w-8 h-8"
            />
          </div>
        </a>
      </div>
      <div class="flex justify-center items-center mt-4">
        <a href="https://developer.mozilla.org/en-US/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">MDN Web Docs</v-tooltip>
            <img
              src="@/assets/icons/MDN-logo.svg"
              alt="MDN Web Docs"
              class="w-8 h-8"
            />
          </div>
        </a>
        <a href="https://www.w3schools.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">W3School</v-tooltip>
            <img
              src="@/assets/icons/w3schools-logo.svg"
              alt="W3School"
              class="w-6 h-4"
            />
          </div>
        </a>
      </div>
    </div>
  </template>
  