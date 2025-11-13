'use client';
import { useState } from 'react';
import Image from 'next/image';
import useFetchUser from '@/src/app/Hooks/useFetchUser';
import { useDispatch } from 'react-redux';
import { addVideo, removeVideo } from '@/src/redux/features/VideoCartSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const initialVideos = [
  { id: 1, title: 'Big 4 Auditor Financial Analyst', category: 'Pemasaran', price: '300K' },
  { id: 2, title: 'Big 4 Auditor Financial Analyst', category: 'Desain', price: '300K' },
  { id: 3, title: 'Big 4 Auditor Financial Analyst', category: 'Pengembangan Diri', price: '300K' },
  { id: 4, title: 'Big 4 Auditor Financial Analyst', category: 'Bisnis', price: '300K' },
  { id: 5, title: 'Big 4 Auditor Financial Analyst', category: 'Pemasaran', price: '300K' },
  { id: 6, title: 'Big 4 Auditor Financial Analyst', category: 'Pengembangan Diri', price: '300K' },
  { id: 7, title: 'Big 4 Auditor Financial Analyst', category: 'Bisnis', price: '300K' },
  { id: 8, title: 'Big 4 Auditor Financial Analyst', category: 'Desain', price: '300K' },
  { id: 9, title: 'Big 4 Auditor Financial Analyst', category: 'Pemasaran', price: '300K' },
];

function Main() {
  const [videoList, setVideoList] = useState(initialVideos);
  const [activeCategory, setActiveCategory] = useState('Semua Kelas');
  const categories = ['Semua Kelas', 'Pemasaran', 'Desain', 'Pengembangan Diri', 'Bisnis'];

  const { user, loading } = useFetchUser();

  const dispatch = useDispatch();
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredVideos = videoList.filter(video =>
    activeCategory === 'Semua Kelas' ? true : video.category === activeCategory
  );

  
  const deleteVideo = (id: number) => {
    if (confirm('Yakin ingin hapus video ini?')) {
      setVideoList(videoList.filter(v => v.id !== id));
    }
  };

  if (loading) return <p className="text-center">Loading data...</p>;

  return (
    <>
      <div className="grid px-5 py-7 lg:px-30 lg:py-16 gap-7">
        <div className="grid px-5 py-6 text-white items-center rounded-lg gap-3 bg-[url('/bg-mission3.jpg')] bg-cover bg-center">
          <h1 className="text-center font-bold text-2xl lg:text-5xl">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
          </h1>
          <h2 className="text-center text-sm lg:text-base">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
          </h2>
          <div className="py-3 flex justify-center">
            <button className="bg-green-500 rounded py-2 px-4 text-sm">
              Temukan Video Course untuk Dipelajari!
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:gap-8">
          <div>
            <h1 className="font-bold text-xl lg:text-3xl">Koleksi Video Pembelajaran Unggulan</h1>
            <h2 className="text-sm lg:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</h2>
          </div>

          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4 py-2 whitespace-nowrap">
              {categories.map((category) => (
                <span
                  key={category}
                  className={`cursor-pointer font-semibold pb-1 transition duration-200 ${
                    activeCategory === category
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white p-3 rounded-lg shadow">
                <div className="flex lg:block gap-2">
                  <Image
                    src={`/${video.id}.png`}
                    alt={`Gambar${video.id}`}
                    width={300}
                    height={200}
                    className="w-20 h-20 lg:w-100 lg:h-40 rounded-lg"
                  />
                  <div>
                    <h2 className="text-sm lg:text-2xl font-bold">{video.title}</h2>
                    <p className="hidden md:block">
                      Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                    </p>

                    <div className="grid grid-cols-2 items-center mt-2">
                      <Image src="/Avatar.png" alt="Avatar" width={40} height={40} className="w-9 h-9" />
                      <div>
                        <h2 className="text-sm lg:font-bold">{user?.name}</h2>
                        <h3 className="text-sm text-gray-500">Senior Accountant di Gojek</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1 items-center mt-2">
                  <Image src="/bintang.png" alt="Bintang" width={100} height={20} />
                  <h3 className="text-green-400">RP {video.price}</h3>
                </div>
                <button
                  onClick={() => deleteVideo(video.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded mt-2"
                >
                  🗑️ Hapus
                </button>
                <button
  onClick={() => {
    dispatch(addVideo(video));
    toast.success(`✅ "${video.title}" ditambahkan ke keranjang!`);
    console.log('✅ Ditambahkan ke Redux:', video);
  }}
  className="bg-blue-500 text-white px-3 py-1 rounded mt-2 mr-2"
>
  + Pilih Video
</button>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 py-7 lg:px-30 lg:py-16 gap-7">
        <div className="menuBg px-5 py-6 text-white grid items-center rounded-lg gap-3 lg:py-21 lg:px-35 lg:gap-6 bg-[url('/bg2.jpg')] bg-cover bg-center">
            <div>
            <h2 className="flex justify-center text-center text-xl lg:text-3xl">Newsletter</h2>
            </div>
            <div className="flex justify-center text-xl lg:text-3xl font-bold">
            <h1>Mau Belajar Lebih Banyak?</h1>
            </div>
            <div>
            <h2 className="text-center text-sm lg:text-base">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
                hariesok.id
            </h2>
            </div>

            <div className="flex bg-white border border-gray-300 rounded-lg p-1 w-full">
            <input
                type="text"
                placeholder="Masukan E-Mailmu"
                className="flex outline-none text-black p-1"
            />
            <button className="hidden lg:block bg-orange-300 text-black p-1 rounded-lg mr-2">Subscribe</button>
            </div>
            <div>
            <button className="flex justify-center lg:hidden bg-orange-300 text-black p-1 rounded-lg w-full">
                Subscribe
            </button>
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Main;
