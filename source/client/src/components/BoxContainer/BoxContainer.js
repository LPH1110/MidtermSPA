import React from 'react';
import { Tab } from '@headlessui/react';

import { FlightPanel, HotelPanel } from './components';
import NotFound from '../NotFound';

const tabs = [
    {
        id: 0,
        title: 'Flight',
    },
    {
        id: 1,
        title: 'Hotels',
    },
    {
        id: 2,
        title: 'Train ticket',
    },
];

function BoxContainer() {
    return (
        <section className="">
            <Tab.Group>
                <Tab.List>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            className="ui-selected:border-sky-500 outline-none border-b-2 border-transparent mr-2 px-6 min-h-[2.5rem] text-lg rounded-lg hover:bg-slate-200 ease-in-out duration-200"
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="outline-none mt-4 shadow-[0_0_20px_0_rgba(148,163,184,0.2)] rounded-lg px-4 pt-4 pb-6">
                    <Tab.Panel>
                        <FlightPanel />
                    </Tab.Panel>
                    <Tab.Panel>
                        <HotelPanel />
                    </Tab.Panel>
                    <Tab.Panel>
                        <NotFound />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
}

export default BoxContainer;
