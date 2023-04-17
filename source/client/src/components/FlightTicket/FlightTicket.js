import { Button } from '~/components';
import classNames from 'classnames/bind';
import { format, parseISO } from 'date-fns';
import styles from './FlightTicket.module.scss';
import { useState, memo } from 'react';
import FlightTicketDetail from './FlightTicketDetail';
import { currencyFormatter } from '~/helpers';

const cx = classNames.bind(styles);

function FlightTicket({ setCurrentChosenTicket, setTicketAmount, data, ticket, passengers }) {
    const [showTicketDetail, setShowTicketDetail] = useState(false);
    const { source, destination, departureDate } = data;
    const [chosen, setChosen] = useState(false);
    const [ticketDetail, setTicketDetail] = useState({});

    const diffMinutes = (d1, d2) => {
        let diff = (d1.getTime() - d2.getTime()) / 1000;
        diff /= 60;
        return Math.abs(Math.round(diff));
    };

    const handleChooseTicket = () => {
        setChosen(!chosen);
        if (!chosen) {
            setShowTicketDetail(true);
        } else {
            setCurrentChosenTicket({});
            setTicketAmount(0);
            setShowTicketDetail(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className="relative hover:shadow-[0_6px_20px_0_rgba(148,163,184,0.6)] shadow-[0_6px_20px_0_rgba(148,163,184,0.4)] rounded-lg flex items-center">
                <div className="px-3 flex items-center justify-center w-[7rem] h-[4.5rem] relative">
                    <img src="https://phuongviethcm.com/wp-content/uploads/2016/08/vietjet-air.png?fbclid=IwAR3aWpDAqaQyQUYxAq1Ju9eZkN04QwyeBGyDYjpTIbizNF1KzovRuX_nhTY" />
                </div>
                <div className="p-3 flex-1 flex items-center justify-between">
                    <div className="min-w-[10rem]">
                        <h4 className="text-xl font-semibold">{ticket.BrandName}</h4>
                        <p className="text-slate-500">{ticket.TicketClassName}</p>
                    </div>
                    <div>
                        <p className="font-semibold">QH1320</p>
                    </div>
                    <div className="text-center">
                        <p>{departureDate}</p>
                        <h4 className="text-2xl font-semibold">{format(parseISO(ticket.DepartureTime), 'HH:mm')}</h4>
                        <p className="font-semibold text-slate-800">{source}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-slate-500">
                            {diffMinutes(parseISO(ticket.LandingTime), parseISO(ticket.DepartureTime))} minutes
                        </p>
                        <div>
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='170.708' height='25.012' viewBox='0 0 170.708 25.012'%3E %3Cg id='direct-flight' transform='translate(-898 -859.84)'%3E %3Cpath id='Path_18192' data-name='Path 18192' d='M26.652.962,17.587,5.189,8.728,0,6.362,1.1,12.483,7.57,6.716,10.258,1.9,7.844,0,9.1l6.018,4.591,11.473-3.8,13.65-6.366a1.049,1.049,0,0,0,.348-1.658A4.228,4.228,0,0,0,26.652.962Z' transform='matrix(0.94, 0.342, -0.342, 0.94, 969.723, 860.481)' fill='none' stroke='%23ffa825' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E %3Cg id='Group_25361' data-name='Group 25361' transform='translate(898 858.405)'%3E %3Cpath id='Path_18449' data-name='Path 18449' d='M2.5,0A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z' transform='translate(38.517 14.585)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(50.582 12.259)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(27.862 15.361)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(17.843 16.136)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(8.53 16.912)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(0 17.687)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3Cg id='Group_25362' data-name='Group 25362' transform='translate(1011 870.664)'%3E %3Cpath id='Path_18449-2' data-name='Path 18449' d='M2.5,0a2.5,2.5,0,1,0,2.5,2.5A2.5,2.5,0,0,0,2.5,0Z' transform='translate(14.183 2.326)' fill='%23ffa800' opacity='0.8'/%3E %3Ccircle id='Ellipse_917-2' data-name='Ellipse 917' cx='3.563' cy='3.563' r='3.563' transform='translate(0 0)' fill='%23ffa800'/%3E %3Ccircle id='Ellipse_919-2' data-name='Ellipse 919' cx='1.764' cy='1.764' r='1.764' transform='translate(26.318 3.102)' fill='%23ffa800' opacity='0.65'/%3E %3Ccircle id='Ellipse_920-2' data-name='Ellipse 920' cx='1.446' cy='1.446' r='1.446' transform='translate(36.973 3.877)' fill='%23ffa800' opacity='0.5'/%3E %3Ccircle id='Ellipse_921-2' data-name='Ellipse 921' cx='1.093' cy='1.093' r='1.093' transform='translate(46.992 4.653)' fill='%23ffa800' opacity='0.35'/%3E %3Ccircle id='Ellipse_922-2' data-name='Ellipse 922' cx='0.706' cy='0.706' r='0.706' transform='translate(56.297 5.428)' fill='%23ffa800' opacity='0.2'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E" />
                        </div>
                        <p className="text-slate-500">Straight flight</p>
                    </div>
                    <div className="text-center">
                        <p>{departureDate}</p>
                        <h4 className="text-2xl font-semibold">{format(parseISO(ticket.LandingTime), 'HH:mm')}</h4>
                        <p className="font-semibold text-slate-800">{destination}</p>
                    </div>
                    <div>
                        <Button
                            size="small"
                            type="button"
                            onClick={() => setShowTicketDetail(!showTicketDetail)}
                            className="text-sky-500 hover:underline hover:text-sky-400 ease duration-200"
                        >
                            Details
                        </Button>
                    </div>
                    <div className="flex flex-col items-end">
                        <h4 className="text-xl text-red-400 font-semibold mb-2">
                            {currencyFormatter.format(ticket.VND)}
                        </h4>
                        {!chosen ? (
                            <Button
                                size="small"
                                type="button"
                                onClick={handleChooseTicket}
                                className="text-slate-100 rounded-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200"
                            >
                                Choose
                            </Button>
                        ) : (
                            <Button
                                size="small"
                                type="button"
                                onClick={handleChooseTicket}
                                className="text-slate-100 rounded-full bg-green-600 hover:bg-green-500 ease-in-out duration-200"
                            >
                                Discard
                            </Button>
                        )}
                    </div>
                </div>
                {/* Details */}
            </div>
            {showTicketDetail && (
                <FlightTicketDetail
                    chosen={chosen}
                    setCurrentChosenTicket={setCurrentChosenTicket}
                    setTicketAmount={setTicketAmount}
                    passengers={passengers}
                    data={{ ...ticket, source, destination }}
                    diffMinutes={diffMinutes}
                />
            )}
        </div>
    );
}

export default FlightTicket;
