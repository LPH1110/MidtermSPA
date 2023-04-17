import { Header } from '../components';

function HeaderOnly({ children }) {
    return (
        <section>
            <Header />
            <section className="px-5 mt-20">{children}</section>
        </section>
    );
}

export default HeaderOnly;
