document.addEventListener('DOMContentLoaded', function () {

  const judul1 = document.getElementById('kegiatan');
  if (judul1) {
    judul1.classList.add('show');
  }

  window.addEventListener('scroll', function () {
    const judul = document.getElementById('kegiatan-seru');
    if (judul) {
      const posisi = judul.getBoundingClientRect().top;
      const tinggiLayar = window.innerHeight;

      if (posisi < tinggiLayar) {
        judul.classList.add('show');
      }
    }
  });

  const scrollLink = document.querySelector('.scroll-down a');
  if (scrollLink) {
    scrollLink.addEventListener('click', function () {
      setTimeout(() => {
        document.querySelectorAll('.pop-in').forEach(el => {
          el.classList.add('show');
        });
      }, 500);
    });
  }

  const form = document.getElementById('form-pendaftaran');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nama = document.getElementById('nama').value.trim();
      const ttl = document.getElementById('ttl').value.trim();
      const alamat = document.getElementById('alamat').value.trim();
      const ortu = document.getElementById('ortu').value.trim();
      const nohp = document.getElementById('nohp').value.trim();

      if (!nama || !ttl || !alamat || !ortu || !nohp) {
        alert('Semua kolom wajib diisi!. Mohon lengkapi data terlebih dahulu.');
        return;
      }

      alert('Halo, ' + nama + '! Semoga kamu senang belajar di TK PGRI 1 Karangpawitan😄');
      form.reset();
    });
  }

  const komentar = [];
  const daftarKomentar = document.getElementById('daftar-komentar');
  const filter = document.getElementById('filter-komentar');
  const formKontak = document.querySelector('.contact-form');

  if (formKontak && daftarKomentar && filter) {
    formKontak.addEventListener('submit', function(e) {
      e.preventDefault();
      const nama = document.getElementById('nama').value.trim();
      const pesan = document.getElementById('pesan').value.trim();
      if (nama && pesan) {
        komentar.push({ nama, pesan, waktu: new Date() });
        tampilkanKomentar();
        this.reset();
      }
    });

    filter.addEventListener('change', tampilkanKomentar);

    function tampilkanKomentar() {
      daftarKomentar.innerHTML = '';
      const urutan = filter.value === 'terbaru' 
        ? [...komentar].sort((a,b) => b.waktu - a.waktu)
        : [...komentar].sort((a,b) => a.waktu - b.waktu);

      urutan.forEach(k => {
        const item = document.createElement('li');
        item.classList.add('fade-in');
        item.innerHTML = `<strong>${k.nama}</strong><br>${k.pesan}`;
        daftarKomentar.appendChild(item);
      });
    }
  }
});
