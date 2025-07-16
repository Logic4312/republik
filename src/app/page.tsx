"use client";

import Image from "next/image";
import { useState } from "react";
import React from "react"; // Added for useEffect

// Tambahkan index signature agar akses string tidak error
type Paket = {
  label: string;
  speed: string;
  oldSpeed: string;
  price: string;
  benefit: string[];
  img: string;
};
type Kategori = {
  [kategori: string]: Paket[];
};
type Periode = {
  [periode: string]: Kategori;
};
type PromoData = {
  [residensial: string]: Periode;
};

const promoData: PromoData = {
  Residensial: {
    "1 Bulan": {
      "Internet": [
        {
          label: "Value",
          speed: "50 Mbps",
          oldSpeed: "30 Mbps",
          price: "Rp 260.850",
          benefit: [
            "Gratis Upgrade Speed 40 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Gratis Instalasi Rp500.000",
            "Ideal untuk 1 - 3 Device"
          ],
          img: "/30mbps.jpg"
        },
        {
          label: "Fast",
          speed: "100 Mbps",
          oldSpeed: "50 Mbps",
          price: "Rp 277.500",
          benefit: [
            "Gratis Upgrade Speed 100 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Gratis Instalasi Rp500.000",
            "Ideal untuk 1 - 5 Device"
          ],
          img: "/50mbps.jpg"
        },
        {
          label: "Nova",
          speed: "200 Mbps",
          oldSpeed: "100 Mbps",
          price: "Rp 333.000",
          benefit: [
            "Gratis Upgrade Speed 200 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Vidio Platinum Lite",
            "Ideal untuk banyak device"
          ],
          img: "/100mbps.jpg"
        },
        {
          label: "MyGamer",
          speed: "350 Mbps",
          oldSpeed: "250 Mbps",
          price: "Rp 444.000",
          benefit: [
            "Gratis Upgrade Speed 350 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Vidio Platinum Lite",
            "Ideal untuk gaming"
          ],
          img: "/250mbps.jpg"
        },
        {
          label: "Prime",
          speed: "500 Mbps",
          oldSpeed: "350 Mbps",
          price: "Rp 600.000",
          benefit: [
            "Gratis Upgrade Speed 500 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Vidio Platinum Lite",
            "Ideal untuk keluarga besar & bisnis rumahan"
          ],
          img: "/prime.jpg"
        }
      ],
      "Internet + TV": [
        {
          label: "Value TV",
          speed: "50 Mbps",
          oldSpeed: "30 Mbps",
          price: "Rp 320.000",
          benefit: [
            "Upgrade Speed 40 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Include TV Box",
            "Gratis Instalasi Rp500.000"
          ],
          img: "/30mbps.jpg"
        }
      ],
      "Internet + Streaming": [
        {
          label: "Value Streaming",
          speed: "50 Mbps",
          oldSpeed: "30 Mbps",
          price: "Rp 350.000",
          benefit: [
            "Upgrade Speed 40 Mbps",
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Include Streaming Service",
            "Gratis Instalasi Rp500.000"
          ],
          img: "/30mbps.jpg"
        }
      ]
    },
    "12 Get 6": {
      "Internet": [
        {
          label: "Value Promo 12/6",
          speed: "50 Mbps",
          oldSpeed: "30 Mbps",
          price: "Rp 250.000",
          benefit: [
            "Promo 12 Get 6",
            "Internet UNLIMITED",
            "Include ONT/Modem"
          ],
          img: "/30mbps.jpg"
        }
      ],
      "Internet + TV": [],
      "Internet + Streaming": []
    },
    "9 Get 3": {
      "Internet": [],
      "Internet + TV": [],
      "Internet + Streaming": []
    },
    "5 Get 1": {
      "Internet": [],
      "Internet + TV": [],
      "Internet + Streaming": []
    }
  },
  "Bisnis SME": {
    "1 Bulan": {
      "Internet": [
        {
          label: "Biz Value",
          speed: "100 Mbps",
          oldSpeed: "80 Mbps",
          price: "Rp 500.000",
          benefit: [
            "Internet UNLIMITED",
            "Include ONT/Modem",
            "Support Bisnis"
          ],
          img: "/100mbps.jpg"
        }
      ],
      "Internet + TV": [],
      "Internet + Streaming": []
    },
    "12 Get 6": {
      "Internet": [
        {
          label: "Biz Promo 12/6",
          speed: "100 Mbps",
          oldSpeed: "80 Mbps",
          price: "Rp 480.000",
          benefit: [
            "Promo 12 Get 6",
            "Internet UNLIMITED",
            "Include ONT/Modem"
          ],
          img: "/100mbps.jpg"
        }
      ],
      "Internet + TV": [],
      "Internet + Streaming": []
    },
    "9 Get 3": {
      "Internet": [],
      "Internet + TV": [],
      "Internet + Streaming": []
    },
    "5 Get 1": {
      "Internet": [],
      "Internet + TV": [],
      "Internet + Streaming": []
    }
  }
};

