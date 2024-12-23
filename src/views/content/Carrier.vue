<template>
  <div
    class="w-screen h-screen bg-gradient-to-r from-myBlack to-myDarkBlue px-12 py-24"
  >
    <p
      class="w-full text-4xl font-semi bold text-myCyan text-center"
      data-aos="fade-up"
    >
      KARIR
    </p>
    <p
      class="w-full bg-gradient-to-r from-myCyan to-myWhite inline-block text-transparent bg-clip-text text-5xl font-semibold text-center mt-4"
      data-aos="fade-up">
      Masa Depan Cerah di Dunia Teknologi Menunggu Anda!
    </p>
    <p class="text-2xl font-medium text-myWhite text-center mt-4" data-aos="fade-up">
      Industri teknologi terus berkembang pesat, menciptakan peluang karir baru
      setiap harinya. Apakah Anda seorang pemula yang ingin memulai perjalanan,
      atau profesional yang ingin meningkatkan keterampilan, kami menyediakan
      semua yang Anda butuhkan untuk sukses di bidang ini.
    </p>

    <div class="flex justify-between items-center mt-8">
      <div class="pr-4 flex flex-col" data-aos="fade-right">
        <p class="text-2xl font-semibold text-myCyan text-start">
          Langkah Memulai Karir di Dunia Teknologi
        </p>
        <ul class="text-xl font-normal text-myWhite text-start mt-4 ml-6">
          <li type="disc">Pelajari dasar-dasar coding.</li>
          <li type="disc">
            Pilih spesialisasi sesuai minat (front-end, back-end, data, dll.).
          </li>
          <li type="disc">Ikuti Course atau bootcamp teknologi.</li>
        </ul>

        <p class="text-2xl font-semibold text-myCyan text-start mt-6" data-aos="fade-right">
          Pelajari Teknologi Masa Depan
        </p>
        <ul class="text-xl font-normal text-myWhite text-start mt-4 ml-6">
          <li type="disc">AI dan Machine Learning</li>
          <li type="disc">Blockchain</li>
          <li type="disc">Internet of Things (IoT)</li>
          <li type="disc">Virtual Reality dan Augmented Reality</li>
        </ul>
      </div>
      <div class="border-2 border-myCyan h-96 mt-4" data-aos="fade-up"></div>
      <div class="pr-4 flex flex-col" data-aos="fade-left">
        <p class="text-2xl font-semibold text-myCyan text-start" >
          Karir Dunia Teknologi Paling Dicari di Tahun Ini
        </p>
        <ul class="text-xl font-normal text-myWhite text-start mt-4 ml-6">
          <li type="disc">Data Scientist</li>
          <li type="disc">Software Engineer</li>
          <li type="disc">UI/UX Designer</li>
          <li type="disc">Cloud Architect</li>
          <li type="disc">Cybersecurity Specialist</li>
        </ul>

        <p class="text-2xl font-semibold text-myCyan text-start mt-6" data-aos="fade-left">
          Tips Sukses Interview di Perusahaan Teknologi
        </p>
        <ul class="text-xl font-normal text-myWhite text-start mt-4 ml-6" data-aos="fade-left">
          <li type="disc">Pertanyaan teknis yang sering diajukan.</li>
          <li type="disc">
            Bagaimana menjelaskan proyek Anda dengan percaya diri.
          </li>
          <li type="disc">Menyiapkan portofolio atau GitHub.</li>
        </ul>
      </div>
    </div>
    <p class="text-2xl font-semibold text-myCyan text-center mt-12" data-aos="fade-down">
      Tingkatkan Skillmu Dengan Cara
    </p>
    <div class="flex justify-between mt-6 text-myWhite" data-aos="fade-up">
      <Course />
      <Community />
      <LearnProgramming />
      <OpenSource />
      <Documentation />
    </div>
  </div>
</template>
<script>
import Course from "@/components/Course.vue";
import Community from "@/components/Community.vue";
import LearnProgramming from "@/components/LearnProgramming.vue";
import OpenSource from "@/components/OpenSource.vue";
import Documentation from "@/components/Documentation.vue";

export default {
  components: {
    Course,
    Community,
    LearnProgramming,
    OpenSource,
    Documentation,
  },
};
</script>
