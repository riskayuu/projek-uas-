import React, { useEffect, useState } from "react";

const NewMembers = () => {
  const [newMembers, setNewMembers] = useState([]);
  const [anggotaBaru, setAnggotaBaru] = useState(() => {
    const savedCount = parseInt(localStorage.getItem("anggotaBaru"), 10);
    return savedCount || 0;
  });

  useEffect(() => {
    const count = parseInt(localStorage.getItem("anggotaBaru"), 10) || 0;
    const members = Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      name: `Anggota Baru ${index + 1}`,
      nim: `2300016${index + 1}`,
      program: "Sistem Informasi",
      semester: 1,
      angkatan: "2024",
      gender: "Laki-Laki",
      birthdate: "01/01/2000",
      phone: "081234567890",
      division: "Teknologi Informasi",
      address: "Jl. Contoh Alamat",
      instrument: "Gitar",
      photo: "https://via.placeholder.com/150",
    }));
    setNewMembers(members);
  }, []);

  useEffect(() => {
    localStorage.setItem("anggotaBaru", anggotaBaru);
  }, [anggotaBaru]);

  const handleNewMember = () => {
    setAnggotaBaru((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("anggotaBaru", newCount);
      setNewMembers((prevMembers) => [
        ...prevMembers,
        {
          id: newCount,
          name: `Anggota Baru ${newCount}`,
          nim: `2300016${newCount}`,
          program: "Sistem Informasi",
          semester: 1,
          angkatan: "2024",
          gender: "Laki-Laki",
          birthdate: "01/01/2000",
          phone: "081234567890",
          division: "Teknologi Informasi",
          address: "Jl. Contoh Alamat",
          instrument: "Gitar",
          photo: "https://via.placeholder.com/150",
        },
      ]);
      return newCount;
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Anggota Baru</h1>
      <div className="mb-4 text-center">
        <button
          onClick={handleNewMember}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Tambah Anggota Baru
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newMembers.map((member) => (
          <li
            key={member.id}
            className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={`${member.name}'s photo`}
                className="w-24 h-24 rounded-full mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold mb-2 text-center">{member.name}</h2>
              <div className="text-sm text-gray-700">
                <p><strong>NIM:</strong> {member.nim}</p>
                <p><strong>Program Studi:</strong> {member.program}</p>
                <p><strong>Semester:</strong> {member.semester}</p>
                <p><strong>Angkatan:</strong> {member.angkatan}</p>
                <p><strong>Jenis Kelamin:</strong> {member.gender}</p>
                <p><strong>Tanggal Lahir:</strong> {member.birthdate}</p>
                <p><strong>Nomor Telepon:</strong> {member.phone}</p>
                <p><strong>Divisi:</strong> {member.division}</p>
                <p><strong>Alamat Domisili:</strong> {member.address}</p>
                <p><strong>Alat Musik yang Dikuasai:</strong> {member.instrument}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewMembers;
