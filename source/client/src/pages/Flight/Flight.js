import { useEffect } from 'react';
import { Tab } from '@headlessui/react';

import { flightPanels } from '~/components';

const { OneWayPanel, ReturnPanel, MultiFlightPanel } = flightPanels;

const tabs = [
    {
        id: 0,
        title: 'One way',
    },
    {
        id: 1,
        title: 'Return',
    },
    {
        id: 2,
        title: 'Many cities',
    },
];

function Flight() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <section>
            <h1 className="text-2xl font-semibold py-6">Find your flight today!</h1>
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
                            <OneWayPanel />
                        </Tab.Panel>
                        <Tab.Panel>
                            <ReturnPanel />
                        </Tab.Panel>
                        <Tab.Panel>
                            <MultiFlightPanel />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </section>
        </section>
    );
}

export default Flight;
