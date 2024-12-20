import { Link } from "react-router-dom";

function Kegiatan() {
  const kegiatanList = [
    { id: 1, name: "Latihan Band Mingguan", date: "2024-12-20", location: "Studio Musik UAD" },
    { id: 2, name: "Konser Amal", date: "2024-12-25", location: "Aula UAD" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Kegiatan</h1>
      <ul className="grid grid-cols-1 gap-4">
        {kegiatanList.map((kegiatan) => (
          <li key={kegiatan.id} className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-xl font-semibold">{kegiatan.name}</h2>
            <p>Tanggal: {kegiatan.date}</p>
            <p>Lokasi: {kegiatan.location}</p>
            <Link
              to={`/kegiatan/${kegiatan.id}`}
              className="text-blue-500 hover:underline"
            >
              Lihat Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kegiatan;
