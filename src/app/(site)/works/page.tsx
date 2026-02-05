export const metadata = {
    title: 'Works',
    description: 'Some things I have worked on in the past.'
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Previous Works
            </h1>
            <p className="mb-12">
                {'Here are some things that I have worked on in the past, either for university or in my own time. This should highlight my skills and wide range of expertise with multiple languages and software.'}
            </p>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                OpenGL Volcano
            </h1>
            <p className="mb-4">
                {'A volcano created using OpenGL. Demonstrates OpenGL proficiency, with multiple scenes and screen shaders/effects.'}
            </p>
            <div className="mb-12 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Yojijuku5/OpenGLVolcano"
                >
                    github code here
                </a>
            </div>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                NCL-CSC8503
            </h1>
            <p className="mb-4">
                {'A mini game programmed with focus on non-visual techniques, such as physics and AI. Made as part of my university studies (hence the project name)'}
            </p>
            <div className="mb-12 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Yojijuku5/NCL-CSC8503"
                >
                    github code here
                </a>
            </div>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Masters Team Project
            </h1>
            <p className="mb-4">
                {'A small game made as a group of 8. I worked on the level maps and general gameplay things like timers, items, and collectible spawning (plus others). You can have a look at my commits on the repo to find out more. Made as part of my university studies (hence the project name).'}
            </p>
            <div className="mb-12 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/johnnileus/MastersTeamProject"
                >
                    github code here
                </a>
            </div>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Maze Generator & Solver
            </h1>
            <p className="mb-4">
                {'Creates a maze and provides the shortest escape route. Command Line application. Made as part of my university studies.'}
            </p>
            <div className="mb-12 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Yojijuku5/MazeGeneration"
                >
                    github code here
                </a>
            </div>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Balatro Modding
            </h1>
            <p className="mb-4">
                {'Modded the game "Balatro" to add a few custom joker cards. Might not work anymore since the modding clients have updated and I haven\'t updated the mod (and probably never will...). It DID work when I was playing the game a few years ago.'}
            </p>
            <div className="mb-12 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Yojijuku5/more-jokers-balatro"
                >
                    github code here
                </a>
            </div>

            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                RF.MoreKeyboardInputs
            </h1>
            <p className="mb-4">
                {'VERY simple mod that adds a small QoL feature to the game "Taiko no Tatsujin: Rhythm Festival" (PC Version). Allows the user to use another set of keys to register inputs since the vanilla game only allows one key for each input. This is made to work in tandem with the wider game mod manager application (so you set the controls through the mod manager settings).'}
            </p>
            <div className="mb-4 h-7">
                <a
                    className="inline-flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/Yojijuku5/RF.MoreKeyboardInputs"
                >
                    github code here
                </a>
            </div>
        </section>
    )
}