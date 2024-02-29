import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import LoadingButton from '@/Components/LoadingButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Create = ({ auth }) => {
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        type: '',
        tier: '',
        price: '',
        available_tickets: '',
        total_tickets_created: '',

    });

    const [ticketsValue, setTicketsValue] = useState('');

    const handleTicketsChange = (newValue) => {
        setTicketsValue(newValue);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('ticket.store'));
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
                                    label="Available Tickets"
                                    name="available_tickets"
                                    type="text"
                                    errors={errors.available_tickets}
                                    value={data.available_tickets = ticketsValue} // Use the shared state
                                    onChange={e => handleTicketsChange(e.target.value)} // Update the shared state
                                />

                                <TextInput
                                    className="w-full pb-8 pr-6 lg:w-1/2"
                                    label="Total Tickets Created"
                                    name="total_tickets_created"
                                    type="text"
                                    errors={errors.available_tickets} // Assuming it should be errors.total_tickets_created
                                    value={data.total_tickets_created = ticketsValue} // Use the shared state
                                    disabled={true}
                                />

                            </div>
                            <div className="flex items-center justify-end px-8 py-4">
                                <LoadingButton
                                    loading={processing}
                                    type='submit'
                                >
                                    Save Ticket
                                </LoadingButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    );
};

export default Create;
