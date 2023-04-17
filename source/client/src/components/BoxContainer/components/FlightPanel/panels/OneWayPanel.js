import { QuestionMarkCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import classNames from 'classnames/bind';
import { CalendarIcon, PlaneDepartureIcon, PlaneLandingIcon, SwitchArrowsIcon } from '~/assets/images/icons';
import { Button, PopperWrapper } from '~/components';
import Tooltip from '~/components/Tooltip';
import { actions, useStore } from '~/store';
import styles from '../FlightPanel.module.scss';

const cx = classNames.bind(styles);

function OneWayPanel() {
    const [state, dispatch] = useStore();
    const { oneWayPanel } = state;
    const { source, destination, departureDate, passengers } = oneWayPanel;
    const navigate = useNavigate();

    const initialValues = {
        source,
        destination,
        departureDate,
        passengers: `${passengers.adult} adult, ${passengers.child} child, ${passengers.babies} babies`,
    };

    const validationSchema = Yup.object().shape({
        source: Yup.string(),
        destination: Yup.string(),
        passengers: Yup.string().required(),
    });

    const handleChangeOneWayPanel = (prop, { type, payload }) => {
        switch (type) {
            case 'area':
                dispatch(actions.setFlightOneWay({ key: prop, value: `${payload.AreaName} (${payload.AreaID})` }));
                break;
            case 'date':
            case 'passengers':
                dispatch(actions.setFlightOneWay({ key: prop, value: payload }));
                break;
            default:
                console.error('Invalid dispatch type');
                break;
        }
    };

    const handleSwitchLocations = () => {
        dispatch(actions.switchLocations('oneWayPanel'));
    };

    const handleErrorMessage = (message, name) => {
        console.log(message);
    };
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form autoComplete="off" className="text-lg">
                    <section className="grid grid-cols-2">
                        <section className="flex items-center">
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="source" className="text-slate-900 font-semibold">
                                    Departure point
                                </label>
                                <PopperWrapper prop={'source'} areaPopper onDispatch={handleChangeOneWayPanel}>
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
                                type="button"
                                onClick={handleSwitchLocations}
                                className="mx-2 p-2 rounded-full bg-slate-100 hover:bg-slate-200 ease-in-out duration-200"
                            >
                                <SwitchArrowsIcon className="text-slate-700" />
                            </Button>
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="destination" className="text-slate-900 font-semibold">
                                    Your Destination
                                </label>
                                <PopperWrapper prop="destination" areaPopper onDispatch={handleChangeOneWayPanel}>
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
                            <section className="grid grid-cols-3">
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="departureDate" className="text-slate-900 font-semibold">
                                        Departure Date
                                    </label>
                                    <PopperWrapper
                                        prop="departureDate"
                                        onDispatch={handleChangeOneWayPanel}
                                        calendarPopper
                                        placement="bottom-end"
                                    >
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <CalendarIcon className="text-sky-500" />
                                            </div>
                                            <Field
                                                value={departureDate}
                                                className="w-full outline-none"
                                                name="departureDate"
                                                type="departureDate"
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
                                <section className={cx('form-item', 'p-2 col-span-2')}>
                                    <label htmlFor="passengers" className="text-slate-900 font-semibold">
                                        Passengers
                                    </label>
                                    <PopperWrapper
                                        prop="passengers"
                                        onDispatch={handleChangeOneWayPanel}
                                        passengerPopper
                                        placement="bottom"
                                    >
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <UserGroupIcon className="text-sky-500 w-6 h-6" />
                                            </div>
                                            <Field
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
                            type="button"
                            onClick={() => navigate('/results/oneWay')}
                        >
                            Search
                        </Button>
                    </section>
                </Form>
            </Formik>
        </div>
    );
}

export default OneWayPanel;
