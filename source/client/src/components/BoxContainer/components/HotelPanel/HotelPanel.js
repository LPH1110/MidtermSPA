import { MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import classNames from 'classnames/bind';
import { CalendarIcon } from '~/assets/images/icons';
import { Button, PopperWrapper } from '~/components';
import styles from './HotelPanel.module.scss';
import AdvancedPanel from './AdvancedPanel';
import { dataStore } from '~/store';

const { hotels } = dataStore;

const cx = classNames.bind(styles);

function HotelPanel() {
    const [advanced, setAdvanced] = useState(false);

    const initialValues = {
        location: '',
        roomQty: '',
        checkInDate: '',
        checkOutDate: '',
        rating: '',
        hotelType: '',
        assessmentPoint: '',
        distance: '',
    };

    const validationSchema = Yup.object().shape({
        location: Yup.string().required(),
        roomQty: Yup.string().required(),
        checkInDate: Yup.string().required(),
        checkOutDate: Yup.string().required(),
        rating: Yup.string().required(),
        hotelType: Yup.string().required(),
        assessmentPoint: Yup.string().required(),
        distance: Yup.string().required(),
    });

    const handleErrorMessage = (message, name) => {
        console.log(message);
    };

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema}>
                <Form autoComplete="off" className="text-lg">
                    <section className="flex">
                        <section className="flex items-center">
                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="location" className="text-slate-900 font-semibold">
                                    Where do you want to stay?
                                </label>
                                <PopperWrapper searchHotelPopper data={hotels}>
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <MapPinIcon className="text-sky-400 w-6 h-6" />
                                        </div>
                                        <Field
                                            placeholder="Type some hotel's names"
                                            className="w-full outline-none"
                                            name="location"
                                            type="location"
                                        />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                </PopperWrapper>
                                <ErrorMessage name="location">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>

                            <section className={cx('form-item', 'p-2')}>
                                <label htmlFor="roomQty" className="text-slate-900 font-semibold">
                                    Room - people quantity
                                </label>
                                <PopperWrapper roomPopper placement="bottom">
                                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                                        <div className="mr-2">
                                            <UserGroupIcon className="text-sky-500 w-5 h-5" />
                                        </div>
                                        <Field className="w-full outline-none" name="roomQty" type="roomQty" />
                                        <div
                                            className={cx(
                                                'input-line',
                                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                            )}
                                        ></div>
                                    </div>
                                </PopperWrapper>
                                <ErrorMessage name="roomQty">
                                    {(message) => <span className="text-md text-red-500">{message}</span>}
                                </ErrorMessage>
                            </section>
                        </section>
                        <section>
                            <section className="grid grid-cols-2">
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="checkInDate" className="text-slate-900 font-semibold">
                                        Checkin Date
                                    </label>
                                    <PopperWrapper calendarPopper placement="bottom-end">
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <CalendarIcon className="text-sky-500" />
                                            </div>
                                            <Field
                                                className="w-full outline-none"
                                                name="checkInDate"
                                                type="checkInDate"
                                            />
                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                    </PopperWrapper>
                                    <ErrorMessage name="checkInDate">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                                <section className={cx('form-item', 'p-2')}>
                                    <label htmlFor="checkOutDate" className="text-slate-900 font-semibold">
                                        Checkout Date
                                    </label>
                                    <PopperWrapper calendarPopper placement="bottom-end">
                                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                                            <div className="mr-2">
                                                <CalendarIcon className="text-sky-500" />
                                            </div>
                                            <Field
                                                className="w-full outline-none"
                                                name="checkOutDate"
                                                type="checkOutDate"
                                            />
                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                    </PopperWrapper>
                                    <ErrorMessage name="checkOutDate">
                                        {(message) => <span className="text-md text-red-500">{message}</span>}
                                    </ErrorMessage>
                                </section>
                            </section>
                        </section>
                    </section>
                    {advanced && <AdvancedPanel />}
                    <section>
                        <Button
                            className="text-md hover:bg-slate-100 ease-in-out duration-200 outline-none border border-slate-600 rounded-full text-slate-600"
                            size="medium"
                            type="button"
                            onClick={() => setAdvanced(!advanced)}
                        >
                            {advanced ? 'Minimize' : 'Advanced Search'}
                        </Button>
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

export default HotelPanel;
