import React from 'react';

function ResultNotFound() {
    return (
        <section className="w-full text-center p-8 select-none">
            <h1 className="text-3xl mb-3">
                <span className="text-sky-500">Oops</span> We can't find results
            </h1>
            <p className="text-slate-500 text-lg">Please try searching another...</p>
        </section>
    );
}

export default ResultNotFound;