const residensialTabs = ["Residensial", "Bisnis SME"];
const periodeTabs = ["1 Bulan", "12 Get 6", "9 Get 3", "5 Get 1"];
const kategoriTabs = ["Internet", "Internet + TV", "Internet + Streaming"];

function PromoTabs() {
  const [residensial, setResidensial] = useState<string>("Residensial");
  const [periode, setPeriode] = useState<string>("1 Bulan");
  const [kategori, setKategori] = useState<string>("Internet");
  const [startIdx, setStartIdx] = useState<number>(0);

  const paketList = promoData[residensial][periode][kategori] || [];

  // Responsif: 4 kartu di desktop, 1 kartu di mobile
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
    }
    return 4; // desktop
  };
  const [visibleCount, setVisibleCount] = useState<number>(4);

  // Update visibleCount saat resize
  React.useEffect(() => {
    const updateCount = () => setVisibleCount(getVisibleCount());
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Reset swipe index saat tab berubah
  React.useEffect(() => {
    setStartIdx(0);
  }, [residensial, periode, kategori]);

  const canSwipeLeft = startIdx > 0;
  const canSwipeRight = startIdx + visibleCount < paketList.length;

  const handleSwipeLeft = () => {
    if (canSwipeLeft) setStartIdx(startIdx - 1);
  };
  const handleSwipeRight = () => {
    if (canSwipeRight) setStartIdx(startIdx + 1);
  };

  const visiblePaket = paketList.slice(startIdx, startIdx + visibleCount);

  return (
    <section id="paket" className="w-full bg-[#f7f6fb] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex gap-2 mb-4">
            {residensialTabs.map((tab: string) => (
              <button
                key={tab}
                onClick={() => setResidensial(tab)}
                className={`px-6 py-2 rounded-full border font-semibold ${residensial === tab ? "border-purple-600 bg-purple-600 text-white" : "border-gray-300 text-gray-700 bg-white"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Internetan Super Lancar dan Unlimited!</h2>
          <p className="text-lg text-gray-600 text-center mb-4">Hemat Besar Mulai Rp 235.000 – Streaming Lancar, Gaming Tanpa Lag, Langganan Sekarang</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {periodeTabs.map((tab: string) => (
              <button
                key={tab}
                onClick={() => setPeriode(tab)}
                className={`px-4 py-1 rounded font-medium ${periode === tab ? "bg-white border border-purple-600 text-purple-600" : "bg-white border border-gray-300 text-gray-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {kategoriTabs.map((tab: string) => (
              <button
                key={tab}
                onClick={() => setKategori(tab)}
                className={`px-4 py-1 rounded font-medium ${kategori === tab ? "bg-purple-600 text-white" : "bg-white border border-gray-300 text-gray-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="relative">
          {canSwipeLeft && (
            <button
              onClick={handleSwipeLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
              aria-label="Geser ke kiri"
            >
              <span className="text-2xl">&#8592;</span>
            </button>
          )}
          {canSwipeRight && (
            <button
              onClick={handleSwipeRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
              aria-label="Geser ke kanan"
            >
              <span className="text-2xl">&#8594;</span>
            </button>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {visiblePaket.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 py-12">Tidak ada paket untuk pilihan ini.</div>
            ) : (
              visiblePaket.map((pkg: Paket, idx: number) => (
                <div key={pkg.label} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <div className="relative h-36 w-full">
                    <Image src={pkg.img} alt={pkg.label} fill className="object-cover" />
                    <div className="absolute top-2 left-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow">{pkg.speed}</div>
                    <div className="absolute top-2 right-2 bg-white/80 text-purple-600 px-2 py-0.5 rounded text-xs line-through font-semibold">{pkg.oldSpeed}</div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{pkg.label}</h3>
                    <div className="text-2xl font-bold text-purple-700 mb-1">{pkg.price} <span className="text-base font-normal text-gray-500">/ Bulan</span></div>
                    <div className="text-xs text-gray-500 mb-2">Harga termasuk PPN 11%</div>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold mb-3 hover:bg-purple-700 transition">Chat Sales</button>
                    <div className="text-sm font-semibold text-gray-700 mb-1">Fitur dan Benefit</div>
                    <ul className="text-xs text-gray-600 flex-1 space-y-1 mb-2">
                      {pkg.benefit.map((b: string, i: number) => (
                        <li key={i} className="flex items-center gap-2"><span>•</span> {b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 text-xs text-gray-700 shadow max-w-4xl mx-auto">
          <div className="font-bold mb-2">Syarat dan Ketentuan</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>Promo berlaku untuk pelanggan baru yang berlangganan pada tanggal 1 - 31 Juli 2025</li>
            <li>Promo berlaku untuk paket Internet Only dan Combo TV</li>
            <li>Promo berlaku selama 12 bulan berlangganan</li>
            <li>Promo gratis speed upgrade berlaku selama 3 bulan berlangganan</li>
            <li>Khusus untuk pelajar/pendidik, akan mendapatkan gratis speed upgrade 6 bulan dengan wajib melampirkan bukti kartu pelajar/kartu pendidik</li>
            <li>Harga tertera di atas sudah termasuk PPN 11%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-extrabold text-blue-600 select-none">MyRepublic</div>
        <div className="flex gap-8 text-base font-medium">
          <a href="#beranda" className="text-blue-600 font-bold">Beranda</a>
          <a href="#paket" className="text-gray-700 hover:text-blue-600">Paket</a>
          <a href="#caraberlangganan" className="text-gray-700 hover:text-blue-600">Cara Berlangganan</a>
          <a href="#kontak" className="text-gray-700 hover:text-blue-600">Kontak</a>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section id="beranda" className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nikmati #WifiTerbaik Fiber Ultra Cepat dan Unlimited di Yogyakarta
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Nikmati paket combo internet + TV terbaik untuk keluarga tanpa batasan kuota
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#hubungi" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
              >
                Hubungi Tim MyRepublic
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Promo Paket Internet (interaktif) */}
      <PromoTabs />

      {/* Langkah Berlangganan */}
      <section id="caraberlangganan" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Berlangganan
            </h2>
            <p className="text-xl text-gray-600">
              Nikmati Wifi Internet Rumah di MyRepublic
            </p>
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Tiga langkah mudah untuk menggunakan layanan dari kami
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Registrasi</h4>
              <p className="text-gray-600">
                Cek area lokasi pemasangan, pilih paket, dan pilih jadwal pemasangan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Instalasi</h4>
              <p className="text-gray-600">
                Lacak proses instalasi kemudian nikmati layanan MyRepublic!
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Bayar</h4>
              <p className="text-gray-600">
                Bayar tagihan dan nikmati kecepatan layanan MyRepublic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak & Alamat */}
      <section id="kontak" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kontak & Alamat Cabang Yogyakarta
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      XT Square Jl. Veteran No.150-151, Pandeyan, Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55161
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/6281395864076" 
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      6281395864076
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image 
                src="/yogyakarta-map.svg" 
                alt="Lokasi Cabang Yogyakarta" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} MyRepublic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
