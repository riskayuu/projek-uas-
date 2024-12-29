import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    program: "",
    semester: "",
    batch: "",
    gender: "",
    birthdate: "",
    phone: "",
    email: "",
    address: "",
    instrument: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Untuk menampilkan halaman sukses

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", formData);
    setIsSubmitted(true); // Mengatur tampilan ke halaman sukses
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-green-600 mb-4">Pendaftaran Berhasil!</h1>
        <p className="text-center mb-6">
          Terima kasih, <strong>{formData.name}</strong>, telah mendaftar di UKM Seni Musik UAD.
        </p>
        <h2 className="text-xl font-bold mb-2">Rincian Pendaftaran:</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><strong>NIM:</strong> {formData.nim}</li>
          <li><strong>Program Studi:</strong> {formData.program}</li>
          <li><strong>Semester:</strong> {formData.semester}</li>
          <li><strong>Angkatan:</strong> {formData.batch}</li>
          <li><strong>Jenis Kelamin:</strong> {formData.gender}</li>
          <li><strong>Nomor Telepon:</strong> {formData.phone}</li>
          <li><strong>Divisi:</strong> {formData.divisi}</li>
          <li><strong>Alat Musik yang Dikuasai:</strong> {formData.instrument}</li>
        </ul>
        <p className="mb-4">
          Bergabunglah di grup WhatsApp untuk informasi lebih lanjut:{" "}
          <a
            href="https://chat.whatsapp.com/tautan-grup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Klik di sini untuk bergabung.
          </a>
        </p>
        
        <button>
        <Link to="/" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Home
        </Link>
        </button>
          
      </div>
    );
  }

  return (
    <form
      className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Formulir Pendaftaran</h1>

      <label className="block mb-2 font-medium">Nama Lengkap</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan nama lengkap"
        required
      />

      <label className="block mb-2 font-medium">Nomor Induk Mahasiswa (NIM)</label>
      <input
        type="text"
        name="nim"
        value={formData.nim}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan NIM"
        required
      />

      <label className="block mb-2 font-medium">Program Studi</label>
      <input
        type="text"
        name="program"
        value={formData.program}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan program studi"
        required
      />

      <label className="block mb-2 font-medium">Semester</label>
      <input
        type="text"
        name="semester"
        value={formData.semester}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan semester"
        required
      />

      <label className="block mb-2 font-medium">Angkatan</label>
      <input
        type="text"
        name="batch"
        value={formData.batch}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan angkatan"
        required
      />

      <label className="block mb-2 font-medium">Jenis Kelamin</label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Pilih Jenis Kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>

      <label className="block mb-2 font-medium">Tanggal Lahir</label>
      <input
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Nomor Telepon/WhatsApp</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan nomor telepon"
        required
      />

      <label className="block mb-2 font-medium">Divisi</label>
      <select
        type="divisi"
        name="divisi"
        value={formData.divisi}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Divisi yang diinginkan"
        required
        >
        <option value="">Pilih Divisi</option>
        <option value="Divisi Musik">Divisi Musik</option>
        <option value="Divisi Event Organizer">Divisi Event Organizer</option>
        </select>
    

      <label className="block mb-2 font-medium">Alamat Domisili</label>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Masukkan alamat domisili"
      />

      <label className="block mb-2 font-medium">Alat Musik yang Dikuasai</label>
      <input
        type="text"
        name="instrument"
        value={formData.instrument}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        placeholder="Contoh: Gitar, Keyboard"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Daftar
      </button>
    </form>
  ); 
}

export default RegistrationForm;
