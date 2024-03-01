import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,usePage } from '@inertiajs/react';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)({
    height: 30,
    width: '50%',
    marginBottom: '20px',
    marginLeft: '5px',
    borderRadius: 20,
    border: `2px solid #7D26CD`, // Set border color
    backgroundColor: '#FFFF',
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 20,
        backgroundColor: '#7D26CD',
    },
});

export default function Dashboard({ auth }) {
    const { tickets } = usePage().props;
    const {
        data: ticketData,
    } = tickets;
    if (ticketData && ticketData.length > 0) {
        const availableTicketsList = ticketData.map(({ available_tickets }) => available_tickets);
        const totalTicketsCreatedList = ticketData.map(({ total_tickets_created }) => total_tickets_created);

        const sumOfAvailableTickets = availableTicketsList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const sumOfTotalTicketsCreatedList = totalTicketsCreatedList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        const sold = (100 * sumOfAvailableTickets) / sumOfTotalTicketsCreatedList;
        percentage = 100 - sold;
    } else {
        percentage = 0
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-2 text-gray-900">Welcome!</div>
                        <div className="p-2 text-gray-900"> {percentage === 0 ? 'Welcome, Ultra Festival is approaching please put tickets on sale' : 'Ultra Festival is still in Progress'}</div>                        <div className="p-2 text-gray-900">Tickets Sold! <span style={{ fontSize: '30px' }}>{parseInt(percentage)}%</span></div>
                        <BorderLinearProgress variant="determinate" value={percentage} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
