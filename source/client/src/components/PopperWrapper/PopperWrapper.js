import Tippy from '@tippyjs/react/headless';
import AreaPopper from '../AreaPopper';
import CalendarPopper from '../CalendarPopper';
import PassengerPopper from '../PassengerPopper';
import RoomPopper from '../RoomPopper';
import SearchHotelPopper from '../SearchHotelPopper';
import DateRangePopper from '../DateRangePopper';

function PopperWrapper({
    searchHotelPopper,
    passengerPopper,
    calendarPopper,
    dateRangePopper,
    areaPopper,
    roomPopper,
    onDispatch,
    children,
    data,
    prop,
    placement = 'bottom-start',
}) {
    return (
        <div>
            <Tippy
                interactive
                trigger="click"
                placement={placement}
                render={(attrs) => (
                    <div
                        className="overflow-x-hidden overflow-y-auto max-h-[min((100vh-96px)-60px,734px)] rounded-lg shadow-[0_0_20px_0_rgba(44,104,144,0.5)] min-w-[24rem] py-2 px-3 bg-white"
                        tabIndex="-1"
                        {...attrs}
                    >
                        {areaPopper && <AreaPopper onDispatch={onDispatch} prop={prop} />}
                        {calendarPopper && <CalendarPopper onDispatch={onDispatch} prop={prop} />}
                        {dateRangePopper && <DateRangePopper onDispatch={onDispatch} prop={prop} />}
                        {passengerPopper && <PassengerPopper onDispatch={onDispatch} prop={prop} />}
                        {roomPopper && <RoomPopper onDispatch={onDispatch} prop={prop} />}
                        {searchHotelPopper && <SearchHotelPopper data={data} onDispatch={onDispatch} prop={prop} />}
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default PopperWrapper;
