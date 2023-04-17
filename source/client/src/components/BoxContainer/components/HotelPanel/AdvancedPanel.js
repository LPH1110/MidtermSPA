import { ClipboardDocumentCheckIcon, HomeIcon, MapIcon, StarIcon } from '@heroicons/react/24/outline';
import { ErrorMessage, Field } from 'formik';

import classNames from 'classnames/bind';
import styles from './HotelPanel.module.scss';

const cx = classNames.bind(styles);

function AdvancedPanel() {
    return (
        <section className="flex">
            <section className="flex items-center">
                <section className={cx('form-item', 'p-2')}>
                    <label htmlFor="rating" className="text-slate-900 font-semibold">
                        Rating
                    </label>
                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                        <div className="mr-2">
                            <StarIcon className="text-sky-400 w-6 h-6" />
                        </div>
                        <Field className="w-full outline-none" name="rating" type="rating" />
                        <div
                            className={cx(
                                'input-line',
                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                            )}
                        ></div>
                    </div>
                    <ErrorMessage name="rating">
                        {(message) => <span className="text-md text-red-500">{message}</span>}
                    </ErrorMessage>
                </section>

                <section className={cx('form-item', 'p-2')}>
                    <label htmlFor="hotelType" className="text-slate-900 font-semibold">
                        Hotel type
                    </label>
                    <div className={cx('input-container', 'flex items-center relative py-2')}>
                        <div className="mr-2">
                            <HomeIcon className="text-sky-500 w-5 h-5" />
                        </div>
                        <Field className="w-full outline-none" name="hotelType" type="hotelType" />
                        <div
                            className={cx(
                                'input-line',
                                'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                            )}
                        ></div>
                    </div>
                    <ErrorMessage name="hotelType">
                        {(message) => <span className="text-md text-red-500">{message}</span>}
                    </ErrorMessage>
                </section>
            </section>
            <section>
                <section className="grid grid-cols-2">
                    <section className={cx('form-item', 'p-2')}>
                        <label htmlFor="assessmentPoint" className="text-slate-900 font-semibold">
                            Assessment point
                        </label>
                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                            <div className="mr-2">
                                <ClipboardDocumentCheckIcon className="text-sky-500 w-6 h-6" />
                            </div>
                            <Field className="w-full outline-none" name="assessmentPoint" type="assessmentPoint" />
                            <div
                                className={cx(
                                    'input-line',
                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                )}
                            ></div>
                        </div>
                        <ErrorMessage name="assessmentPoint">
                            {(message) => <span className="text-md text-red-500">{message}</span>}
                        </ErrorMessage>
                    </section>
                    <section className={cx('form-item', 'p-2')}>
                        <label htmlFor="distance" className="text-slate-900 font-semibold">
                            Away from the centre
                        </label>
                        <div className={cx('input-container', 'flex items-center relative py-2')}>
                            <div className="mr-2">
                                <MapIcon className="text-sky-500 w-6 h-6" />
                            </div>
                            <Field className="w-full outline-none" name="distance" type="distance" />
                            <div
                                className={cx(
                                    'input-line',
                                    'ease-in-out duration-200 absolute bottom-0 h-px w-full bg-slate-300 rounded-lg',
                                )}
                            ></div>
                        </div>
                        <ErrorMessage name="distance">
                            {(message) => <span className="text-md text-red-500">{message}</span>}
                        </ErrorMessage>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default AdvancedPanel;
