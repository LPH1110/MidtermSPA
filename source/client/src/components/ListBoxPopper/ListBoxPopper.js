import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

function ListBoxPopper({ data }) {
    const [selectedItem, setSelectedItem] = useState('Default');
    const [down, setDown] = useState(true);

    return (
        <div>
            <Listbox>
                <Listbox.Button className="hover:bg-slate-200 ease-in-out duration-200 flex justify-between items-center relative outline-none py-1 pl-3 pr-1 mx-2 border border-slate-200 rounded-lg">
                    <p className="text-lg">{selectedItem.name || selectedItem}</p>
                    <span className="ml-2">
                        {down && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </span>
                    <Listbox.Options className="text-md top-[120%] right-0 rounded-lg p-1 absolute z-10 min-w-[14rem] bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]">
                        {data.items.map((item) => (
                            <Listbox.Option
                                className="flex justify-between text-left p-2 rounded-lg text-md outline-none text-slate-500 hover:bg-slate-100 hover:text-sky-500 ease duration-200"
                                key={item.id}
                                value={item}
                                as={Fragment}
                                onClick={() => setSelectedItem(item.title)}
                            >
                                {({ active, selected }) => {
                                    return (
                                        <li className={`${active ? 'text-sky-500' : 'text-slate-500'}`}>
                                            {item.title}
                                            {selected && <CheckIcon className="ml-4 w-4 h-4 text-sky-500" />}
                                        </li>
                                    );
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox.Button>
            </Listbox>
        </div>
    );
}

export default ListBoxPopper;
