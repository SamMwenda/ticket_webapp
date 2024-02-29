import TicketsStoreLayout from '@/Layouts/TicketStoreLayout'
import { Head } from '@inertiajs/react';
import CenterPiece from '@/Components/CenterPiece';
import SoldOutSection from '@/Components/SoldOutSection';
import LineUpSection from '@/Components/LineUpSection';


export default function Welcome({ }) {

    return (
        <TicketsStoreLayout>
            <Head title="Welcome" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center">
                <SoldOutSection />
                <CenterPiece />
                <LineUpSection />
            </div>


        </TicketsStoreLayout>
    );
}
