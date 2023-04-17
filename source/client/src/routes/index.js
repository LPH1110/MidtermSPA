import { Home, Flight, SearchFlight, Booking, Payment } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/flight', component: Flight, layout: DefaultLayout },
    { id: 2, path: '/results/:ticketType', component: SearchFlight, layout: HeaderOnly },
    { id: 3, path: '/booking/:type', component: Booking, layout: HeaderOnly },
    { id: 3, path: '/booking/payment', component: Payment, layout: HeaderOnly },
];

export { publicRoutes };
