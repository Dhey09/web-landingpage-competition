<template>
  <div
    class="w-screen h-screen bg-gradient-to-br from-myWhite to-gray-500 px-12 py-24"
  >
    <p class="text-3xl font-bold text-myDarkBlue text-center" data-aos="fade-up">
      BERITA TEKNOLOGI
    </p>
    <p class="text-lg text-myDarkBlue text-center mt-4" data-aos="fade-up">
      Tetap terinformasi dengan berita terbaru dari dunia teknologi. Kami
      menyediakan liputan mendalam tentang perkembangan AI, gadget terbaru,
      inovasi startup, dan tren teknologi global. Temukan wawasan yang relevan
      untuk kehidupan sehari-hari maupun karir Anda
    </p>

    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div class="lg:col-span-2 " data-aos="fade-left">
        <v-card class="mx-auto">
          <v-img
            class="align-end text-white"
            height="250px"
            :src="images.ai"
            cover
          >
            <v-card-title class="w-full bg-myBlack/50">
              Penggunaan AI Dalam Kegiatan Pendidikan
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">
            Selain membantu siswa, guru dan staf sekolah juga dapat memanfaatkan
            AI. Guru dapat menggunakan AI untuk menganalisis cara mengajar
            mereka dan terus meningkatkan efektivitas pengajaran. Staf
            administrasi juga bisa mengotomatisasi tugas-tugas rutin, sehingga
            pekerjaan mereka menjadi lebih efisien dan cepat, mengurangi
            penggunaan listrik.
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="myDarkBlue">
              <a
                href="https://ftmm.unair.ac.id/peran-artificial-intelligence-dalam-memajukan-pendidikan-di-indonesia-dengan-efektif-dan-efisien-serta-ramah-lingkungan/"
                >Selengkapnya</a
              >
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div data-aos="fade-right">
        <v-card class="mx-auto">
          <v-img
            class="align-end text-white"
            height="250px"
            :src="images.gadget"
            cover
          >
            <v-card-title class="w-full bg-myBlack/50">
              Poco M7 Pro 5G Resmi Rilis
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">
            Poco M7 Pro 5G diluncurkan dengan chipset Dimensity 725 Ultra, layar
            OLED 6,67 inci Full HD+ dengan refresh rate 120Hz, dan kamera utama
            50 MP dengan sensor Sony IMX650. Dibekali RAM 6/8 GB, penyimpanan
            hingga 256 GB, dan baterai 5.110 mAh dengan pengisian cepat 45 watt,
            ponsel ini menawarkan pengalaman premium di harga mulai Rp3,8 juta.
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="myDarkBlue">
              <a href="https://www.kabarinspirasi.com/lifestyle/18914188772/waktu-indonesia-gadget-berita-terbaru-dunia-teknologi">Selengkapnya</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div class="" data-aos="fade-left">
        <v-card class="mx-auto">
          <v-img
            class="align-end text-white"
            height="250px"
            :src="images.startup"
            cover
          >
            <v-card-title class="w-full bg-myBlack/50">
              12 Ide Bisnis Startup Paling Menarik, Ini Tips Memulainya!
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">
            Ketika membicarakan tentang ide bisnis startup sebenarnya ini
            bukanlah hal yang sulit untuk ditemukan. Sebab, cara mendapatkan ide
            bisnis startup adalah melalui kegiatan mengamati permasalahan di
            lingkungan sekitar. Dari hasil pengamatan tersebut, mungkin Anda
            bisa menemukan inovasi apa yang bisa dibuat menjadi sebuah bisnis
            startup. Adapun sejumlah contoh ide bisnis startup yang bisa Anda
            pertimbangkan sesuai dengan kebutuhan di sekitar, di antaranya
            adalah sebagai berikut.
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="myDarkBlue">
              <a href="https://info.populix.co/articles/ide-bisnis-startup/">Selengkapnya</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>

      <div class="lg:col-span-2" data-aos="fade-right">
        <v-card class="mx-auto">
          <v-img
            class="align-end text-white"
            height="250px"
            :src="images.tech"
            cover
          >
            <v-card-title class="w-full bg-myBlack/50">
              7 Jenis Teknologi: Tren dan Inovasi yang Akan Mengubah Dunia
            </v-card-title>
          </v-img>
          <v-card-subtitle class="pt-4">
            Teknologi telah menjadi bagian tak terpisahkan dari kehidupan kita,
            dan dengan perkembangan yang pesat, masa depan teknologi menjanjikan
            banyak perubahan yang akan mengubah cara kita hidup, bekerja, dan
            berinteraksi. Dari kecerdasan buatan hingga realitas virtual,
            inovasi-inovasi ini akan membawa kita ke era baru yang penuh dengan
            peluang dan tantangan. Berikut berbagai jenis teknologi tepat guna
            yang di masa depan akan mengubah dunia:
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="myDarkBlue">
              <a href="https://globalmulia.ac.id/tren-teknologi-terbaru-yang-harus-diketahui-oleh-karyawan/">Selengkapnya</a>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import AiImage from "@/assets/images/ai.jpg";
import Gadget from "@/assets/images/gadget.jpg";
import Startup from "@/assets/images/startup.webp";
import Tech from "@/assets/images/tech.jpeg";

export default {
  data: () => ({
    images: {
      ai: AiImage,
      gadget: Gadget,
      startup: Startup,
      tech: Tech,
    },
  }),
};
</script>

<style scoped>
.news-1 {
  background-image: url("@/assets/images/ai.webp");
  background-size: cover;
  background-position: center;
}
</style>
