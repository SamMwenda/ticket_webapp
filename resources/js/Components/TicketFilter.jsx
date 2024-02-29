import SelectInput from '@/Components/SelectInput';
import TicketItem from '@/Components/TicketItem';
import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { usePrevious } from 'react-use';
import { Inertia } from '@inertiajs/inertia';
import pickBy from 'lodash.pickby';




const Divider = () => {
    return (
        <hr
            style={{ width: '100%', color: 'white', borderTop: "1px solid lightgrey" }}
        ></hr>
    );
};

const Category = ({ text }) => {
    return (
        <h1 style={{ marginTop: '100px', width: '100%', color: 'white', fontWeight: 'bold', fontSize: '24px', paddingRight: '600px' }}>{text}</h1>
    );
};



const TicketFilter = () => {
    const { filters } = usePage().props;

    const [values, setValues] = useState({
        type: filters.type || '',
    });

    const prevValues = usePrevious(values);

    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: 'forget' };
            Inertia.get(route(route().current()), query, {
                replace: true,
                preserveState: true
            });
        }
    }, [values]);

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));


    }
    return (
        <div className="sm:flex sm:flex-col sm:space-evenly">
            <div
                className="sm:flex sm:flex-row sm:space-evenly">
                <Category text={values.type == 'GA' ? 'General Admission' : values.type} />
                <div style={{ width: '200px', marginTop: '100px', padding: '5px' }}>
                    <SelectInput
                        label=""
                        name="type"
                        value={values.type}
                        onChange={handleChange}
                    >
                        <option value="All">All</option>
                        <option value="GA">GA</option>
                        <option value="VIP">VIP</option>
                        <option value="VVIP">VVIP</option>
                    </SelectInput>
                </div >
            </div>

            <Divider />
            <TicketItem />

        </div>


    );
};

export default TicketFilter;
