import Player from './player'

export const metadata = {
    title: 'Radio',
    description: 'For now, testing...'
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-4xl text-center mb-8 tracking-tighter">Tatsujin Radio</h1>
            <Player />
        </section>
    )
}