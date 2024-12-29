// src/pages/AnggotaList.jsx
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const AnggotaList = () => {
  // Data dummy anggota dengan status aktif
  const [anggotaList, setAnggotaList] = useState([
    { id: 1, name: "Riska Ayu", nim: "2300016028", program: "Sistem Informasi", semester: 3, isActive: true, photo: "https://via.placeholder.com/150" },
    { id: 2, name: "Napi Agipol", nim: "2300016115", program: "Sistem Informasi", semester: 3, isActive: false, photo: "https://via.placeholder.com/150" },
    { id: 3, name: "Oping", nim: "2300160141", program: "Ilmu Komunikasi", semester: 3, isActive: true, photo: "https://via.placeholder.com/150" },
    { id: 4, name: "Galih Alfarizi", nim: "2200016038", program: "Psikologi", semester: 4, isActive: false, photo: "https://via.placeholder.com/150" },
    { id: 5, name: "Faris Arista", nim: "654321789", program: "Sistem Informasi", semester: 1, isActive: true, photo: "https://via.placeholder.com/150" },
  ]);

  // Fungsi untuk menghapus anggota
  const handleDelete = (id) => {
    const updatedList = anggotaList.filter((anggota) => anggota.id !== id);
    setAnggotaList(updatedList);
  };

  // Fungsi untuk mengubah status anggota
  const handleToggleStatus = (id) => {
    const updatedList = anggotaList.map((anggota) => 
      anggota.id === id ? { ...anggota, isActive: !anggota.isActive } : anggota
    );
    setAnggotaList(updatedList);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Anggota UKM Seni Musik UAD</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {anggotaList.map((anggota) => (
          <li
            key={anggota.id}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              {/* Foto anggota */}
              <img
                src={anggota.photo}
                alt={`${anggota.name}'s photo`}
                className="w-24 h-24 rounded-full mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">{anggota.name}</h2>
            </div>
            <div className="text-sm text-gray-700">
              <p>
                <strong>NIM:</strong> {anggota.nim}
              </p>
              <p>
                <strong>Program Studi:</strong> {anggota.program}
              </p>
              <p>
                <strong>Semester:</strong> {anggota.semester}
              </p>
            </div>
            {/* Status dengan Boxicons */}
            <div className="flex items-center mt-4">
              <i
                className={`bx ${
                  anggota.isActive ? "bx-check-circle text-green-500" : "bx-x-circle text-red-500"
                } text-2xl`}
              ></i>
              <p className="ml-2">
                <strong>Status:</strong>{" "}
                <span className={anggota.isActive ? "text-green-500" : "text-red-500"}>
                  {anggota.isActive ? "Aktif" : "Tidak Aktif"}
                </span>
              </p>
            </div>
            {/* Tombol untuk Hapus dan Ubah Status */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleToggleStatus(anggota.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors"
              >
                {anggota.isActive ? "Nonaktifkan" : "Aktifkan"}
              </button>
              <button
                onClick={() => handleDelete(anggota.id)}
                className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition-colors"
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnggotaList;
