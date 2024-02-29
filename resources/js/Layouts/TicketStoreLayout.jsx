import { Link } from '@inertiajs/react';
import logoImage from "@/images/logo.png";
import HttpsRedirect from 'react-https-redirect';


const imageSytle = {
    width: '60%', height: '80%', alignItems: 'center'
}

export default function Header({ children }) {
    return (
        <>
            <HttpsRedirect>
                <div className="min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 ">
                <div className="sm:fixed sm:top-0 sm:left-0 p-6 text-start">
                    <img src={logoImage} alt="logo" style={imageSytle} />


                </div>

                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">

                    <Link
                        href={route('/')} as="button"
                        className="ms-8 font-semibold"
                    >
                        Home
                    </Link>
                    <Link
                        href={route('showticket')} as="button"
                        className="ms-8 font-semibold"
                    >
                        Tickets
                    </Link>
                    <Link
                        href={route('login')} as="button"
                        className="ms-8 font-bold"
                    >
                        Log in
                    </Link>
                    <Link
                        href={route('register')} as="button"
                        className="ms-8 font-bold"
                    >
                        Register
                    </Link>
                </div>

                <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
            </div>
</HttpsRedirect>


            <style>{`

                .bg-dots-darker {
                    background-color:#303237;
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\CenterPiece:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
button {
            background-color: transparent;
            border: 1px solid #ffffff;
            color: #ffffff;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.3s, transform 0.3s;
          }

          button:hover {
            transform: scale(1.1);
          }

            `}</style>

        </>


    );


}
