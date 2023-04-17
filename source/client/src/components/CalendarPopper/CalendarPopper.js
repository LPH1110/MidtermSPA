import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import './calendar-overrides.scss';

function CalendarPopper({ onDispatch, prop }) {
    const [date, setDate] = useState(new Date());

    const handleSelect = (date) => {
        onDispatch(prop, { type: 'date', payload: format(date, 'dd-MM-yyyy') });
        setDate(date);
    };
    return <Calendar minDate={new Date()} date={date} onChange={handleSelect} />;
}

export default CalendarPopper;
