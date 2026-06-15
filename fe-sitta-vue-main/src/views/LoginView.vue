<template>
  <div class="login-container">
    <h2>Login to SITTA-UT</h2>

    <div class="form-container">
      <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" required placeholder="Email" />
        <input type="password" v-model="password" required placeholder="Password" />

        <a href="#" @click.prevent="showForgotPassword">Lupa Password?</a>

        <button type="submit">Login</button>
      </form>
    </div>

    <div class="links">
      <a href="#" @click.prevent="showRegister">Belum punya akun?</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import usersData from "../json/users.json";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

// reactive form state
const email = ref("");
const password = ref("");

// login
const handleLogin = () => {
  const user = usersData.users.find(
    u => u.email === email.value && u.password === password.value
  );

  if (user) {
    localStorage.setItem("namaUser", user.nama);

    Swal.fire({
      title: "Login Berhasil!",
      text: `Selamat datang, ${user.nama}!`,
      icon: "success",
      confirmButtonText: "Lanjutkan",
    }).then(() => {
      router.push("/dashboard"); // Vue Router navigation
      console.log("router is ", router);

    });

  } else {
    Swal.fire({
      title: "Login Gagal!",
      text: "Email atau password salah. Silakan coba lagi.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

// popups
const showForgotPassword = () => {
  Swal.fire({
    title: "Lupa Password?",
    text: "Silakan hubungi admin UT untuk reset password.",
    icon: "info"
  });
};

const showRegister = () => {
  Swal.fire({
    title: "Buat Akun Baru",
    text: "Kunjungi laman MyUT untuk membuat akun baru.",
    icon: "question"
  });
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 10% auto;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  text-align: center;
}

.login-container h2 {
  margin-bottom: 25px;
}

form button {
  background-color: #e8b802;
  color: #29303B;
  font-weight: 700;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 100%;
}

form a {
  text-align: left;
  color: #1b6dc1;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  margin-bottom: 10%;
}

.links {
  font-size: 10px;
  margin-top: 15px;
}

.links a {
  color: #1b6dc1;
  text-decoration: none;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #1b1b1b;
}

button:hover {
  background-color: #896c02;
}
</style>
