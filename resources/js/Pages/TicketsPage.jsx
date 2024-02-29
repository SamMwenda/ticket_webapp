import TicketStoreLayout from '@/Layouts/TicketStoreLayout'
import TicketFilter from '@/Components/TicketFilter'
import { Head } from '@inertiajs/react';


export default function TicketsPage({ auth }) {
    
    return (
        <>

            <Head title="Buy Ticket" />
            <TicketStoreLayout auth={auth}>

                <TicketFilter></TicketFilter>
            </TicketStoreLayout>





        </>
    );
}
