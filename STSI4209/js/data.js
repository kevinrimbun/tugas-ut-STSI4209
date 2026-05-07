// js/data.js
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];


const dataTracking = {
  "150604869474": {
    nama: "Rina Wulandari",
    nomorDO: "150604869474",
    ekspedisi: "JNE",
    status: "Paket sedang dikirim ke tujuan",
    progress: 80,
    perjalanan: [
      { tanggal: "2025-10-20", waktu: "09:00", keterangan: "Paket diterima di gudang pusat" },
      { tanggal: "2025-10-21", waktu: "13:25", keterangan: "Paket dikirim ke cabang tujuan" },
      { tanggal: "2025-10-22", waktu: "16:10", keterangan: "Paket dalam perjalanan" },
      { tanggal: "2025-10-23", waktu: "10:05", keterangan: "Paket tiba di kantor cabang" },
      { tanggal: "2025-10-24", waktu: "15:30", keterangan: "Paket dalam proses pengantaran" }
    ]
  },
  "2023001234": {
    nama: "Agus Pranoto",
    nomorDO: "2023001234",
    ekspedisi: "SiCepat",
    status: "Dalam Perjalanan",
    progress: 60,
    perjalanan: [
      { tanggal: "2025-08-25", waktu: "10:00", keterangan: "Paket diterima di gudang pusat" },
      { tanggal: "2025-08-26", waktu: "15:00", keterangan: "Paket dikirim ke cabang tujuan" },
      { tanggal: "2025-08-27", waktu: "11:00", keterangan: "Paket dalam perjalanan ke lokasi Anda" }
    ]
  }
};
