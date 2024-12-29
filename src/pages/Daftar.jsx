import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputField = ({ label, type, name, value, onChange, placeholder, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      required={required}
    >
      <option value="">Pilih {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

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
    divisi: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang dikirim:", formData);

    // Ambil data anggota baru dari localStorage
    const currentCount = parseInt(localStorage.getItem('anggotaBaru'), 10) || 0;
    const updatedCount = currentCount + 1;

    // Simpan data yang diperbarui
    localStorage.setItem('anggotaBaru', updatedCount);

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
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
        <button className="w-full">
          <Link to="/" className="block text-center bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Home
          </Link>
        </button>
      </div>
    );
  }

  return (
    <form
      className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Formulir Pendaftaran</h1>
      <InputField label="Nama Lengkap" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Masukkan nama lengkap" required />
      <InputField label="Nomor Induk Mahasiswa (NIM)" type="text" name="nim" value={formData.nim} onChange={handleChange} placeholder="Masukkan NIM" required />
      <InputField label="Program Studi" type="text" name="program" value={formData.program} onChange={handleChange} placeholder="Masukkan program studi" required />
      <InputField label="Semester" type="text" name="semester" value={formData.semester} onChange={handleChange} placeholder="Masukkan semester" required />
      <InputField label="Angkatan" type="text" name="batch" value={formData.batch} onChange={handleChange} placeholder="Masukkan angkatan" required />
      <SelectField label="Jenis Kelamin" name="gender" value={formData.gender} onChange={handleChange} options={["Laki-laki", "Perempuan"]} required />
      <InputField label="Tanggal Lahir" type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
      <InputField label="Nomor Telepon/WhatsApp" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Masukkan nomor telepon" required />
      <SelectField label="Divisi" name="divisi" value={formData.divisi} onChange={handleChange} options={["Divisi Musik", "Divisi Event Organizer"]} required />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Alamat Domisili</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Masukkan alamat domisili"
        />
      </div>
      <InputField label="Alat Musik yang Dikuasai" type="text" name="instrument" value={formData.instrument} onChange={handleChange} placeholder="Contoh: Gitar, Keyboard" />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Daftar
      </button>
    </form>
  );
}

export default RegistrationForm;
