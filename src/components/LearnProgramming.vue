<template>
  <div class="pr-4 flex flex-col">
    <p class="text-md font-medium text-myWhite text-center">
      Belajar Pemrograman Spesifik
    </p>
    <div class="flex justify-center items-center mt-4">
      <a href="https://leetcode.com/" target="_blank">
        <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">LeetCode</v-tooltip>
          <img
            src="@/assets/icons/LeetCode-logo.png"
            alt="LeetCode"
            class="w-8 h-8"
          />
        </div>
      </a>
      <a href="https://www.hackerrank.com/" target="_blank">
        <div class="mr-4 bg-myWhite/50 p-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">HackerRank</v-tooltip>
          <img
            src="@/assets/icons/hackerrank-logo.png"
            alt="HackerRank"
            class="w-12 h-4"
          />
        </div>
      </a>
      <a href="https://exercism.org/" target="_blank">
        <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <v-tooltip activator="parent" location="top">Exercism</v-tooltip>
          <img
            src="@/assets/icons/exercism-logo.svg"
            alt="Exercism"
            class="w-8 h-8"
          />
        </div>
      </a>
    </div>
  </div>
</template>
