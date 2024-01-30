export default function Home() {
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
      </div>
    </main>
  )
}

/*
        <div className="flex-auto h-10 mx-4">
          <h1 className="text-3xl bg-blue-500">Date 2</h1>
        </div>
        <div className="mx-4">
          <p className="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tristique sem, 
            condimentum egestas augue. Vestibulum tincidunt dignissim lobortis. Aliquam erat volutpat. 
            Nam arcu quam, semper commodo laoreet vel, aliquet eget tortor. Proin pellentesque efficitur nunc ac porta. 
            Cras vulputate ac dolor vel gravida. Sed eget libero a sem tincidunt convallis. Duis sit amet dolor id arcu pretium finibus. 
            Morbi non convallis neque. Phasellus accumsan feugiat risus.
          </p>
          <p className="pb-4">
            Cras vitae felis non est efficitur fermentum sit amet vitae nibh. 
            Suspendisse porta erat et ex pretium, ut finibus orci feugiat. Sed pellentesque non urna vel convallis. 
            Mauris sagittis mattis felis, in molestie erat commodo in. Morbi eu quam ac lorem bibendum sodales ac sit amet odio. 
            Nullam varius leo et turpis iaculis, at iaculis ipsum dignissim. Proin sit amet massa nec tortor sodales dapibus. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor, odio in mattis euismod, magna mi pretium metus, 
            non mollis eros est nec urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Nullam magna lectus, maximus a nisi eu, auctor mollis lacus.
          </p>
        </div>
*/
