import { useState } from 'react';
import Testimoni from "../components/testimoni";

function AboutUs() {
  const [isMusicDivisiOpen, setIsMusicDivisiOpen] = useState(false);
  const [isEOdivisiOpen, setIsEOdivisiOpen] = useState(false);
  const [isEventTerakhirOpen, setIsEventTerakhirOpen] = useState(false);

  const toggleMusicDivisi = () => setIsMusicDivisiOpen(!isMusicDivisiOpen);
  const toggleEOdivisi = () => setIsEOdivisiOpen(!isEOdivisiOpen);
  const toggleEventTerakhir = () => setIsEventTerakhirOpen(!isEventTerakhirOpen);

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
        bentuk dari penyaluran bakat yang dimiliki oleh para anggota
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

      <div className="mt-6">
        <button
          onClick={toggleEventTerakhir}
          className="mt-6 rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Event Terakhir
        </button>
        {isEventTerakhirOpen && (
          <div className="block mt-4 p-4 bg-white border border-slate-200 shadow-sm rounded-lg">
            <h3 className="text-slate-800 font-semibold mb-2">Event Terakhir:</h3>
            <ul className="text-slate-600 font-light list-disc ml-6 space-y-2">
              <li><strong>Launching Album Kompilasi #2:</strong> 5 Januari 2011, Auditorium Kampus I UAD.</li>
              <li><strong>Milad 50th UAD Festival Band Pelajar se-DIY:</strong> 22 Januari 2011, Kampus I UAD, menampilkan RSG, Lopies, Karnaluna, Savior.</li>
              <li><strong>Talkshow Djogja Indie Banget 2011:</strong> 10 Juni 2011, Goeboex Coffee Seturan, menampilkan Momo Captain Jack, Mahardika Adi (MD Prambors Radio), Pak Tri (Cekidot).</li>
              <li><strong>Djogja Unplugged 2011:</strong> 1 Desember 2011, Kampus III UAD, menampilkan SKJ, The Aline, Burger Time, FOXY, Jamzcoustic.</li>
              <li><strong>Djogja Banget 2012:</strong> 22-23 Mei 2012, Kampus III UAD, menampilkan Endank Soekamti, Attack The Headline, Banana For Silvy.</li>
              <li><strong>Djogja Banget 2013:</strong> 17 November 2013, menampilkan Braves Boy, Apollo 10, Sangkakala, MFA, StickMan.</li>
              <li><strong>Djogja Banget 2014:</strong> 6 Desember 2016, menampilkan Tiktok, Sisir Tanah, Half Eleven PM, Sea Horse, GIE, Pasar Ngasem.</li>
              <li><strong>Djogja Banget 2015:</strong> 10-12 Juni 2015, menampilkan Cakka Nuraga, Demaba, Plan Up, Stickman, Ekonomi Akustik, Halaman Belakang Gedung Kebudayaan Yogyakarta.</li>
              <li><strong>Djogja Unplugged 2016:</strong> 9 Desember 2016, menampilkan Fourtwnty, Rubah di Selatan, StickMan, Taman Budaya Yogyakarta.</li>
              <li><strong>Djogja Unplugged 2017:</strong> Desember 2017, menampilkan Tiga Pagi, Sahsaka, Half Eleven PM, Sumber Roso Nuansa Ndeso.</li>
              <li><strong>Dua Dekade 2018 (Konser Pesta Rindu):</strong> 18 November 2018, menampilkan Rubah di Selatan, Kharisma Keroncong, Jendela Band, New Ethnic, FKUKMMY, Jogja Blues Forum.</li>
              <li><strong>Djodja Patah Hati 2019:</strong> 15 Desember 2019, menampilkan Nabiella Piguna, Symphony Kerontjong Moeda.</li>
              <li><strong>Stand Up Music 2021:</strong> 28 November 2021, menampilkan Lintang Ariani, Komunitas Stand Up Indojogja, Dynamic Dino, FKUKMMY, Mabes Musik Project (MMP).</li>
              <li><strong>Senandung Kemanusiaan 2022:</strong> 27 November 2022, menampilkan Kakilina, Intuisi, Jaringan Anak Bahasa, Murti Tri Utami, FKUKMMY, Mabes Musik Project (MMP).</li>
              <li><strong>Djogja Banget 2022:</strong> 6 Mei 2023, Kampus 4 UAD, menampilkan FSTVLST, Nona Sepatu Kaca, LOSSKITA.</li>
            </ul>
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
