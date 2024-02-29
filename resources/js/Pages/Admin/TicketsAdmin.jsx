import { Link, usePage } from '@inertiajs/react';
import SearchFilter from '@/Components/SearchFilter';
import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';
import { Head } from '@inertiajs/react';


const Index = ({ auth, }) => {
    const { tickets } = usePage().props;
    const {
        data,
        meta: { links }
    } = tickets;
    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets</h2>}>
            <Head title="Ticket Management" />
            <div className="py-8 flex items-center justify-between mb-6 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <SearchFilter />

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={false}>       <Link
                        className="btn-indigo focus:outline-none"
                        href={route('ticket.create')}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Ticket</span>
                    </Link></PrimaryButton>

                    <Transition
                        show={false}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                    </Transition>
                </div>
            </div>

            <div >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div>

                            <div className="flex items-center justify-between mb-6">


                            </div>
                            <div className="overflow-x-auto bg-white rounded shadow">
                                <table className="w-full whitespace-nowrap">
                                    <thead>

                                        <tr className="font-bold text-left">
                                            <th className="px-6 pt-5 pb-4">Ticket Name</th>
                                            <th className="px-6 pt-5 pb-4">Ticket Type</th>
                                            <th className="px-6 pt-5 pb-4">Ticket Tier</th>
                                            <th className="px-6 pt-5 pb-4">
                                                Ticket Price
                                            </th>
                                            <th className="px-6 pt-5 pb-4">Available Tickets</th>
                                            <th className="px-6 pt-5 pb-4">Total Created Tickets</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(({ id, name, type, tier, price, available_tickets, total_tickets_created }) => {
                                            return (
                                                <tr
                                                    key={id}
                                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                                >
                                                    <td className="border-t">
                                                        <Link
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                        >
                                                            {name}

                                                        </Link>
                                                    </td>
                                                    <td className="border-t">
                                                        <Link
                                                            tabIndex="-1"
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        >
                                                            {type}
                                                        </Link>
                                                    </td>
                                                    <td className="border-t">
                                                        <Link
                                                            tabIndex="-1"
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        >
                                                            {tier}
                                                        </Link>
                                                    </td>
                                                    <td className="border-t">
                                                        <Link
                                                            tabIndex="-1"
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        >
                                                            {price}
                                                        </Link>
                                                    </td>
                                                    <td className="border-t">
                                                        <Link
                                                            tabIndex="-1"
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        >
                                                            {available_tickets}
                                                        </Link>
                                                    </td>
                                                    <td className="border-t">
                                                        <Link
                                                            tabIndex="-1"
                                                            href={route('ticket.edit', id)}
                                                            className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                                        >
                                                            {total_tickets_created}
                                                        </Link>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {data.length === 0 && (
                                            <tr>
                                                <td className="px-6 py-4 border-t" colSpan="4">
                                                    No tickets found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={links} />
                        </div>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
};


export default Index;
