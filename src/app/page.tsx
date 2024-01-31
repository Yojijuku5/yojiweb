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
          <h1 className="text-3xl bg-blue-500">30th January 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Finally got around to deploying the website I've been thinking about making for the longest time. It says a few things about me that I would rather work on this instead of my University dissertation, 
            despite my dissertation being about something I genuinly find interesting and linked to the industry that I want to eventually go into.
          </p>
          <p className="pb-4">
            For now, the website is very bare bones, consisting of... just this page and text. This post is even written directly into the source code haha, but hopefully I will 
            feel motivated enough to evolve this page into something more whole. High up on the to-do list is to perhaps find a way to be able to post without directly entering the source code. 
            Some more UI aesthetic as well (colours etc. currently being temporary), and then maybe a comment section, even if noone visits because I don't plan on telling the world about this site just yet. 
            A database would probably do wonders on both the storage and the efficiency of the website too.
          </p>
          <p className="pb-4">
            I'm aware of other blogging platforms, however I really wanted to make my own website from scratch for many reasons, which I will list below:
          </p>
          <ol className="list-decimal mx-4 pb-4">
            <li>It will give me much needed programming experience</li>
            <li>I never wanted to create a blog attached to a third service, and making it myself from scratch gives me the utmost freedom to do as I wish.</li>
            <li>I think it will be fun to start from scratch and watch this website evolve, and if I'm really serious about it, in a few years time this could become quite the personal achievement.</li>
            <li>I like programming, I really do!</li>
          </ol>
          <p className="pb-4">
            ...And looking at the preview after finishing the list I see that the left margin for the list doesn't line up with the other paragraphs, despite being within the same 'div' 
            and class. It's seemingly illogical quirks like this that warrant the addition of the final point in the above list. Oh well, after a bit more tweaking I got it to work, evidently.
          </p>
          <p className="pb-4">
            As I think about wrapping up this post, I realise that I won't be able to timestamp the post (time currently 01:59AM), since I don't have such functionality implemented yet. Oh well, I'm sure I'll 
            get around to that soon, right? For now, this is the birth of Yojinet (temp name?) :)
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">31st January 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Yesterday someone was supposed to come around to fix a few issues with the house, one of them being to replace the garden door because recent strong winds from Storm Isha 
            blew a few of the wooden right of the door. In the end, they never turned up, and the estate agents sent me a message the next day (today) asking for confirmation that 
            our house issues were fixed. They recieved a kind reply that stated no.
          </p>
          <p className="pb-4">
            However, the notion that a worker was supposed to be round yesterday made me think about whether it would be the same worker who I saw when I first viewed the house last summer. 
            When I was viewed the house, it was undergoing summer renovations and the worker (who was quite chatty) was letting me know the reasons for this was essentially because the 
            previous tenants destroyed the house. This was/is a student house, and I've seen some pretty nasty ones, but apparently the destruction of this house was so bad it warranted a complete 
            renovation of the ground floor and the bathroom. If the workers words were anything to go by, part of the reason for the complete renovation of the bathroom was because these 
            previous tenants had carved religious symbols directly into the walls with knives. A sharp pain in the side for the landlord and worker I'm sure (with the landlord also apparently 
            presenting a legal case to the previous tenants... yikes), but without the previous tenants unauthorised house modifications, me and my friends would be without a completely renovated 
            ground floor and bathroom, and again, if you've seen some student housing, you'll know how hard that can be to come by.
          </p>
        </div>
        <div className="mx-4">
          <p>Current Time: </p><Timestamp />
        </div>
        <div className="mx-4">
          <button className="bg-indigo-500 rounded-lg" onClick={updateCurrentTime}>{showTime ? 'Hide Current Time' : 'Show Current Time'}</button>
          <Timepost showTime={showTime}/>
        </div>
      </div>
    </main>
  )
}

export default Home