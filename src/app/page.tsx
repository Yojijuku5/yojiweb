"use client";
import Timestamp from '@/components/currentTime';
import Timepost from '@/components/timestamp';
import { useState } from 'react';

const Home = () => {
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
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">Portfolio</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Temporarily go here: https://github.com/Yojijuku5
          </p>
          <p className="pb-4">
            Under Construction
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
