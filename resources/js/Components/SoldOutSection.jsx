import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import { Link, usePage } from '@inertiajs/react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


library.add(faCircleExclamation)

const headerStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#FFFF',
    padding: '10px',
};

const BorderLinearProgress = styled(LinearProgress)({
    height: 15,
    width: '100%',
    borderRadius: 10,
    border: `2px solid #F72624`, // Set border color
    backgroundColor: '#FFFF',
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 10,
        backgroundColor: '#F72624',
    },

});



const SoldOutSection = () => {
    const { tickets } = usePage().props;
    const {
        data:ticketData,
    } = tickets;

    var percentage = 0;
    
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
        <div className="relative sm:flex sm:flex-col sm:space-evenly sm:items-center sm:top-20">

            <div className='sm:flex sm:flex-col'>
                <FontAwesomeIcon icon={["fa", "circle-exclamation"]} beat style={{ color: "#f72624", fontSize: '40px' }} />
                <h1 style={headerStyle}>
                    ULTRA IS <span style={{ fontSize: '20px' }}>{ parseInt(percentage) }%</span> SOLD OUT
                </h1>	                
            </div>
            <BorderLinearProgress variant="determinate" value={parseInt(percentage)} />
            <div className="p-12">
                <Link
                    href={route('showticket')} as="button"
                    className="ms-8 font-semibold"
                >
                    Buy Tickets Here &gt;
                </Link>
            </div>
        </div>
    );
};

export default SoldOutSection;
