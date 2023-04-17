import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

import { MultiFlightPanel, OneWayPanel, ReturnPanel } from './panels';

const types = [
    {
        id: 0,
        title: 'One way',
        value: 'oneway',
    },
    {
        id: 1,
        title: 'Return',
        value: 'return',
    },
    {
        id: 2,
        title: 'Multi cities',
        value: 'multi',
    },
];

function FlightPanel() {
    const [ticketType, setTicketType] = useState('oneway');

    return (
        <section>
            <RadioGroup className="flex text-lg" value={ticketType} onChange={setTicketType}>
                {types.map((type) => (
                    <RadioGroup.Option className=" mr-4 mb-2 p-1 cursor-pointer" key={type.id} value={type.value}>
                        {({ checked }) => {
                            return (
                                <span
                                    className={
                                        checked
                                            ? 'ease-in-out duration-200 text-sky-500'
                                            : 'hover:text-slate-500 ease-in-out duration-200'
                                    }
                                >
                                    {type.title}
                                </span>
                            );
                        }}
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
            {ticketType === 'oneway' && <OneWayPanel />}
            {ticketType === 'return' && <ReturnPanel />}
            {ticketType === 'multi' && <MultiFlightPanel />}
        </section>
    );
}

export default FlightPanel;
