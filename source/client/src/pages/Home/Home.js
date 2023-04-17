import { useEffect } from 'react';
import { BoxContainer } from '~/components';

function Home() {
    return (
        <section className="">
            {/* Landing section */}
            <div className="grid grid-cols-2">
                <div className="animate-slideIn flex flex-col items-start justify-center">
                    <h1 className="mb-4 text-5xl font-semibold">
                        Discover the best places to enjoy your next vacation
                    </h1>
                    <p className="text-lg">We always make our customer happy by providing many choices</p>
                </div>
                <div className="animate-scrollIn flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dup2fxrco/image/upload/v1668565049/bettertrip/landing-bg-transparent_bwbd5r.png"
                        alt="landing picture"
                    />
                </div>
            </div>
            {/* Box container */}
            <BoxContainer />
        </section>
    );
}

export default Home;
