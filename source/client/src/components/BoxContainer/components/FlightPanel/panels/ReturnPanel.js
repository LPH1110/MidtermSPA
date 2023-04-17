import { UserGroupIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import { format } from 'date-fns';

import { CalendarIcon, PlaneDepartureIcon, PlaneLandingIcon, SwitchArrowsIcon } from '~/assets/images/icons';
import { Button } from '~/components';
import styles from '../FlightPanel.module.scss';
import { PopperWrapper } from '~/components';
import { Tooltip } from '~/components';
import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);

function ReturnPanel() {
    const [state, dispatch] = useStore();
    const { returnPanel } = state;
    const { source, destination, date, passengers } = returnPanel;

    const initialValues = {
        source: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        passengers: '',
    };

    const validationSchema = Yup.object().shape({
        source: Yup.string(),
        destination: Yup.string(),
    });

    const handleSwitchLocations = () => {
        dispatch(actions.switchLocations('returnPanel'));
    };

    const handleSubmit = () => {
        console.log(returnPanel);
    };

    const handleChangeReturnPanel = (prop, { type, payload }) => {
        switch (type) {
            case 'area':
                dispatch(actions.setFlightReturn({ key: prop, value: `${payload.name} (${payload.id})` }));
                break;
            case 'dateRange':
                dispatch(
                    actions.setFlightReturn({
                        key: prop,
                        value: {
                            startDate: payload.startDate,
                            endDate: payload.endDate,
                        },
                    }),
                );
            case 'passengers':
                dispatch(actions.setFlightReturn({ key: prop, value: payload }));
                break;
            default:
                console.error('Invalid dispatch type');
                break;
        }
    };

    const handleErrorMessage = (message, name) => {
        console.log(message);
    };

    return (
        <div>
            <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                <Form autoComplete="off" className="text-lg">
                    <section className="grid grid-cols-2">
                        <section className="flex items-center">
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="source" className="text-slate-900 font-semibold">
                                    Departure point
                                </label>
                                <PopperWrapper prop="source" onDispatch={handleChangeReturnPanel} areaPopper>
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <PlaneDepartureIcon className="text-sky-500" />
                                        </div>
                                        <Field
                                            value={source}
                                            readOnly
                                            className="w-full outline-none"
                                            name="source"
                                            type="source"
                                        />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                </PopperWrapper>
                                <ErrorMessage name="source">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>
                            {/* Switch Arrows Button */}
                            <Button
                                onClick={handleSwitchLocations}
                                type="button"
                                className="mx-2 p-2 rounded-full bg-slate-100 hover:bg-slate-200 ease-in-out duration-200"
                            >
                                <SwitchArrowsIcon className="text-slate-700" />
                            </Button>
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="destination" className="text-slate-900 font-semibold">
                                    Your Destination
                                </label>
                                <PopperWrapper prop="destination" onDispatch={handleChangeReturnPanel} areaPopper>
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <PlaneLandingIcon className="text-sky-500" />
                                        </div>
                                        <Field
                                            value={destination}
                                            readOnly
                                            className="w-full outline-none"
                                            name="destination"
                                            type="destination"
                                        />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                </PopperWrapper>
                                <ErrorMessage name="destination">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>
                        </section>
                        <section>
                            <section className="grid grid-cols-2">
                                <section className={cx('form-item', 'p-2')}>
                                    <label className="text-slate-900 font-semibold">Departure Date - Return Date</label>
                                    <PopperWrapper
                                        prop="date"
                                        onDispatch={handleChangeReturnPanel}
                                        dateRangePopper
                                        placement="bottom-end"
                                    >
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <CalendarIcon className="text-sky-500" />
                                            </div>
                                            <Field
                                                value={date.startDate}
                                                readOnly
                                                className="w-full outline-none text-center"
                                                name="departureDate"
                                                type="departureDate"
                                                placeholder="11/10/2002"
                                            />
                                            <span className="h-px w-8 bg-slate-500"></span>
                                            <Field
                                                value={date.endDate}
                                                readOnly
                                                placeholder="11/10/2002"
                                                className="w-full outline-none text-center"
                                                name="returnDate"
                                                type="returnDate"
                                            />
                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                    </PopperWrapper>
                                    <ErrorMessage name="departureDate">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="passengers" className="text-slate-900 font-semibold">
                                        Passengers
                                    </label>
                                    <PopperWrapper
                                        prop="passengers"
                                        onDispatch={handleChangeReturnPanel}
                                        passengerPopper
                                    >
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <UserGroupIcon className="text-sky-500 w-6 h-6" />
                                            </div>
                                            <Field
                                                readOnly
                                                value={`${passengers.adult} adult, ${passengers.child} child, ${passengers.babies} babies`}
                                                className="w-full outline-none"
                                                name="passengers"
                                                type="passengers"
                                            />
                                            <span>
                                                <Tooltip message="Babies quantity should not be greater than adults">
                                                    <QuestionMarkCircleIcon className="w-6 h-6 text-slate-500" />
                                                </Tooltip>
                                            </span>
                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                    </PopperWrapper>
                                    <ErrorMessage name="passengers">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className="flex justify-end items-center">
                        <Button
                            className="text-slate-100 bg-sky-500 rounded-lg hover:bg-sky-400 ease-in-out duration-200"
                            size="large"
                            type="submit"
                        >
                            Search
                        </Button>
                    </section>
                </Form>
            </Formik>
        </div>
    );
}

export default ReturnPanel;
