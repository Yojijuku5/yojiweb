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
            Finally got around to deploying the website I&apos;ve been thinking about making for the longest time. It says a few things about me that I would rather work on this instead of my University dissertation, 
            despite my dissertation being about something I genuinly find interesting and linked to the industry that I want to eventually go into.
          </p>
          <p className="pb-4">
            For now, the website is very bare bones, consisting of... just this page and text. This post is even written directly into the source code haha, but hopefully I will 
            feel motivated enough to evolve this page into something more whole. High up on the to-do list is to perhaps find a way to be able to post without directly entering the source code. 
            Some more UI aesthetic as well (colours etc. currently being temporary), and then maybe a comment section, even if noone visits because I don&apos;t plan on telling the world about this site just yet. 
            A database would probably do wonders on both the storage and the efficiency of the website too.
          </p>
          <p className="pb-4">
            I&apos;m aware of other blogging platforms, however I really wanted to make my own website from scratch for many reasons, which I will list below:
          </p>
          <ol className="list-decimal mx-4 pb-4">
            <li>It will give me much needed programming experience</li>
            <li>I never wanted to create a blog attached to a third service, and making it myself from scratch gives me the utmost freedom to do as I wish.</li>
            <li>I think it will be fun to start from scratch and watch this website evolve, and if I&apos;m really serious about it, in a few years time this could become quite the personal achievement.</li>
            <li>I like programming, I really do!</li>
          </ol>
          <p className="pb-4">
            ...And looking at the preview after finishing the list I see that the left margin for the list doesn&apos;t line up with the other paragraphs, despite being within the same &apos;div&apos 
            and class. It&apos;s seemingly illogical quirks like this that warrant the addition of the final point in the above list. Oh well, after a bit more tweaking I got it to work, evidently.
          </p>
          <p className="pb-4">
            As I think about wrapping up this post, I realise that I won&apos;t be able to timestamp the post (time currently 01:59AM), since I don&apos;t have such functionality implemented yet. Oh well, I&apos;m sure I&apos;ll 
            get around to that soon, right? For now, this is the birth of Yojiweb (temp name?) :)
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
            previous tenants destroyed the house. This was/is a student house, and I&apos;ve seen some pretty nasty ones, but apparently the destruction of this house was so bad it warranted a complete 
            renovation of the ground floor and the bathroom. If the workers words were anything to go by, part of the reason for the complete renovation of the bathroom was because these 
            previous tenants had carved religious symbols directly into the walls with knives. A sharp pain in the side for the landlord and worker I&apos;m sure (with the landlord also apparently 
            presenting a legal case to the previous tenants... yikes), but without the previous tenants unauthorised house modifications, me and my friends would be without a completely renovated 
            ground floor and bathroom, and again, if you&apos;ve seen some student housing, you&apos;ll know how hard that can be to come by.
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">1st February 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Two days later, and no new features have been implemented yet, womp womp. However, I <span className="italic">have</span> been working behind the scenes and learning/developing 
            a few small things that I hope to push through within the next week or so... hopefully. I even have a &apos;dev&apos; branch on the github repository for the website now! I <span className="italic">am </span>
            a proper web developer now! Woo!!!
          </p>
          <p className="pb-4">
            One thing I&apos;ve been taking a look at in preparation for on-site text editing (as opposed to directly into the code) is a text editor framework called <a href="https://docs.slatejs.org/" className="text-blue-500">Slate</a>. 
            From my brief look through what it does, it seems like the perfect sort of thing, being easy to implement, while providing many different customisations which should make writing posts like this 
            a lot easier. For example, right now every time I want to italicise something, I have to implement the <code className="font-mono text-gray-800">&lt;span className=&quot;italic&quot;&gt;</code> tags 
            manually, and having a text editor will greatly simplify the process. By streamlining the whole process, it makes the website more accessible as a product, and even though I will be the 
            only one posting, if I ever wanted to add any interactive features, having the text editor implemented will surely make it easier in the future.
          </p>
          <p className="pb-4">
            The largest development problem would probably be having to integrate the database into the website to make sure I&apos;m the only one able to create these posts. Essentially, 
            I would need to give myself admin rights, to prevent random people from also being able to post. It wouldn&apos;t be a personal website if anyone who visited could post whatever they want, not to mention there isn&apos;t any sort of word blacklist 
            set up either. It would be strange if anyone could post and their post would appear right along mine and anyone else&apos;s on the site for all to see. Although, this could be the 
            sort of thing that might foster a sense of community... Everyone would be in on the conversation, and no one person would be &apos;above&apos; anyone else... Maybe I could add a feature where a user 
            could &apos;like&apos; a post that they enjoyed even? Hmmm, I think I&apos;m onto something...
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">2nd February 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4 font-bold">
            Things I MUST do (but will probably leave until the last minute):
          </p>
          <ul className="list-disc mx-4 pb-4">
            <li>My final year dissertation computer program</li>
            <li>Applications for a summer internship</li>
            <li>Applications for a graduate job (instead of a master&apos;s degree)</li>
            <li>Applications for a master&apos;s degree (instead of a graduate job)</li>
            <li>Reimbursement forms for my university society purchases</li>
          </ul>
          <p className="pb-4 font-bold">
            Things I would like to do instead (and will probably continue doing instead of the more important things):
          </p>
          <ul className="list-disc mx-4 pb-4">
            <li>Continue developing this website</li>
            <li>Play this month&apos;s round of Taiko no Tatsujin: Rhythm Festival song additions</li>
            <li>Spend more time on The Idolm@ster Million Live: Theater Days</li>
            <li>Purchase Lethal Company</li>
            <li>Go on a nice walk</li>
            <li>Get more used to using social media</li>
          </ul>
          <p className="pb-4 font-bold">
            Things I can do (that I probably won&apos;t) to give me more free time:
          </p>
          <ul className="list-disc mx-4 pb-4">
            <li>Have a proper sleep schedule</li>
            <li>Take shorter showers</li>
            <li>Attend fewer university lectures</li>
            <li>Watch less youtube</li>
            <li>Browse less social media</li>
            <li>Simply stop being lazy</li>
          </ul>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">3rd February 2024</h1>
        </div>
        <div className="mx-4">
          <p>
            Setsubun Soybeans:
          </p>
          <p className="pb-4">
            1 Bean, 2 Bean, 3 Bean, 4 Bean, 5 Bean, 6 Bean, 7 Bean, 8 Bean, 9 Bean, 10 Bean, 11 Bean, 12 Bean, 13 Bean, 14 Bean, 15 Bean, 16 Bean, 17 Bean, 18 Bean, 19 Bean, 20 Bean.
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">4th February 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Today I had no idea what to write for the website (I do really want to try and have <span className="italic">something</span> on here every day), and so in a last-ditch attempt 
            to try for at least something somewhat interesting, I think I&apos;m going to write about one of my favourite alcoholic beverages (be warned, it is not exactly sophisticated, for I am not a 
            sophisticated drinker; the drink I am about to describe being a staple of many a night out at my local Wetherspoons).
          </p>
          <p className="pb-4">
            This drink is a Gin (preferably a double) with a mixer of Orange Juice. Yeah that&apos;s it. Simple, but delicious at the same time. Since I personally cannot take the taste of 
            alcohol very well, I go out of my way to find a drink that masks the taste of the double-shot alcohol, and my first year student self found the perfect solution in this drink. 
            Having tried Gin with a variety of other mixers, probably my favourite two would be Lemonade and Orange Juice. Lemonade is a classic mixer, but not as many people go for the Orange 
            Juice, and I feel that the OJ does a better job at concealing the taste of alcohol (maybe not a good thing...), which is part of the reason for my affection towards this drink. 
            Colloquially, such a drink has come to be known within my group of friends by the name &apos;egg&apos;, so called due to it&apos;s egg-yolk-like appearance, especially if the gin 
            used is a Beefeater Blood Orange (which it typically is since for some reason this is the cheapest gin at the local Wetherspoons). 
          </p>
          <p className="pb-4">
            Part of me wonders if at some point in my life I will move away from having a Gin and OJ on a night out. Perhaps I will be finanically stable enough to go to a proper pub, 
            or my tastes will move me away from the drink. I don&apos;t like the taste of beer (and beer-adjacent drinks) or wine though, which significantly restricts my choice, so for now 
            at least, on a night out I will carry on consuming the egg.
          </p>
        </div>
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">5th February 2024</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            I&apos;ve decided this week is going to be <span className="font-bold">Good Sleep-schedule Week.</span>
          </p>
          <p className="pb-4">
            I&apos;ve been thinking for the past few days that as I add more and more things to my daily routine (the biggest being writing/developing this website, among other things in 
            my life), it would be nice if I could restructure my daily routine to be more productive, because right now there&apos;s a whole lot of sitting around doing nothing, scrolling 
            social media, being too tired, or asleep. Part of the reason for this includes late nights and the consequent late mornings which would find much more use if I was actually 
            awake to take advantage of them. Who knows, maybe I just end up doing a whole lot of nothing in the mornings instead now, but at least I can say I&apos;ve tried. 
          </p>
          <p className="pb-4">
            What are the rules for this &apos;challenge&apos; then? First, I need to a strict early-ish bedtime as well as a reasonable wake-up time. These times are going to be 01:00am at the 
            very latest, and then I will set my alarm for an 08:30am wake-up time. If I follow these rules, this should give me 7 hours and 30 minutes of sleep per night, which even 
            though I currently average 8-10 hours, it is still healthy amount of sleep, and really I hope to cut my sleep down, again so that I can have more time being awake and productive. 
            If I go to sleep (i.e. lights out) at anytime before 01:00am, and wake up at around 08:30am(+- thirty minutes), then this will count as a success.
            Second, I will try my best to stick to the experiment for every night this week, however if I end up at a night out with my friends, in such an instance I will make myself 
            and exception to the challenge for that night. Some may say that&apos;s being too easy on myself, but I see these social events as valid exceptions since they are also in a different 
            way productive uses of my time. Third, I will, with 100% accuracy, post my bedtime and wake-up time on this website everyday this week, starting with tomorrow&apos;s post (posting 
            today&apos;s bedtime and tomorrow&apos;s wake-up time). By posting on the website, I hold myself to respecting the rules of the challenge, considering that in theory, anyone could be 
            reading the blog, and if they could speak, they could provide their thoughts on my successes or failures.
          </p>
          <p className="pb-4">
            And so, with the rules laid out in front of me here, it&apos;s game on. Good luck to me, and I hope something productive comes out of this experiment.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
