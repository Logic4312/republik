import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 font-sans">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/myrepublic-logo.svg" alt="MyRepublic Logo" width={48} height={48} />
          <span className="text-2xl font-bold text-[#7c3aed]">MyRepublic</span>
        </div>
        <span className="hidden sm:block text-sm text-gray-500 font-medium">#WifiTerbaik Fiber Ultra Cepat & Unlimited</span>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 md:py-20 max-w-5xl mx-auto w-full">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#7c3aed] mb-2">Nikmati #WifiTerbaik Fiber Ultra Cepat dan Unlimited di Yogyakarta</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">Paket combo internet + TV terbaik untuk keluarga tanpa batasan kuota. Daftar mudah, instalasi cepat, dan layanan pelanggan responsif.</p>
          <a href="#daftar" className="inline-block bg-[#7c3aed] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#5b21b6] transition">Daftar Sekarang</a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/fiber-banner.svg" alt="Fiber Ultra Cepat" width={400} height={300} className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Langkah Berlangganan */}
      <section className="bg-white py-12 px-6" id="daftar">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7c3aed]">Tiga Langkah Mudah Berlangganan</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 bg-[#f3f0ff] rounded-lg p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-[#7c3aed] mb-2">1</span>
            <h3 className="font-semibold text-lg mb-1">Registrasi</h3>
            <p className="text-gray-600 text-center">Cek area lokasi pemasangan, pilih paket, dan pilih jadwal pemasangan.</p>
          </div>
          <div className="flex-1 bg-[#f3f0ff] rounded-lg p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-[#7c3aed] mb-2">2</span>
            <h3 className="font-semibold text-lg mb-1">Instalasi</h3>
            <p className="text-gray-600 text-center">Lacak proses instalasi kemudian nikmati layanan MyRepublic!</p>
          </div>
          <div className="flex-1 bg-[#f3f0ff] rounded-lg p-6 flex flex-col items-center shadow">
            <span className="text-4xl font-bold text-[#7c3aed] mb-2">3</span>
            <h3 className="font-semibold text-lg mb-1">Bayar</h3>
            <p className="text-gray-600 text-center">Bayar tagihan dan nikmati kecepatan layanan MyRepublic.</p>
          </div>
        </div>
      </section>

      {/* Kontak & Alamat */}
      <section className="py-12 px-6 bg-[#ede9fe]">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 text-[#7c3aed]">Kontak & Alamat Cabang Yogyakarta</h2>
            <p className="mb-1">XT Square Jl. Veteran No.150-151, Pandeyan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55161</p>
            <p className="mb-1">WhatsApp: <a href="https://wa.me/6281395864076" className="text-[#7c3aed] underline">6281395864076</a></p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/yogyakarta-map.svg" alt="Peta Yogyakarta" width={260} height={180} className="rounded-lg shadow" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-4 text-gray-500 text-sm bg-white border-t mt-auto">
        &copy; {new Date().getFullYear()} MyRepublic Yogyakarta. All rights reserved.
      </footer>
    </div>
  );
}
