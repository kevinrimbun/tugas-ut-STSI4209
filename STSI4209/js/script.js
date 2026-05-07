window.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("loginOverlay");
  const loginForm = document.getElementById("loginForm");
  const errorMsg = document.getElementById("errorMsg");

  // Fungsi buka & tutup login
  function openLogin() {
    if (overlay) overlay.style.display = "block";
  }

  function closeLogin() {
    if (overlay) overlay.style.display = "none";
  }

  // Tampilkan popup login otomatis
  openLogin();

  // Logika login
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const usernameInput = document.getElementById("username").value.trim();
      const passwordInput = document.getElementById("password").value.trim();

      // Cek apakah dataPengguna sudah terload dari data.js
      if (typeof dataPengguna === "undefined") {
        alert("Data pengguna belum dimuat! Pastikan file data.js sudah terhubung.");
        return;
      }

      // Cari pengguna yang sesuai
      const user = dataPengguna.find(
        (u) =>
          (u.email.toLowerCase() === usernameInput.toLowerCase() ||
            u.nama.toLowerCase() === usernameInput.toLowerCase()) &&
          u.password === passwordInput
      );

      if (user) {
        alert(`✅ Login berhasil!\nSelamat datang, ${user.nama} (${user.role})`);
        // Simpan data user sementara ke localStorage (opsional)
        localStorage.setItem("userLogin", JSON.stringify(user));
        // Arahkan ke dashboard
        window.location.href = "dashboard.html";
      } else {
        errorMsg.textContent = "❌ Username atau password salah!";
        alert("❌ Username atau password salah!");
      }
    });
  }

  // Agar bisa dipanggil dari tombol close di HTML
  window.closeLogin = closeLogin;
});

// Tracking HTML
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementsByClassName("Tracking-form")[0];
  const result = document.getElementsByClassName("tracking-result")[0];

  if (!form || !result) {
    console.error("Elemen form atau result tidak ditemukan!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input = form.querySelector("input");
    const noResi = input.value.trim();

    if (noResi === "") {
      result.innerHTML = "<p>⚠️ Silakan masukkan nomor resi terlebih dahulu.</p>";
      return;
    }

    const data = dataTracking[noResi];

    if (!data) {
      result.innerHTML = `
        <h3>❌ Nomor Resi Tidak Ditemukan</h3>
        <p>Data pengiriman untuk <strong>${noResi}</strong> tidak tersedia.</p>
      `;
      return;
    }

    const perjalananRows = data.perjalanan.map(
      (item) => `
        <tr>
          <td>${item.tanggal}</td>
          <td>${item.waktu}</td>
          <td>${item.keterangan}</td>
        </tr>`
    ).join("");

    result.innerHTML = `
      <div class="info-mahasiswa">
        <h3>📦 Nama: <span>${data.nama}</span></h3>
        <p>No. DO: <strong>${data.nomorDO}</strong> | Ekspedisi: <strong>${data.ekspedisi}</strong></p>
      </div>

      <div class="status-card">
        <h4>Status Pengiriman:</h4>
        <div style="background:#ddd;border-radius:8px;overflow:hidden;height:15px;">
          <div style="width:${data.progress}%;background:green;height:100%;"></div>
        </div>
        <p>${data.status}</p>
      </div>

      <div class="detail-pengiriman">
        <h4>Riwayat Pengiriman</h4>
        <table>
          <thead>
            <tr><th>Tanggal</th><th>Waktu</th><th>Keterangan</th></tr>
          </thead>
          <tbody>${perjalananRows}</tbody>
        </table>
      </div>
    `;
  });
});