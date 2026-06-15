<template>
  <nav class="menu">
    <ul style="align-items: center;">
      <li>
        <router-link to="/dashboard">
          <img src="../assets/img/ut.png" alt="" style="max-width: 50px;" />
        </router-link>
      </li>

      <li>
        <router-link to="/stock">Informasi Bahan Ajar</router-link>
      </li>

      <li>
        <router-link to="/tracking">Tracking Pengiriman</router-link>
      </li>

      <li class="dropdown">
        <div>
          <a href="#" style="padding-right: 5px !important;">Laporan</a>
          <i class="fa fa-caret-down" style="color: #fff !important;"></i>
        </div>
        <div class="dropdown-content">
          <a href="#">Monitoring Progress DO Bahan Ajar</a>
          <a href="#">Rekap Bahan Ajar</a>
        </div>
      </li>

      <li>
        <a href="#">Histori Transaksi</a>
      </li>
    </ul>

    <a id="logoutBtn" @click="logout">Logout</a>
  </nav>
</template>

<script setup>
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  Swal.fire({
    title: "Yakin ingin logout?",
    text: "Anda akan keluar dari sistem.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Logout",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("namaUser");

      Swal.fire({
        title: "Logout Berhasil",
        text: "Anda telah keluar dari sistem.",
        icon: "info",
        confirmButtonText: "OK",
      }).then(() => router.push("/login"));
    }
  });
};
</script>

<style scoped>
.menu {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #1b6dc1;
  height: 80px;
}

.menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.menu a {
  padding: 12px 20px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.menu a:hover {
  color: #ccc;
  cursor: pointer;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #1b1b1b;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: #1b1b1b;
}
</style>
