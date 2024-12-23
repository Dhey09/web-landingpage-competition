<template>
    <div class="pr-4 flex flex-col">
      <p class="text-md font-medium text-myWhite text-center">Diskusi di Komunitas dan Forum</p>
      <div class="flex justify-center items-center mt-4">
        <a href="https://stackoverflow.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Stack Overflow</v-tooltip>
            <img
              src="@/assets/icons/logo-stackoverflow.svg"
              alt="Stack Overflow"
              class="w-8 h-8"
            />
          </div>
        </a>
        <a href="https://www.reddit.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Reddit</v-tooltip>
            <img
              src="@/assets/icons/reddit-logo.png"
              alt="Reddit"
              class="w-12 h-4"
            />
          </div>
        </a>
        <a href="https://dev.to/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Dev.to</v-tooltip>
            <img
              src="@/assets/icons/devto-logo.png"
              alt="Dev.to"
              class="w-8 h-8"
            />
          </div>
        </a>
      </div>
    </div>
  </template>
  