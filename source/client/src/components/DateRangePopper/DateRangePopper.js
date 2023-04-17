import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

function DateRangePopper({ onDispatch, prop }) {
    const [ranges, setRanges] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection',
        },
    ]);

    const handleOnChangeRanges = (data) => {
        setRanges([data.selection]);
        onDispatch(prop, {
            type: 'dateRange',
            payload: {
                startDate: format(data.selection.startDate, 'dd/MM/yyyy'),
                endDate: format(data.selection.endDate, 'dd/MM/yyyy'),
            },
        });
    };

    return (
        <div>
            <DateRange
                minDate={new Date()}
                editableDateInputs={true}
                onChange={handleOnChangeRanges}
                moveRangeOnFirstSelection={false}
                ranges={ranges}
            />
        </div>
    );
}

export default DateRangePopper;
