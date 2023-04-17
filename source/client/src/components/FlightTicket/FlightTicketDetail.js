import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { PlaneDepartureIcon, PlaneLandingIcon } from '~/assets/images/icons';
import axios from 'axios';
import { currencyFormatter } from '~/helpers';

function FlightTicketDetail({ chosen, setTicketAmount, setCurrentChosenTicket, data, diffMinutes, passengers }) {
    const { adult, child, babies } = passengers;
    const [airports, setAirports] = useState({
        departureAirport: {
            _id: '',
            AirportID: '',
            AirportName: '',
        },
        landingAirport: {
            _id: '',
            AirportID: '',
            AirportName: '',
        },
    });

    const adultCost = () => (adult > 0 ? data.VND * adult : 0);
    const childCost = () => (child > 0 ? data.VND * child - 200000 : 0);
    const babiesCost = () => (babies > 0 ? data.VND * babies - 500000 : 0);

    const totalTicketCost = () => adultCost() + childCost() + babiesCost();

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const airports = await axios.post('http://localhost:3001/airports', { AirlineID: data.AirlineID });
                setAirports(airports.data);
            } catch (e) {
                console.error("Can't get airports by airlineID: " + data.AirlineID);
            }
        };

        fetchAirports();

        if (chosen) {
            setCurrentChosenTicket({
                ...data,
                ...airports,
                adultCost: adultCost(),
                childCost: childCost(),
                babiesCost: babiesCost(),
                totalTicketCost: totalTicketCost(),
                ...passengers,
            });
            setTicketAmount(1);
        } else {
            setCurrentChosenTicket({});
            setTicketAmount(0);
        }
    }, [chosen]);

    return (
        <section className="p-2 my-2 grid grid-cols-5 rounded-lg w-full bg-white shadow-[0_0_20px_0_rgba(148,163,184,0.3)]">
            <section className="col-span-2">
                <h4 className="text-lg text-sky-500 font-semibold p-2">Flight detail</h4>
                <div className="flex items-center">
                    <div className="w-32 h-6 p-2 relative">
                        <img className="max-w-[80%]" src={data.Thumbnail} />
                    </div>
                    <div>
                        <div className="font-semibold text-lg flex items-center">
                            <h5>{data.BrandName}</h5>
                            <p className="ml-4">QH1320</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Ticket class: {data.TicketClassName} | Airbus A320 320</p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    {/* Source */}
                    <div className="grid grid-cols-3">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <PlaneDepartureIcon className="w-6 h-6 text-sky-500" />
                            </div>
                            <div>
                                <h5 className="font-semibold">{format(parseISO(data.DepartureTime), 'HH:mm')}</h5>
                                <p>{data.FlyDate}</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h5 className="font-semibold">{data.source}</h5>
                            <p>{airports.departureAirport.AirportName}</p>
                        </div>
                    </div>
                    <div className="flex items-center my-3">
                        <div className="mr-4 w-6 h-8 flex justify-center">
                            <span className="w-px h-full bg-sky-500"></span>
                        </div>
                        <p>{diffMinutes(parseISO(data.LandingTime), parseISO(data.DepartureTime))} minutes</p>
                    </div>
                    {/* Destination */}
                    <div className="grid grid-cols-3">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <PlaneLandingIcon className="w-6 h-6 text-sky-500" />
                            </div>
                            <div>
                                <h5 className="font-semibold">{format(parseISO(data.LandingTime), 'HH:mm')}</h5>
                                <p>{data.FlyDate}</p>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <h5 className="font-semibold">{data.destination}</h5>
                            <p>{airports.landingAirport.AirportName}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="col-span-3">
                <h4 className="text-lg text-sky-500 font-semibold p-2">Ticket detail</h4>
                <div className="p-2">
                    <table className="w-full">
                        <tr>
                            <th className="p-1.5 text-left">Passenger</th>
                            <th className="p-1.5">Quantity</th>
                            <th className="p-1.5">Ticket price</th>
                            <th className="p-1.5 text-right">Tax and Fee</th>
                            <th className="p-1.5 text-right">Total</th>
                        </tr>
                        {adult > 0 && (
                            <tr className="text-center">
                                <td className="p-1.5 text-left">Adult</td>
                                <td className="p-1.5">{adult}</td>
                                <td className="p-1.5 font-semibold text-sky-500">
                                    {currencyFormatter.format(data.VND)}
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    0 <span className="underline">đ</span>
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    {currencyFormatter.format(adultCost())}
                                </td>
                            </tr>
                        )}
                        {child > 0 && (
                            <tr className="text-center">
                                <td className="p-1.5 text-left">Child</td>
                                <td className="p-1.5">{child}</td>
                                <td className="p-1.5 font-semibold text-sky-500">
                                    {currencyFormatter.format(data.VND - 200000)}
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    0 <span className="underline">đ</span>
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    {currencyFormatter.format(childCost())}
                                </td>
                            </tr>
                        )}
                        {babies > 0 && (
                            <tr className="text-center">
                                <td className="p-1.5 text-left">babies</td>
                                <td className="p-1.5">{babies}</td>
                                <td className="p-1.5 font-semibold text-sky-500">
                                    {currencyFormatter.format(data.VND - 500000)}
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    0 <span className="underline">đ</span>
                                </td>
                                <td className="p-1.5 text-right font-semibold text-sky-500">
                                    {currencyFormatter.format(babiesCost())}
                                </td>
                            </tr>
                        )}
                    </table>
                </div>
                <div className="p-2 flex justify-end">
                    <h5 className="flex items-center text-xl font-semibold text-slate-600">
                        Total cost:
                        <p className="text-red-500 ml-4">{currencyFormatter.format(totalTicketCost())}</p>
                    </h5>
                </div>
            </section>
        </section>
    );
}

export default FlightTicketDetail;
