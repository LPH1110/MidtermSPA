import { Header, Footer } from '~/layouts/components';

function DefaultLayout({ children }) {
    return (
        <section class="h-screen flex flex-col justify-between">
            <Header />

            {/* Content */}
            <section className="px-5 mt-20">{children}</section>
            <Footer />
        </section>
    );
}

export default DefaultLayout;
