import { useState } from 'react';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { useDebounce } from '~/store';

function SearchHotelPopper({ data }) {
    const [hotelResults, setHotelResults] = useState([]);

    const debounced = useDebounce(hotelResults, 600);

    return (
        <div>
            {data.map((item) => (
                <div
                    key={item.id}
                    className="hover:bg-slate-100 ease duration-200 cursor-pointer rounded-md flex items-center p-2"
                >
                    <div className="mr-3">
                        <BuildingOffice2Icon className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-slate-500">{item.address}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SearchHotelPopper;
