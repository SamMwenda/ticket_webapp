import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage, useForm } from '@inertiajs/react';
import LoadingButton from '@/Components/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';


const Edit = ({ auth }) => {
    const { ticket } = usePage().props;
    const { data, setData, errors, processing } = useForm({
        name: ticket.data['name'] || '',
        type: ticket.data['type'] || '',
        tier: ticket.data['tier'] || '',
        price: ticket.data['price'] || '',
        available_tickets: ticket.data['available_tickets'] || '',
        total_tickets_created: ticket.data['total_tickets_created'] || '',

    });

    const [ticketsValue, setTicketsValue] = useState('');

    const handleTicketsChange = (newValue) => {
        setTicketsValue(newValue);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const updatedData = {
            ...data,
            available_tickets: Number(data.available_tickets) + Number(ticketsValue),
            total_tickets_created: Number(data.total_tickets_created) + Number(ticketsValue)
        };
        Inertia.put(route('ticket.update', ticket.data['id']), updatedData);
    }

    function destroy() {
        if (confirm('Are you sure you want to delete this ticket?')) {
            Inertia.delete(route('ticket.destroy', ticket.data['id']));
        }
    }




    return (
        <AuthenticatedLayout user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tickets / Create</h2>}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">

                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Name"
                                    name="name"
                                    errors={errors.name}
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                <SelectInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Type"
                                    name="type"
                                    errors={errors.type}
                                    value={data.type}
                                    onChange={e => setData('type', e.target.value)}
                                >

                                    <option value=""></option>
                                    <option value="GA">General Admimission</option>
                                    <option value="VIP">VIP</option>
                                    <option value="VVIP">VVIP</option>
                                </SelectInput>
                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Price"
                                    name="price"
                                    type="text"
                                    errors={errors.price}
                                    value={data.price}
                                    onChange={e => setData('price', e.target.value)}
                                />
                                <SelectInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Tier"
                                    name="tier"
                                    errors={errors.tier}
                                    value={data.tier}
                                    onChange={e => setData('tier', e.target.value)}
                                >
                                    <option value=""></option>
                                    <option value="Tier 1">Tier 1</option>
                                    <option value="Tier 2">Tier 2</option>
                                    <option value="Tier 3">Tier 3</option>
                                </SelectInput>
                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Enter number of tickets to add/subtract"
                                    name="tickets"
                                    type="text"
                                    errors={errors.tickets}
                                    value={data.tickets = ticketsValue}
                                    onChange={e => handleTicketsChange(e.target.value)}
                                />
                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Available Tickets"
                                    name="available_created"
                                    type="integer"
                                    errors={errors.available_tickets}
                                    disabled={true}
                                    value={Number(data.available_tickets) + Number(ticketsValue)}
                                />
                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Total Tickets Created"
                                    name="total_tickets_created"
                                    type="integer"
                                    errors={errors.available_tickets}
                                    value={Number(data.total_tickets_created) + Number(ticketsValue)}
                                    disabled={true}
                                />

                            </div>
                            <div className="flex items-center justify-between px-8 py-4">

                                    <DangerButton onDelete={destroy}>
                                        Delete Ticket
                                    </DangerButton>

                                <LoadingButton
                                    loading={processing}
                                    type='submit'
                                >
                                    Update Ticket
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    );
};

export default Edit;
