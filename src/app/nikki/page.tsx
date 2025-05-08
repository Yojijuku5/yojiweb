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
          <h1 className="text-xl bg-[#FFCF99]">5月7日</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            9時起床．．．からの二度寝。そして13時起床。常。賭博
          </p>
          <p className="pb-4">
            今日からCONCLAVEが始まります。自分含めて友達5人と一緒に誰が教皇になるか金を賭けてるから優勝するといいな。ちなみに自分が選んだ枢機卿はマッテオ・ズッピ。面白そうな苗字してるピエバティスタ・ピッツァバラ選びたかったけど先に取らせてた。くっ。
          </p>
          <p className="pb-4">
            金曜日に来る予定のアマゾンパッケージが今日来た。やった。
          </p>
          <p className="pb-8">
            新曲<br />Venus - A_Rival<br />Plok! OST - Geoff Follin & Tim Follin<br />抢被子大作战 - 羊音乐、派派(popeyelifelog)
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-xl bg-[#FFCF99]">5月6日</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            4日に作ろうと思ったのを今日作った、さすが自分。
          </p>
          <p className="pb-4">
            バイト。小包の量過去一かもしれん。
          </p>
          <p className="pb-8">
            新曲（アルバム）<br />Drain - Graham Kartna<br />World of Dweebs - Graham Kartna<br />World of DweebsからのWala Surang (Wifi to Japan)にプチハマり。
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
          <p className="pb-8">
            その後人生初のジョリビー食ってた。ジュースとパイが特にウマかった。
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nikki