export default function Dashboard() {
    return (
        <div className="w-full h-full max-w-screen bg-base-200 grid grid-cols-[1fr_auto_1fr] place-items-center">
            <div className="grid grid-rows-[1fr_auto_1fr] col-start-1 h-full w-full box-border p-10">
                <PlayerCard />
                <div className="divider"></div>
                <QueueCard />
            </div>
            <div className="divider divider-horizontal pt-10 pb-10"></div>
            <div className="grid grid-rows-1 col-start-3 place-items-center h-full w-full p-10">
                <SomethingCard />
            </div>
        </div>
    );
}

const PlayerCard = () => {
    return (
        <div className="card bg-base-100 card-xl shadow-sm h-full w-full">
            <div className="card-body">
                <h2 className="card-title">Xlarge Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

const QueueCard = () => {
    return (
        <div className="card bg-base-100 card-xl shadow-sm h-full w-full">
            <div className="card-body">
                <h2 className="card-title">Xlarge Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

const SomethingCard = () => {
    return (
        <div className="card bg-base-100 card-xl shadow-sm h-full w-full">
            <div className="card-body">
                <h2 className="card-title">Xlarge Card</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}