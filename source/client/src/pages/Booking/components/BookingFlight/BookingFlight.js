import { UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './BookingFlight.module.scss';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { Button } from '~/components';
import { useStore } from '~/store';

const cx = classNames.bind(styles);

function BookingFlight() {
    const [state, dispatch] = useStore();
    const { chosenFlightTicket } = state;
    const { adult, child, babies } = chosenFlightTicket;
    const navigate = useNavigate();

    const initialValues = {
        firstName: '',
        lastName: '',
        countryCode: '',
        email: '',
        phoneNumber: '',
        address: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        countryCode: Yup.string().required(),
        email: Yup.string().email().required(),
        phoneNumber: Yup.string().required(),
        address: Yup.string().required(),
    });

    const handleSubmit = (data) => {
        console.log(data);
        navigate('/booking/payment');
    };

    return (
        <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchema}>
            <Form>
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Your Flight Ticket Order</h1>
                        <p className="py-1 flex items-center text-slate-600 text-lg">
                            <span className="mr-3">
                                <UserGroupIcon className="w-6 h-6" />
                            </span>
                            {adult > 0 && `${adult} adult`}
                            {child > 0 && `, ${child} child`}
                            {babies > 0 && `, ${babies} babies`}
                        </p>
                    </div>
                    <div>
                        <Button
                            size="medium"
                            className="rounded-full bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-white"
                        >
                            Change searchings
                        </Button>
                    </div>
                </header>
                {/* Advertise */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center h-[12rem] my-4 bg-slate-100 rounded-lg">
                    <h1 className="text-2xl p-3 text-white">
                        Having no accounts?
                        <Link to="/signup" className="ease duration-300 ml-2 hover:underline hover:text-sky-200">
                            Sign up here
                        </Link>
                    </h1>
                    <p className="text-xl text-white mb-3">
                        or
                        <Link className="ml-1 hover:underline ease duration-200" to="/signin">
                            Sign in
                        </Link>
                    </p>
                    <p className="text-slate-100">Log in to your account to receive free gists from us!</p>
                </div>
                {/* content */}

                <div className="grid grid-cols-3 gap-4">
                    {/* Contact personal */}
                    <div className="col-span-2 flex flex-col items-center">
                        <div className="mb-4 w-full rounded-lg shadow-[0_0_20px_0_rgba(148,163,184,0.3)]">
                            <div className="px-4 pt-4 pb-6 rounded-lg">
                                <h1 className="text-xl font-semibold">Contact Personal</h1>
                                <div className={cx('form-row', 'grid grid-cols-2 gap-x-4')}>
                                    <div className="relative mb-7">
                                        <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                            <label htmlFor="firstName">
                                                First name <span className="text-red-500">(*)</span>
                                            </label>
                                            <Field
                                                className="bg-transparent w-full outline-none"
                                                name="firstName"
                                                type="firstName"
                                            />

                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                        <ErrorMessage name="firstName">
                                            {(message) => (
                                                <span className="absolute top-full text-red-500">{message}</span>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="relative mb-7">
                                        <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                            <label htmlFor="lastName">
                                                Last name <span className="text-red-500">(*)</span>
                                            </label>
                                            <Field
                                                className="bg-transparent w-full outline-none"
                                                name="lastName"
                                                type="lastName"
                                            />

                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                        <ErrorMessage name="lastName">
                                            {(message) => (
                                                <span className="absolute top-full text-red-500">{message}</span>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                </div>
                                <div className={cx('form-row', 'min-h-[6rem] grid grid-cols-2 gap-x-4 items-center')}>
                                    <div className="relative mb-7">
                                        <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                            <label htmlFor="email">
                                                Email <span className="text-red-500">(*)</span>
                                            </label>
                                            <Field
                                                className="bg-transparent w-full outline-none"
                                                name="email"
                                                type="email"
                                            />

                                            <div
                                                className={cx(
                                                    'input-line',
                                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                )}
                                            ></div>
                                        </div>
                                        <ErrorMessage name="email">
                                            {(message) => (
                                                <span className="absolute top-full text-red-500">{message}</span>
                                            )}
                                        </ErrorMessage>
                                    </div>
                                    <div className="grid grid-cols-3 gap-x-4">
                                        <div className="relative mb-7">
                                            <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                                <label htmlFor="countryCode">
                                                    Country code <span className="text-red-500">(*)</span>
                                                </label>
                                                <Field
                                                    className="bg-transparent w-full outline-none"
                                                    name="countryCode"
                                                    type="countryCode"
                                                    placeholder="+84"
                                                />

                                                <div
                                                    className={cx(
                                                        'input-line',
                                                        'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                    )}
                                                ></div>
                                            </div>
                                            <ErrorMessage name="countryCode">
                                                {(message) => (
                                                    <span className="absolute top-full text-red-500">{message}</span>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="col-span-2 relative mb-7">
                                            <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                                <label htmlFor="phoneNumber">
                                                    Phone number <span className="text-red-500">(*)</span>
                                                </label>
                                                <Field
                                                    className="bg-transparent w-full outline-none"
                                                    name="phoneNumber"
                                                    type="phoneNumber"
                                                />

                                                <div
                                                    className={cx(
                                                        'input-line',
                                                        'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                    )}
                                                ></div>
                                            </div>
                                            <ErrorMessage name="phoneNumber">
                                                {(message) => (
                                                    <span className="absolute top-full text-red-500">{message}</span>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('form-row', 'min-h-[6rem]')}>
                                    <div className="">
                                        <div>
                                            <div className={cx('input-container', 'bg-transparent relative py-2')}>
                                                <label htmlFor="address">
                                                    Address <span className="text-red-500">(*)</span>
                                                </label>
                                                <Field
                                                    className="bg-transparent w-full outline-none"
                                                    name="address"
                                                    type="address"
                                                />

                                                <div
                                                    className={cx(
                                                        'input-line',
                                                        'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                                    )}
                                                ></div>
                                            </div>
                                            <ErrorMessage name="address">
                                                {(message) => <span className="text-red-500">{message}</span>}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            size="large"
                            type="submit"
                            className="w-[16rem] font-semibold bg-sky-500 hover:bg-sky-400 text-white ease-in-out duration-200 rounded-full"
                        >
                            Continue
                        </Button>
                        {/* Alert */}
                        <div className="w-full text-left py-5 mt-5">
                            <h4 className="text-2xl text-red-500 font-semibold">
                                <span className="mr-1">
                                    <ExclamationTriangleIcon className="w-6 h-6 inline" />
                                </span>
                                Warning
                            </h4>
                            <ul className="text-slate-500 list-disc p-5">
                                <li className="py-1">
                                    For international flights or international transit, passport must be valid for at
                                    least 06 months before departure date.
                                </li>
                                <li className="py-1">
                                    Vietnam Airlines and Bamboo Airways: Refuse to carry passengers who are 36 weeks
                                    pregnant or more. Vietjet Air and Vietravel Airlines: Refuse to carry pregnant
                                    passengers from 32 weeks or more.
                                </li>
                                <li className="py-1">
                                    Children from 14 days to under 02 years old need to be accompanied by an adult aged
                                    18 or over.
                                </li>
                                <li className="py-1">
                                    The age of the child/baby will be calculated from the date of birth to the date of
                                    flight departure, based on the child's birth certificate/passport.
                                </li>
                                <li className="py-1">
                                    In the case of children traveling alone, please contact the agent directly for
                                    advice on services for children traveling alone on the flight.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default BookingFlight;
