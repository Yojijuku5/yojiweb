export default function Page() {
    return (
        <section>
            <div className="mb-12">
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    About Me
                </h1>
                <p className="mb-4">
                    {`Currently a recently graduated enthusiastic and confident Master’s Computer Science student studying at Newcastle University with a focus on Games Engineering. 
                    Proven ability to communicate and work in a team effectively, as demonstrated through previous work and academic experience. 
                    In addition, is competent in multiple programming languages including C++ and makes use of them frequently.`}
                </p>
            </div>
            <div>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    Current Projects
                </h1>
                <h2 className="mb-4 text-xl font-semibold tracking-tighter">
                    Tatsujin Radio
                </h2>
                <p className="mb-4">
                    {`Link to site here: (Release Soon)`}
                </p>
                <p className="mb-4">
                    {`Media Player/Collection of all original music tracks from the game Taiko no Tatsujin.`}
                </p>
                <h2 className="mb-4 text-xl font-semibold tracking-tighter">
                    Unnamed Game
                </h2>
                <p className="mb-4">
                    {`Closed source project (Job Recruiters can ask for a demo/code)`}
                </p>
                <p className="mb-4">
                    {`Unity Game. Aiming for a roguelike-rpg spin on the classic Minesweeper game.`}
                </p>
            </div>
        </section>
    )
}