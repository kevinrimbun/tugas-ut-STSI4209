// js/tracking-app.js

var trackingApp = new Vue({
  el: '#trackingApp',
  data: {
    pengirimanList: app.pengirimanList,
    paket: app.paket,
    daftarDO: [],
    form: { nim:"", nama:"", ekspedisi:"REG", paketKode:"", tanggal:"" }
  },
  computed: {
    paketDipilih: function() {
      return this.paket.find(p=>p.kode===this.form.paketKode) || null;
    },
    nextNo: function() {
      const year = new Date().getFullYear();
      const urut = this.daftarDO.length + 1;
      return `DO${year}-${String(urut).padStart(4,'0')}`;
    }
  },
  methods: {
    tambahDO: function() {
      if (!this.form.nim || !this.form.nama || !this.form.paketKode) {
        alert("Lengkapi semua data!");
        return;
      }
      const paket = this.paketDipilih;
      const tanggal = this.form.tanggal || new Date().toISOString().slice(0,10);
      this.daftarDO.push({
        no: this.nextNo,
        nim: this.form.nim,
        nama: this.form.nama,
        ekspedisi: this.form.ekspedisi,
        paket,
        tanggal,
        total: paket.harga
      });
      this.form = { nim:"", nama:"", ekspedisi:"REG", paketKode:"", tanggal:"" };
    }
  }
});
