'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/src/redux/store';
import { removeVideo } from '@/src/redux/features/VideoCartSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const selectedVideos = useSelector((state: RootState) => state.videoCart.selectedVideos);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {    dispatch(removeVideo(id));
  };

  const videos = Array.isArray(selectedVideos) ? selectedVideos : [];

  return (
    <div className="px-5 py-10 lg:px-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Daftar Video yang Dipilih</h1>


      {videos.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Belum ada video yang kamu pilih.</p>
          <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Kembali ke Beranda
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={`/${video.id}.png`}
                  alt={video.title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-3"
                />
                <h2 className="font-bold text-xl">{video.title}</h2>
                <p className="text-gray-600 mb-2">{video.category}</p>
                <h3 className="text-green-500 font-semibold mb-3">Rp {video.price}</h3>
                <button
                  onClick={() => handleRemove(video.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Hapus dari Keranjang
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="bg-gray-300 text-black px-4 py-2 rounded mr-3">
              Kembali
            </Link>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Lanjut ke Pembayaran
            </button>
          </div>
        </>
      )}
    </div>
  );
}
