import { Fragment } from 'react';
import { Home, Flight, SearchFlight, Booking, Payment, Signin, Signup, About, NotFound } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/flight', component: Flight, layout: DefaultLayout },
    { id: 2, path: '/results/:ticketType', component: SearchFlight, layout: HeaderOnly },
    { id: 3, path: '/booking/:type', component: Booking, layout: HeaderOnly },
    { id: 4, path: '/booking/payment', component: Payment, layout: HeaderOnly },
    { id: 5, path: '/signin', component: NotFound, layout: Fragment },
    { id: 6, path: '/signup', component: NotFound, layout: Fragment },
    { id: 7, path: '/about', component: About, layout: DefaultLayout },
    { id: 8, path: '/404', component: NotFound, layout: HeaderOnly },
];

export { publicRoutes };
