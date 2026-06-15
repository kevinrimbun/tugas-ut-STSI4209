<script setup>
import { ref, onMounted } from 'vue';
import MyNavbar from '../components/MyNavbar.vue';

const greeting = ref("");

onMounted(() => {
  const namaUser = localStorage.getItem("namaUser");
  const hours = new Date().getHours();

  let message =
    hours < 11
      ? "Selamat Pagi"
      : hours < 15
        ? "Selamat Siang"
        : hours < 19
          ? "Selamat Sore"
          : "Selamat Malam";
  greeting.value = `${message}, ${namaUser || "Tamu"}!`;
});
</script>

<template>
  <MyNavbar />

  <h1 class="greeting">{{ greeting }}</h1>
</template>

<style scoped>
.greeting {
  margin: 30px;
  font-size: 24px;
  text-align: center;
}
</style>
