import React, { useState } from "react";

const Testimoni = () => {
  const [testimoni, setTestimoni] = useState([
    {
      id: 1,
      nama: "Ali",
      pesan: "Sangat bermanfaat! Saya merasa lebih percaya diri setelah bergabung.",
      rating: 4,
      likes: 10,
      comments: [],
      jabatan: "Anggota Aktif",
      foto: "https://via.placeholder.com/100", // Gambar profil
    },
    {
      id: 2,
      nama: "Budi",
      pesan: "Pengalaman yang luar biasa! Banyak belajar tentang seni musik.",
      rating: 5,
      likes: 15,
      comments: [],
      jabatan: "Ketua Divisi",
      foto: "https://via.placeholder.com/100", // Gambar profil
    },
  ]);

  // Fungsi untuk menambah like
  const handleLike = (id) => {
    setTestimoni((prevTestimoni) =>
      prevTestimoni.map((testi) =>
        testi.id === id ? { ...testi, likes: testi.likes + 1 } : testi
      )
    );
  };

  const handleDislike = (id) => {
    setTestimoni((prevTestimoni) =>
      prevTestimoni.map((testi) =>
        testi.id === id ? { ...testi, likes: testi.likes - 1 } : testi
      )
    );
  };

  // Fungsi untuk menambah komentar
  const handleAddComment = (id) => {
    const newComment = prompt("Masukkan komentar baru:");
    if (newComment) {
      setTestimoni((prevTestimoni) =>
        prevTestimoni.map((testi) =>
          testi.id === id
            ? {
                ...testi,
                comments: [...testi.comments, newComment], // Menambah komentar baru
              }
            : testi
        )
      );
    }
  };

  return (
    <div className="container mx-auto px-4">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Testimoni Anggota</h2>
        <div className="space-y-6">
          {testimoni.map((testi) => (
            <div key={testi.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img src={testi.foto} alt="profile" className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-xl">{testi.nama}</p>
                    <p className="text-sm text-gray-600">{testi.jabatan}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`bx ${
                        index < testi.rating ? "bxs-star text-yellow-400" : "bx-star text-gray-400"
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
              <p className="text-lg italic mb-4">"{testi.pesan}"</p>

              {/* Tombol Like dan Tambah Komentar */}
              <div className="flex justify-between items-center mt-4">
                <button
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition duration-200"
                  onClick={() => handleLike(testi.id)}
                >
                  <i className="bx bxs-like text-xl"></i>
                  <span className="text-lg">{testi.likes} Suka</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition duration-200"
                  onClick={() => handleDislike(testi.id)}
                >
                  <i className="bx bxs-like text-xl"></i>
                  <span className="text-lg">{testi.likes} Gak</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-green-500 hover:text-green-700 transition duration-200"
                  onClick={() => handleAddComment(testi.id)}
                >
                  <i className="bx bx-comment-add text-xl"></i>
                  <span className="text-lg">Tambah Komentar</span>
                </button>
              </div>

              {/* Menampilkan komentar yang sudah ada */}
              {testi.comments.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-lg">Komentar:</h4>
                  <ul className="list-disc pl-5">
                    {testi.comments.map((comment, index) => (
                      <li key={index} className="text-sm text-gray-700">{comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimoni;
