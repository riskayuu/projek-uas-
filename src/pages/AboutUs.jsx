import Testimoni from "../components/testimoni";
function AboutUs() {
    return (
      <div className="p-4">
        

        <h1 className="text-3xl font-bold mb-4 text-center">
          Tentang UKM Seni Musik UAD
        </h1>
        <p className="text-justify">
        UKM Seni Musik berdiri pada tanggal 1 September 1998 bertempat di area Universitas Ahmad Dahlan Yogyakarta.  UKM Seni Musik adalah wahana dan sarana pengembangan kemampuan dan kreatifitas anggota dalam kemampuannya menuju peningkatan wawasan dan keilmuan dalam bidangnya yang khas. Tujuan: UKM Seni Musik UAD bertujuan  untuk mengumpulkan dan mengembangkan kemampuan dan daya kreatifitas mahasiswa dalam kegiatan ekstrakurikuler dibidang music khususnya dan membentuk kader-kader yang berkualitas, mandiri, kreatif, inovatif, serta tanggung jawab dalam hal organisasi. Dalam perjalanannya  UKM Seni Musik mempunyai dua divisi yaitu : Divisi Musisi
Divisi ini menjadi wadah bagi anggota untuk menyalurkan bakat dan kreativitas di bidang musik. Anggota yang tergabung dalam divisi ini didorong untuk mengembangkan kemampuan mereka dalam bermusik, baik secara individu maupun dalam sebuah band atau kelompok. Kegiatan divisi ini mencakup latihan rutin, workshop, kolaborasi lintas genre, dan berbagai penampilan dalam acara kampus maupun di luar kampus. Divisi Musisi juga menjadi tempat bagi mahasiswa untuk menciptakan karya-karya musik orisinal, sekaligus meningkatkan kepercayaan diri dalam performa panggung.

Divisi Event Organizer (EO)
Divisi ini dirancang untuk melatih dan mengembangkan kemampuan anggota dalam merancang, mengelola, dan menyelenggarakan berbagai acara musik. Melalui serangkaian kegiatan seperti konser, festival seni, dan pertunjukan kreatif lainnya, anggota Divisi EO mendapatkan pengalaman langsung dalam dunia event management. Divisi ini juga bertujuan untuk mencetak calon-calon entertainer profesional yang mampu mengelola acara dengan standar tinggi, sekaligus memahami kebutuhan teknis dan artistik dari sebuah acara musik.
        </p>
        
        <div className="mt-9">
        <Testimoni/>
        </div>
      </div>
    );
  }
  
  export default AboutUs;
  