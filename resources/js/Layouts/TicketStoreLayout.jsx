import { Link } from '@inertiajs/react';
import logoImage from "@/images/logo.png";


const imageSytle = {
    width: '60%', height: '80%', alignItems: 'center'
}

export default function Header({ children }) {
    return (
        <>
            <div className="min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 ">
                <div className="sm:fixed sm:top-0 sm:left-0 p-6 text-start">
                    <img src={logoImage} alt="logo" style={imageSytle} />


                </div>

                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
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
                </div>

                <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>{children}</main>
            </div>


            <style>{`

                .bg-dots-darker {
                    background-color:#303237;
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\CenterPiece:bg-dots-lighter {
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
