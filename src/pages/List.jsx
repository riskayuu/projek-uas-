import React, { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const AnggotaList = () => {
  const [anggotaList, setAnggotaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from json-server
    fetch("http://localhost:3001/anggotaList")
      .then((response) => response.json())
      .then((data) => {
        setAnggotaList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedList = anggotaList.filter((anggota) => anggota.id !== id);
    setAnggotaList(updatedList);
  };

  const handleToggleStatus = (id) => {
    const updatedList = anggotaList.map((anggota) =>
      anggota.id === id ? { ...anggota, isActive: !anggota.isActive } : anggota
    );
    setAnggotaList(updatedList);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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
