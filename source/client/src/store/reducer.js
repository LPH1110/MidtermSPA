import {
    SET_USER_SESSION,
    SET_FLIGHT_ONEWAY,
    SET_FLIGHT_RETURN,
    SWITCH_LOCATIONS,
    SET_CHOSEN_FLIGHT_TICKET,
} from './constants';
import { format } from 'date-fns';

const initState = {
    loggedIn: false,
    oneWayPanel: {
        name: 'One Way Flight',
        source: '',
        destination: '',
        departureDate: format(new Date(), 'dd/MM/yyyy'),
        passengers: {
            adult: 1,
            child: 0,
            babies: 0,
        },
    },
    returnPanel: {
        name: 'Return Flight',
        source: '',
        destination: '',
        date: {
            startDate: format(new Date(), 'dd/MM/yyyy'),
            endDate: format(new Date(), 'dd/MM/yyyy'),
        },
        passengers: {
            adult: 1,
            child: 0,
            babies: 0,
        },
    },
    chosenFlightTicket: {},
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                loggedIn: action.payload,
            };
        case SET_FLIGHT_ONEWAY:
            let newOneWayState = { ...state };
            switch (action.payload.key) {
                case 'source':
                case 'destination':
                case 'departureDate':
                    newOneWayState.oneWayPanel[action.payload.key] = action.payload.value;
                    break;
                case 'passengers':
                    newOneWayState.oneWayPanel[action.payload.key] = {
                        ...action.payload.value,
                    };
                    break;
                default:
                    console.error('Invalid type of actions: ' + SET_FLIGHT_ONEWAY);
                    break;
            }
            return newOneWayState;
        case SET_FLIGHT_RETURN:
            let newReturnState = { ...state };

            switch (action.payload.key) {
                case 'source':
                case 'destination':
                    newReturnState.returnPanel[action.payload.key] = action.payload.value;
                    break;
                case 'date':
                case 'passengers':
                    newReturnState.returnPanel[action.payload.key] = {
                        ...action.payload.value,
                    };
                    break;
                default:
                    console.error('Invalid type of actions: ' + SET_FLIGHT_RETURN);
                    break;
            }

            return newReturnState;
        case SWITCH_LOCATIONS:
            let newState = { ...state };
            let temp = newState[action.payload].destination;
            newState[action.payload].destination = newState[action.payload].source;
            newState[action.payload].source = temp;
            console.log(newState[action.payload].source);
            return newState;
        case SET_CHOSEN_FLIGHT_TICKET:
            return {
                ...state,
                chosenFlightTicket: {
                    ...action.payload,
                },
            };
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
