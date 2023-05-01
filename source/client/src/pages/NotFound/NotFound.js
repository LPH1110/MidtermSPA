import React from 'react';

function NotFound() {
    return (
        <section className="w-full text-center p-8 select-none">
            <h1 className="text-3xl mb-3">
                <span className="text-sky-500">404</span> Not found
            </h1>
            <p className="text-slate-500 text-lg">The site is under maintenance. Sorry for this inconvenience</p>
        </section>
    );
}

export default NotFound;
