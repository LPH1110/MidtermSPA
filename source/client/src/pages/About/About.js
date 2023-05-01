import React from 'react';

const members = [
    {
        id: 0,
        name: 'Lê Phú Hào',
        thumbnail: 'https://res.cloudinary.com/dzzv49yec/image/upload/v1670050964/taskbox-assets/avatar1_ilyzbz.jpg',
        title: 'Founder, Engineer, Designer',
    },
    {
        id: 1,
        name: 'Trần Quang Luân',
        thumbnail: 'https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar2_fssdbw.jpg',
        title: 'Business Analysis',
    },
    {
        id: 2,
        name: 'Đinh Hoàng Phúc',
        thumbnail: 'https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar3_clufwp.jpg',
        title: 'Business Analysis',
    },
    {
        id: 3,
        name: 'Lương Đức Bằng',
        thumbnail: 'https://res.cloudinary.com/dzzv49yec/image/upload/v1670092118/taskbox-assets/avatar4_n1nbbs.jpg',
        title: 'Operations',
    },
];

function About() {
    return (
        <section className="flex flex-col items-center space-y-24">
            <section className="w-[32rem] text-justify space-y-8">
                <h1 className="text-center font-semibold text-3xl">About BetterTrip</h1>
                <div className="space-y-5">
                    <p>
                        BetterTrip is an independent business, based in TDTU HCMC, VietNam. We are building a strong
                        platform for customers to plan their trips easily.
                    </p>
                    <p>
                        We simply want to build the best and most useful product out there, and provide exceptional
                        personal support. You get to talk directly to us, the founders and owners. We will personally
                        vouch for your happiness as a customer.
                    </p>
                    <p>
                        We're lean, profitable and sustainable, and not beholden to any investors. We're in this for the
                        long haul.
                    </p>
                    <p>
                        If you have any questions, or if we can do anything to help you, please
                        <a className="ml-1 text-blue-500 hover:text-blue-400 ease duration-200" href="#">
                            get in touch
                        </a>
                    </p>
                    <p>Thank you for using BetterTrip!</p>
                    <p>
                        <a className="mr-1 text-blue-500 hover:text-blue-400 ease duration-200" href="#">
                            Lê Phú Hào
                        </a>
                        , founder of BetterTrip
                    </p>
                </div>
            </section>
            <section>
                <h1 className="text-center font-semibold text-3xl">Team</h1>
                <div className="grid grid-cols-4 gap-x-8">
                    {members.map((member) => (
                        <div class="p-2 space-y-3 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full">
                                <img className="rounded-full" src={member.thumbnail} alt="member 1" />
                            </div>
                            <div className="text-center">
                                <h4 className="font-semibold">{member.name}</h4>
                                <p className="text-slate-600">{member.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section class="space-y-8">
                <h1 className="text-center font-semibold text-3xl">Where is BetterTrip</h1>
                <p>We're headquartered in TDTU HCMC, with team members based in VietNam.</p>
            </section>
        </section>
    );
}

export default About;
