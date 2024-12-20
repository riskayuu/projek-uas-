import React from "react";
import Kegiatan from "./Kegiatan";
function Home() {
  // Data dummy untuk simulasi
  const kegiatanMendatang = [
    { id: 1, nama: "Latihan Mingguan", tanggal: "2024-12-20", lokasi: "Studio Musik UAD" },
    { id: 2, nama: "Konser Amal", tanggal: "2024-12-25", lokasi: "Aula UAD" },
  ];

  const anggotaAktif = 120;
  const anggotaBaru = 20;

  const testimoni = [
    {
      id: 1,
      nama: "Andi",
      pesan: "Bergabung di UKM Musik UAD adalah pengalaman luar biasa! Saya belajar banyak tentang musik dan mendapatkan teman baru.",
    },
    {
      id: 2,
      nama: "Rina",
      pesan: "Saya merasa lebih percaya diri setelah ikut latihan band bersama teman-teman di UKM Musik.",
    },
  ];

  const fotoKegiatan = [
    "https://via.placeholder.com/150", // URL gambar dummy
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="p-4">

      {/* Informasi Singkat */}
<section className="mb-8">
  <div className="flex items-center space-x-6">
    {/* Teks Deskripsi */}
    <div className="w-2/3">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di UKM Musik UAD</h1>
      <p className="text-lg text-gray-700">
        Seni Musik Universitas Ahmad Dahlan (UAD) adalah wadah bagi mahasiswa untuk menyalurkan minat dan bakat di bidang musik. 
        Dengan kegiatan yang mencakup latihan rutin, workshop, konser, hingga festival seni, Seni Musik UAD memberikan ruang bagi setiap individu 
        untuk mengeksplorasi berbagai genre musik dan mengasah keterampilan mereka.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Melalui Seni Musik UAD, mahasiswa dapat merasakan pengalaman bermusik yang menyenangkan sekaligus menantang, sambil menjalin relasi yang kuat 
        dalam komunitas yang solid dan suportif. Mari bergabung dan jadikan Seni Musik UAD sebagai panggung untuk menunjukkan karya terbaikmu!
      </p>
    </div>

    {/* Gambar di sebelah kanan */}
    <div className="flex-shrink-0 w-1/3">
      <img 
        src="https://via.placeholder.com/400x300" 
        alt="UKM Musik UAD" 
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>
</section>


      {/* Statistik Anggota */}
<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Statistik Anggota</h2>
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <div className="bg-blue-500 text-white p-4 rounded shadow w-full sm:w-1/2 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold">Anggota Aktif</h3>
      <p className="text-2xl font-semibold">{anggotaAktif}</p>
    </div>
    <div className="bg-green-500 text-white p-4 rounded shadow w-full sm:w-1/2 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold">Anggota Baru</h3>
      <p className="text-2xl font-semibold">{anggotaBaru}</p>
    </div>
  </div>
</section>

<Kegiatan/>


      {/* Foto Kegiatan */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cuplikan Foto Kegiatan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {fotoKegiatan.map((foto, index) => (
            <img key={index} src={foto} alt={`Foto ${index + 1}`} className="rounded shadow" />
          ))}
        </div>
      </section>

      {/* Testimoni Anggota */}
     

      {/* Daftar Kegiatan Mendatang */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Kegiatan Mendatang</h2>
        <ul className="space-y-4">
          {kegiatanMendatang.map((kegiatan) => (
            <li key={kegiatan.id} className="border p-4 rounded shadow">
              <h3 className="text-lg font-bold">{kegiatan.nama}</h3>
              <p>
                <strong>Tanggal:</strong> {kegiatan.tanggal}
              </p>
              <p>
                <strong>Lokasi:</strong> {kegiatan.lokasi}
              </p>
            </li>
          ))}
        </ul>
      </section>

      

      

      
    </div>
  );
}

export default Home;
