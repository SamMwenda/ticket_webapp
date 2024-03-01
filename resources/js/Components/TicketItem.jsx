import { usePage, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectInput from '@/Components/SelectInput';
import LoadingButton from '@/Components/LoadingButton';
import TextInput from '@/Components/TextInput';


const TicketItem = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setData('email', '');
        setData('amount', '')
    };

    const handleClose = () => {
        setOpen(false);
    };


    const { tickets, } = usePage().props;
    const {
        data: ticketsData,
    } = tickets;

    const { data: formData, setData, errors } = useForm({
        email: '',
        amount: '',
        price: '',
        name: '',
        tier: '',
        type: '',


    });

    var { data: updateData, processing } = useForm(
        {
            name: '',
            type: '',
            tier: '',
            price1: '',
            available_tickets: '',
            total_tickets_created: '',
        }
    );


    return (
        <div className=" relative sm:flex sm:flex-col sm:space-evenly" >
            {
                ticketsData.map(({ id, name, type, tier, price, available_tickets, total_tickets_created }) => {

                    {//Styles
                        var isSoldOut = available_tickets <= 0;

                        const mainRectangleStyle = {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: '10%',
                            marginTop: '5px',
                            background: 'rgba(89, 90, 92, 0.2)', // 595A5C with 20% opacity
                        }

                        const innerLeftRectangleStyle = {
                            width: '30%',
                            height: '10%',
                            background: !isSoldOut ? '#595A5C' : '#353638',
                        }

                        const buyButton = {
                            width: '15%',
                            height: '8%',
                            background: 'transparent',
                            border: !isSoldOut ? '1px dotted white' : '1px dotted red',
                        }

                        const buttonStyle = {
                            width: '100%',
                            height: '100%',
                            background: !isSoldOut ? '#87B9CF' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }

                        const h3Style = {
                            color: '#87B9CF',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            marginLeft: '15px',
                            padding: '5px',
                        }

                        const h1Style = {
                            color: '#FFFFFF',
                            fontSize: '24px',
                            fontWeight: 'bold',
                            marginLeft: '15px'
                        }

                        const btnTextStyle = {
                            color: !isSoldOut ? '#000000' : '#F72626',
                            fontSize: !isSoldOut ? '26px' : '20px',
                            fontWeight: 'bold',
                            marginLeft: '15px'
                        }

                        const h1Style2 = {
                            color: '#87B9CF',
                            fontSize: '40px',
                            fontWeight: 'bold',
                            marginTop: '15px',
                        }

                        // Styles end

                        return (

                            <div key={id} style={mainRectangleStyle}>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        component: 'form',
                                        onSubmit: (event) => {
                                            event.preventDefault();
                                            const formData = new FormData(event.currentTarget);
                                            const formJson = Object.fromEntries(formData.entries());
                                            const email = formJson.email;
                                            const amount = formJson.amount;

                                            updateData = {
                                                name: name,
                                                type: type,
                                                tier: tier,
                                                price: price,
                                                available_tickets: Number(available_tickets) - Number(formJson.amount),
                                                total_tickets_created: total_tickets_created,
                                            }

                                            const updatedData = {
                                                ...updateData,
                                                price1: Number(amount) * Number(price),
                                                name: name,
                                                tier: tier,
                                                type: type,
                                                amount: amount,
                                                email: email, // Include email in the data to be sent to the controller
                                                available_tickets: Number(available_tickets) - Number(formJson.amount),
                                                total_tickets_created: total_tickets_created,
                                            };
                                            //update available tickets
                                            Inertia.put(route('showticket.update', id), updatedData);
                                            handleClose();
                                        },
                                    }}
                                >
                                    <DialogTitle>Checkout</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            You are about checkout <span style={{ fontWeight: 'bold' }}> {formData.amount} {type} {tier} {name}</span> tickets for a total of <span style={{ fontWeight: 'bold' }}>KSH {Number(formData.amount) * Number(price)}</span>
                                        </DialogContentText>
                                        <SelectInput
                                            label="Ticket Amount"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={e => setData('amount', e.target.value)}
                                        >
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </SelectInput>
                                        <TextInput
                                            className="w-full pb-8 pr-6 lg:w-1/2"
                                            label="Enter email then proceed to checkout"
                                            name="email"
                                            errors={errors.email}
                                            value={formData.email}
                                            onChange={e => setData('email', e.target.value)}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <LoadingButton
                                            loading={processing}
                                            type='submit'
                                        >
                                            Checkout
                                        </LoadingButton>
                                    </DialogActions>
                                </Dialog>
                                <div style={innerLeftRectangleStyle}>
                                    <div>
                                        <h3 style={h3Style}>{tier}</h3>
                                        <h1 style={h1Style}>{name}</h1>
                                    </div>
                                </div>

                                <div className="sm:items-center">
                                    {/* h1Style2*/}
                                    <h1 style={h1Style2}><span>KSH </span>{price}<span>*</span></h1>
                                </div>
                                <div style={buyButton}>
                                    <div style={buttonStyle}>
                                        <br></br><br></br><br></br>
                                        <button onClick={handleClickOpen} style={btnTextStyle} disabled={isSoldOut}> {!isSoldOut ? 'Buy >' : 'SOLD OUT'}</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })
            }


        </div >

    );
};

export default TicketItem;
