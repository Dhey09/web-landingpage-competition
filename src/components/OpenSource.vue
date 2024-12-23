<template>
    <div class="pr-4 flex flex-col">
      <p class="text-md font-medium text-myWhite text-center">Teknologi Modern dan Open Source</p>
      <div class="flex justify-center items-center mt-4">
        <a href="https://github.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Github</v-tooltip>
            <img
              src="@/assets/icons/github-logo.png"
              alt="Github"
              class="w-8 h-8"
            />
          </div>
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Docker</v-tooltip>
            <img
              src="@/assets/icons/docker-logo.png"
              alt="Docker"
              class="w-8 h-8"
            />
          </div>
        </a>
        <a href="https://kubernetes.io/" target="_blank">
          <div class="mr-4 bg-myWhite/50 px-2 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <v-tooltip activator="parent" location="top">Kubernetes</v-tooltip>
            <img
              src="@/assets/icons/kubernetes-logo.png"
              alt="Kubernetes"
              class="w-8 h-8"
            />
          </div>
        </a>
      </div>
    </div>
  </template>
  