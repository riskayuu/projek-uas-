import React from "react";
import { useParams } from "react-router-dom";

function DetailKegiatan() {
  const { id } = useParams();

  // Data dummy untuk simulasi kegiatan
  const kegiatanDetails = {
    1: {
      name: "Latihan Band Mingguan",
      date: "2024-12-20",
      location: "Studio Musik UAD",
      description: "Kegiatan rutin untuk latihan band UKM Musik.",
    },
    2: {
      name: "Konser Amal",
      date: "2024-12-25",
      location: "Aula UAD",
      description: "Konser amal untuk menggalang dana bagi yang membutuhkan.",
    },
  };

  const kegiatan = kegiatanDetails[id];

  if (!kegiatan) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Kegiatan Tidak Ditemukan</h1>
        <p>ID kegiatan: {id} tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{kegiatan.name}</h1>
      <p>
        <strong>Tanggal:</strong> {kegiatan.date}
      </p>
      <p>
        <strong>Lokasi:</strong> {kegiatan.location}
      </p>
      <p>
        <strong>Deskripsi:</strong> {kegiatan.description}
      </p>
    </div>
  );
}

export default DetailKegiatan;
