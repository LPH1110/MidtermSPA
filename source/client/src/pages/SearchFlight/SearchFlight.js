import { useParams, useNavigate } from 'react-router-dom';
import { UserGroupIcon, ArrowLongRightIcon, FunnelIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames/bind';
import styles from './SearchFlight.module.scss';
import { useEffect, useState } from 'react';

import { useStore, actions } from '~/store';
import { Button, ListBoxPopper, FlightTicket, ResultNotFound } from '~/components';
import axios from 'axios';
import { currencyFormatter } from '~/helpers';

const cx = classNames.bind(styles);

const filters = [
    {
        id: 0,
        items: [
            {
                id: 0,
                title: 'Ascending price',
            },
            {
                id: 1,
                title: 'Descending price',
            },
            {
                id: 2,
                title: 'All',
            },
        ],
    },
];

function SearchFlight() {
    const [state, dispatch] = useStore();
    const { ticketType } = useParams();
    const panel = state[`${ticketType}Panel`];
    const { name, source, departureDate, destination, passengers } = panel;
    const [flightTickets, setFlightTickets] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [resultNotFound, setResultNotFound] = useState(false);
    const [currentChosenTicket, setCurrentChosenTicket] = useState({});
    const [ticketAmount, setTicketAmount] = useState(0);
    const navigate = useNavigate();

    const placeOrder = () => {
        if (ticketAmount !== 0) {
            console.log(currentChosenTicket);
            dispatch(actions.setChosenFlightTicket(currentChosenTicket));
            navigate('/booking/flight');
        }
    };

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const flights = await axios.post('http://localhost:3001/flights', {
                    source,
                    destination,
                    departureDate,
                });

                return flights;
            } catch (e) {
                console.error(e);
            }
        };

        setLoading(true);

        fetchFlights().then((res) => {
            let flights = res.data;
            if (flights.length !== 0) {
                flights.forEach(async (flight) => {
                    let ticket = await axios.post('http://localhost:3001/flight-tickets', {
                        FlightID: flight.FlightID,
                    });

                    let { _id, ...props } = ticket.data;

                    Object.assign(flight, { ...props });
                });

                setFlightTickets(flights);
            } else {
                setResultNotFound(true);
            }
        });
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <section className="pt-4 pb-[10rem] relative">
            {/* Header */}
            <section className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Your flight results for "{name}"</h1>
                    <p className="py-1 flex items-center text-slate-600 text-lg">
                        <span className="mr-3">
                            <UserGroupIcon className="w-6 h-6" />
                        </span>
                        {passengers.adult > 0 && `${passengers.adult} adult`}
                        {passengers.child > 0 && `, ${passengers.child} child`}
                        {passengers.babies > 0 && `, ${passengers.babies} babies`}
                    </p>
                </div>
                <div>
                    <Button
                        size="medium"
                        className="rounded-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-white"
                    >
                        Change searchings
                    </Button>
                </div>
            </section>
            {/* Airline */}
            <section className="my-4 p-4 bg-sky-500 text-white rounded-xl">
                <h4 className="text-lg">Friday, 25/11/2022</h4>
                <p className="font-semibold flex items-center text-xl">
                    {source}
                    <span>
                        <ArrowLongRightIcon className="mx-4 w-8 h-8" />
                    </span>
                    {destination}
                </p>
            </section>
            {/* Filter */}
            <section className="my-4 rounded-xl p-4 shadow-[0_0_20px_0_rgba(148,163,184,0.3)] flex items-center justify-between">
                <div>
                    <Button
                        size="small"
                        className="text-lg ease-in-out duration-200 rounded-full border border-sky-400 text-sky-400 hover:text-sky-300 hover:border-sky-300 "
                    >
                        <span className="mr-2">
                            <FunnelIcon className="w-5 h-5" />
                        </span>
                        Filters
                    </Button>
                </div>
                <div className="flex items-center">
                    <span className="text-lg">According: </span>
                    <div>
                        {filters.map((filter) => (
                            <ListBoxPopper key={filter.id} data={filter} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Tickets */}
            <section>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    flightTickets.map((ticket) => (
                        <FlightTicket
                            setCurrentChosenTicket={setCurrentChosenTicket}
                            setTicketAmount={setTicketAmount}
                            passengers={passengers}
                            key={ticket.TicketID}
                            data={panel}
                            ticket={ticket}
                        />
                    ))
                )}
                {resultNotFound && <ResultNotFound />}
            </section>
            <div className="rounded-lg max-w-full w-[82.5rem] px-3 py-6 shadow-[0_0_20px_0_rgba(148,163,184,0.3)] bg-white flex items-center justify-between fixed bottom-[5%] left-1/2 -translate-x-1/2">
                <div className="py-1">
                    <h5 className="font-semibold text-lg flex items-center">
                        Total cost:
                        <p className="text-red-400 ml-2">
                            {currentChosenTicket.totalTicketCost
                                ? currencyFormatter.format(currentChosenTicket.totalTicketCost)
                                : 0}
                        </p>
                    </h5>
                    <p className="text-slate-500">(Tax and fee are included in the cost)</p>
                </div>
                <div className="flex items-center">
                    <p className="mr-4 text-slate-500">
                        Chose <span className="mx-1 font-semibold text-red-400">{ticketAmount}/1</span>
                        flights
                    </p>
                    <Button
                        size="medium"
                        type="button"
                        onClick={placeOrder}
                        className={
                            ticketAmount === 0
                                ? 'font-semibold text-slate-500 bg-slate-300 ease-in-out duration-200 rounded-full'
                                : 'font-semibold text-white bg-orange-500 hover:bg-orange-400 ease-in-out duration-200 rounded-full'
                        }
                    >
                        Place ticket
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default SearchFlight;
