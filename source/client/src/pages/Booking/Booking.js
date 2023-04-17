import React from 'react';
import { useParams } from 'react-router-dom';

import { BookingFlight, Payment } from './components';

function Booking() {
    const { type } = useParams();

    return (
        <section className="pt-4">
            {type === 'flight' && <BookingFlight />}
            {type === 'payment' && <Payment />}
        </section>
    );
}

export default Booking;
