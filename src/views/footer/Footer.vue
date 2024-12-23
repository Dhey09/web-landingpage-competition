<template>
  <div class="w-screen h-[250px] bg-myDarkBlue text-myWhite p-12 flex flex-col">
    <div class="w-full flex flex-row justify-between">
      <div class="w-full flex flex-col">
        <img
          src="@/assets/images/logo.png"
          alt="Logo"
          class="w-[151px] h-[34px]"
        />
        <p class="mt-4 text-md font-medium">Tetap terhubung dengan Kami</p>
        <div class="flex flex-row mt-2">
          <v-text-field
            density="compact"
            placeholder="Masukkan Email ..."
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            max-width="300"
          ></v-text-field>
          <v-btn class="ml-2 bg-myCyan text-myDarkBlue">Subscribe</v-btn>
        </div>
      </div>
      <div class="w-full flex flex-col align-end">
        <nav class="space-x-6 pr-12">
          <a href="#home" class="text-myWhite hover:text-myCyan">Beranda</a>
          <a href="#news" class="text-myWhite hover:text-myCyan"
            >Berita Teknologi</a
          >
          <a href="#carrier" class="text-myWhite hover:text-myCyan">Karir</a>
          <a href="#about" class="text-myWhite hover:text-myCyan">Tentang</a>
        </nav>
        <div class="flex flex-row mt-4">
          <div class="flex flex-col mr-4 max-w-[250px]">
            <p class="text-myCyan font-semibold">Alamat</p>
            <p>
              Jl. Gatot Subroto No.301, Maleer, Kec. Batununggal, Kota Bandung,
              Jawa Barat 40274
            </p>
          </div>
          <div class="flex flex-col ">
            <p class="text-myCyan font-semibold">Kontak</p>
            <p>dearsn022@gmail.com <br/> +62 888-9001-658</p>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-1 border-myCyan my-2" />
    <p>
      © Copyright 2024 | Created By Dea RSN | Powered By Politeknik Piksi
      Ganesha
    </p>
  </div>
</template>
