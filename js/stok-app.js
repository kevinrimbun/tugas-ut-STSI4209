// js/stok-app.js

var stokApp = new Vue({
  el: '#stokApp',
  data: {
    upbjjList: app.upbjjList,
    kategoriList: app.kategoriList,
    stok: JSON.parse(JSON.stringify(app.stok)), // salin agar aman
    filter: { upbjj: "", kategori: "" },
    sortBy: "",
    showForm: false,
    form: { kode:"",judul:"",kategori:"",upbjj:"",lokasiRak:"",harga:0,qty:0,safety:0,catatanHTML:"" }
  },
  computed: {
    stokFiltered: function() {
      let hasil = this.stok.filter(item =>
        (!this.filter.upbjj || item.upbjj === this.filter.upbjj) &&
        (!this.filter.kategori || item.kategori === this.filter.kategori)
      );

      if (this.sortBy === "judul") hasil.sort((a,b)=>a.judul.localeCompare(b.judul));
      if (this.sortBy === "qty_desc") hasil.sort((a,b)=>b.qty - a.qty);
      return hasil;
    }
  },
  methods: {
    toggleForm: function() { this.showForm = !this.showForm; },
    statusText: function(i) {
      if (i.qty === 0) return "Kosong";
      if (i.qty < i.safety) return "Menipis";
      return "Aman";
    },
    statusClass: function(i) {
      if (i.qty === 0) return "danger-text";
      if (i.qty < i.safety) return "warning";
      return "safe";
    },
    tambahData: function() {
      if (!this.form.kode || !this.form.judul) return alert("Kode dan Judul wajib diisi!");
      if (this.stok.find(s=>s.kode===this.form.kode)) return alert("Kode sudah ada!");

      this.stok.push({...this.form});
      this.showForm = false;
      this.form = { kode:"",judul:"",kategori:"",upbjj:"",lokasiRak:"",harga:0,qty:0,safety:0,catatanHTML:"" };
    },
    hapus: function(i) {
      if (confirm("Hapus data ini?")) this.stok.splice(i, 1);
    }
  }
});
