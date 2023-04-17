import React, { useState } from 'react';
import { PlusIcon, MinusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './RoomPopper.module.scss';

import Button from '../Button';
import Tooltip from '../Tooltip';

const cx = classNames.bind(styles);

function RoomPopper() {
    const [rooms, setRooms] = useState([
        {
            number: 1,
            passengers: [
                {
                    id: 0,
                    title: 'Adult',
                    description: 'From 18 years old',
                },
                {
                    id: 1,
                    title: 'Child',
                    rightIcon: (
                        <Tooltip message="Child must have at least an accompanied adult over 18">
                            <QuestionMarkCircleIcon className="text-sky-500 w-5 h-5" />
                        </Tooltip>
                    ),
                    description: 'Under 17 years old',
                },
            ],
        },
    ]);

    const handleRemoveRoom = (e, roomNumber) => {
        e.stopPropagation();

        setRooms((prev) => {
            const next = prev.filter((room) => room.number !== roomNumber);
            // next.forEach((room, index) => (room.number = index + 1));
            return next;
        });
    };

    const handleAddMoreRoom = () => {
        if (rooms.length < 9) {
            setRooms((prev) => {
                const next = [
                    ...prev,
                    {
                        number: prev[prev.length - 1].number + 1,
                        passengers: [
                            {
                                id: 0,
                                title: 'Adult',
                                description: 'From 18 years old',
                            },
                            {
                                id: 1,
                                title: 'Child',
                                rightIcon: (
                                    <Tooltip message="Child must have at least an accompanied adult over 18">
                                        <QuestionMarkCircleIcon className="text-sky-500 w-5 h-5" />
                                    </Tooltip>
                                ),
                                description: 'Under 17 years old',
                            },
                        ],
                    },
                ];
                return next;
            });
        }
    };

    return (
        <section className="py-3">
            {rooms.map((room) => (
                <div key={room.number} className={cx('room')}>
                    <div className="flex items-center justify-between">
                        <h4 className="text-sky-500 text-xl font-semibold">Room {room.number}</h4>
                        <span>
                            {rooms.length > 1 && (
                                <Button
                                    className="text-red-500 hover:underline hover:text-red-400 ease-in-out duration-200"
                                    type="button"
                                    onClick={(e) => handleRemoveRoom(e, room.number)}
                                >
                                    undo
                                </Button>
                            )}
                        </span>
                    </div>
                    {room.passengers.map((passenger) => (
                        <div key={passenger.id} className={cx('passenger-item', 'flex justify-between')}>
                            <div>
                                <h4 className="flex items-center font-semibold text-lg">
                                    {passenger.title}
                                    <span className="ml-2">{passenger.rightIcon}</span>
                                </h4>
                                <span className="text-md text-slate-500">{passenger.description}</span>
                            </div>
                            <div className="flex items-center">
                                <Button type="button">
                                    <MinusIcon className="text-sky-500 w-6 h-6 hover:text-sky-400 ease-in-out duration-200" />
                                </Button>
                                <p className="px-6">1</p>
                                <Button type="button">
                                    <PlusIcon className="text-sky-500 w-6 h-6 hover:text-sky-400 ease-in-out duration-200" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className="mt-4">
                <Button
                    className="text-slate-400 border border-slate-400 rounded-full hover:border-sky-400 hover:text-sky-400 ease-in-out duration-200"
                    size="medium"
                    type="button"
                    onClick={handleAddMoreRoom}
                >
                    More rooms
                </Button>
            </div>
        </section>
    );
}

export default RoomPopper;
