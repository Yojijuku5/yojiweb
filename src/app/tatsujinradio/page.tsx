import Player from './player'

export const metadata = {
    title: 'Radio',
    description: 'For now, testing...'
}

export default function Page() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Radio</h1>
            <Player />
        </section>
    )
}