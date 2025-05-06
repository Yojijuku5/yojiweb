"use client";
import Image from 'next/image';
import Timestamp from '@/components/currentTime';
import Link from 'next/link';
import { useState } from 'react';

const Nikki = () => {
  const [showTime, setShowTime] = useState(false);

  const updateCurrentTime = () => {
    setShowTime((showTime) => !showTime);
  }

  return (
    <main>
      <div className="flex-col">
        <div className="flex-auto h-20 text-center text-5xl">
          <h1 className="my-4">Yojiweb</h1>
        </div>
        <div className="mx-4">
          <button onClick={updateCurrentTime} className="bg-green-500 text-white px-4 py-2 rounded">
            {showTime ? "Hide Time" : "Show Time"}
          </button>
        </div>
        {showTime && (
          <div className="mx-4">
            <Timestamp />
          </div>
        )}
        <div className="mx-4">
          <Link href="/">Home</Link>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-xl bg-[#FFCF99]">5月6日</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            4日に作ろうと思ったのを今日作った、さすが自分。
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-xl bg-[#FFCF99]">5月5日</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            一週間の軟禁（バイト）からやっと解放。久しぶりに市内行って、なんかアラブ系の人たちがデモやってて自分の隣にいたオバサンが自分に「Christ&apos;s sake, this is England!」言ってた。ちょっとビックリして「Oh...」しか返せなかったけどあーゆー人たち凄いなと思う。
          </p>
          <Image src="/20250505_135755.jpg" alt="Jollibee" width={200} height={200}/>
          <p className="pb-4">
            その後人生初のジョリビー食ってた。ジュースとパイが特にウマかった。
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nikki