import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '~/components';

const navigations = [
    {
        id: 0,
        title: 'Discover',
        path: '/discover',
    },
    {
        id: 1,
        title: 'Flight',
        path: '/flight',
    },
    {
        id: 2,
        title: 'Hotels',
        path: '/hotels',
    },
    {
        id: 3,
        title: 'About us',
        path: '/about',
    },
];

function Header() {
    const headerRef = useRef();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            headerRef.current.classList.remove('bg-transparent');
            headerRef.current.classList.add('bg-white');
            headerRef.current.classList.add('shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]');
        } else {
            headerRef.current.classList.remove('bg-white');
            headerRef.current.classList.remove('shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]');
            headerRef.current.classList.add('bg-transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            ref={headerRef}
            className="z-[100000] transition-shadow ease-in-out duration-400 fixed left-0 right-0 top-0 w-screen h-20 flex items-center justify-between bg-transparent px-5"
        >
            <a href="/" className="min-w-[5rem] h-full">
                <img
                    className="w-full h-full"
                    src="https://res.cloudinary.com/dup2fxrco/image/upload/v1668565049/bettertrip/bettertrip-transparent_t2joky.png"
                    alt="BetterTrip"
                />
            </a>
            <nav className="flex items-center">
                <ul className="flex items-center">
                    {navigations.map((nav) => {
                        return nav.path === '/' ? (
                            <li className="px-3" key={nav.id}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'text-sky-500' : 'hover:text-sky-400 ease duration-200'
                                    }
                                    end
                                    to={nav.path}
                                >
                                    {nav.title}
                                </NavLink>
                            </li>
                        ) : (
                            <li className="px-3" key={nav.id}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'text-sky-500' : 'hover:text-sky-400 ease duration-200'
                                    }
                                    to={nav.path}
                                >
                                    {nav.title}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <Button className="hover:text-sky-400 ease duration-200" size="small">
                    Sign in
                </Button>
                <Button
                    className="font-semibold hover:bg-sky-400 bg-sky-500 ease-in-out duration-200 text-slate-100 rounded-lg"
                    size="medium"
                >
                    Sign up
                </Button>
            </nav>
        </header>
    );
}

export default Header;
