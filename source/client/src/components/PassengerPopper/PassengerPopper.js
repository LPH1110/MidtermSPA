import { useState } from 'react';
import { PlusIcon, MinusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './PassengerPopper.module.scss';

import Button from '../Button';
import Tooltip from '../Tooltip';

const cx = classNames.bind(styles);

const passengers = [
    {
        id: 0,
        title: 'Adult',
        description: 'From 12 years old',
        qty: 1,
    },
    {
        id: 1,
        title: 'Child',
        rightIcon: (
            <Tooltip message="Child must have at least an accompanied adult over 18">
                <QuestionMarkCircleIcon className="text-sky-500 w-5 h-5" />
            </Tooltip>
        ),
        description: 'From 2 - 12 years old',
        qty: 0,
    },
    {
        id: 2,
        title: 'Babies',
        rightIcon: (
            <Tooltip message="Child must have at least an accompanied adult over 18">
                <QuestionMarkCircleIcon className="text-sky-500 w-5 h-5" />
            </Tooltip>
        ),
        description: 'Under 2 years old',
        qty: 0,
    },
];

function PassengerPopper({ onDispatch, prop }) {
    const [passengersQty, setPassengersQty] = useState({
        adult: 1,
        child: 0,
        babies: 0,
    });

    const handleAddPassengersQty = (key) => {
        if (passengersQty[key] < 9) {
            setPassengersQty((prev) => {
                let next = { ...prev };
                next[key] += 1;
                return next;
            });
        }
    };

    const handleMinusPassengersQty = (key) => {
        if (passengersQty[key] > 0) {
            setPassengersQty((prev) => {
                let next = { ...prev };
                next[key] -= 1;
                return next;
            });
        }
    };

    const handleDispatch = () => {
        onDispatch(prop, { type: 'passengers', payload: passengersQty });
    };

    return (
        <section className="py-3">
            {passengers.map((passenger) => (
                <div key={passenger.id} className={cx('passenger-item', 'flex justify-between')}>
                    <div className="">
                        <h4 className="flex items-center font-semibold text-lg">
                            {passenger.title}
                            <span className="ml-2">{passenger.rightIcon}</span>
                        </h4>
                        <span className="text-md text-slate-500">{passenger.description}</span>
                    </div>
                    <div className="flex items-center">
                        <Button onClick={() => handleMinusPassengersQty(passenger.title.toLowerCase())} type="button">
                            <MinusIcon className="text-sky-500 w-6 h-6 hover:text-sky-400 ease-in-out duration-200" />
                        </Button>
                        <PassengerQty qty={passengersQty[passenger.title.toLowerCase()]} />
                        <Button onClick={() => handleAddPassengersQty(passenger.title.toLowerCase())} type="button">
                            <PlusIcon className="text-sky-500 w-6 h-6 hover:text-sky-400 ease-in-out duration-200" />
                        </Button>
                    </div>
                </div>
            ))}
            <div className="flex justify-end mt-2">
                <Button
                    type="button"
                    size="medium"
                    onClick={handleDispatch}
                    className="bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 rounded-full text-slate-100"
                >
                    Ok
                </Button>
            </div>
        </section>
    );
}

function PassengerQty({ qty }) {
    return <p className="w-12 text-center">{qty}</p>;
}

export default PassengerPopper;
