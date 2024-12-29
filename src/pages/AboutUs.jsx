import { useState } from 'react';
import Testimoni from "../components/testimoni";

function AboutUs() {

  const [isMusicDivisiOpen, setIsMusicDivisiOpen] = useState(false);
  const [isEOdivisiOpen, setIsEOdivisiOpen] = useState(false);


  const toggleMusicDivisi = () => setIsMusicDivisiOpen(!isMusicDivisiOpen);

  const toggleEOdivisi = () => setIsEOdivisiOpen(!isEOdivisiOpen);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Tentang UKM Seni Musik UAD</h1>

      <p className="text-justify">
        UKM Seni Musik berdiri pada tanggal 1 September 1998 bertempat di area Universitas Ahmad Dahlan Yogyakarta.
        UKM Seni Musik adalah wahana dan sarana pengembangan kemampuan dan kreatifitas anggota dalam kemampuannya menuju
        peningkatan wawasan dan keilmuan dalam bidangnya yang khas.
        <br /><br />
        UKM Seni Musik Universitas Ahmad Dahlan adalah sebuah organisasi
        internal kampus yang bergerak dibidang musik, baik dalam bermusik
        maupun dalam menyelenggarakan sebuah acara yang berhubungan
        dengan musik. Dalam perkembangannya UKM Seni Musik memiliki dua
        spesifikasi, yaitu Musisi dan Event Organizer. Spesifikasi Musisi merupakan
        wadah untuk menyalurkan bakat dan kreativitas anggota dibidang musik,
        sedangkan Spesifikasi Event Organizer menjadi wadah yang siap
        meluncurkan calon-calon professional entertainer melalui serangkaian
        acara seperti Sunday Sound Session ini. Dari spesifikasi musisi telah
        melahirkan banyak musisi di dalam UKM Seni Musik dan dari spesifikasi
        Event Organizer telah menyelenggarakan event-event besar sebagai
        bentuk dari penyaluran bakat yang dimiliki oleh para anggota
        Tujuan: UKM Seni Musik UAD bertujuan untuk mengumpulkan dan mengembangkan kemampuan dan daya kreatifitas mahasiswa
        dalam kegiatan ekstrakurikuler dibidang musik khususnya dan membentuk kader-kader yang berkualitas, mandiri, kreatif,
        inovatif, serta tanggung jawab dalam hal organisasi.
      </p>

      <div className="mt-6">
        <button
          onClick={toggleMusicDivisi}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Divisi Musisi
        </button>
        {isMusicDivisiOpen && (
          <div className="block mt-4 p-4 bg-white border border-slate-200 shadow-sm rounded-lg">
            <p className="text-slate-600 font-light">
              Divisi Musisi menjadi wadah bagi anggota untuk menyalurkan bakat dan kreativitas di bidang musik.
              Anggota yang tergabung dalam divisi ini didorong untuk mengembangkan kemampuan mereka dalam bermusik,
              baik secara individu maupun dalam sebuah band atau kelompok. Kegiatan divisi ini mencakup latihan rutin,
              workshop, kolaborasi lintas genre, dan berbagai penampilan dalam acara kampus maupun di luar kampus.
            </p>
          </div>
        )}
      </div>
      <div className="mt-6">
        <button
          onClick={toggleEOdivisi}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Divisi Event Organizer
        </button>
        {isEOdivisiOpen && (
          <div className="block mt-4 p-4 bg-white border border-slate-200 shadow-sm rounded-lg">
            <p className="text-slate-600 font-light">
              Divisi Event Organizer dirancang untuk melatih dan mengembangkan kemampuan anggota dalam merancang,
              mengelola, dan menyelenggarakan berbagai acara musik. Melalui serangkaian kegiatan seperti konser,
              festival seni, dan pertunjukan kreatif lainnya, anggota Divisi EO mendapatkan pengalaman langsung dalam
              dunia event management.
            </p>
          </div>
        )}
      </div>

      <div className="mt-9">
        <Testimoni />
      </div>
    </div>
  );
}

export default AboutUs;