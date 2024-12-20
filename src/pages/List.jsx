// src/pages/AnggotaList.jsx
import React from "react";

const AnggotaList = () => {
  // Data dummy anggota dengan status aktif
  const anggota = [
    { id: 1, name: "Andi", nim: "123456789", program: "Seni Musik", semester: 3, isActive: true },
    { id: 2, name: "Budi", nim: "987654321", program: "Seni Musik", semester: 5, isActive: false },
    { id: 3, name: "Citra", nim: "456789123", program: "Seni Musik", semester: 2, isActive: true },
    { id: 4, name: "Dewi", nim: "321654987", program: "Seni Musik", semester: 4, isActive: false },
    { id: 5, name: "Eko", nim: "654321789", program: "Seni Musik", semester: 1, isActive: true },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Anggota UKM Seni Musik UAD</h1>
      <ul className="space-y-4">
        {anggota.map((anggota) => (
          <li key={anggota.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{anggota.name}</h2>
            <p><strong>NIM:</strong> {anggota.nim}</p>
            <p><strong>Program Studi:</strong> {anggota.program}</p>
            <p><strong>Semester:</strong> {anggota.semester}</p>
            <div className="flex items-center">
              <div
                className={`w-16 h-4 rounded-l ${anggota.isActive ? 'bg-green-500' : 'bg-red-500'}`}
              ></div>
              <div
                className={`w-16 h-4 rounded-r ${anggota.isActive ? 'bg-green-200' : 'bg-red-200'}`}
              ></div>
              <p className="ml-2">
                <strong>Status:</strong> {anggota.isActive ? 'Aktif' : 'Tidak Aktif'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnggotaList;