import lineupImage from "@/images/lineup.png";

import listArtist from "@/models/Artist";

const imageSytle = {
    width: '20%', height: '10%', alignItems: 'center', paddingTop: '70px'
}

const textStyle = {
    fontFamily: 'Poppins, san Serif',
    fontWeight: 'bold',
    color: 'white',
};

const LineUpSection = () => {

    // Group artists into rows with two columns per row
    const rows = [];
    for (let i = 0; i < listArtist.length; i += 5) {
        const row = listArtist.slice(i, i + 5);
        rows.push(row);
    }

    return (
        <div className="relative sm:flex sm:flex-col sm:space-evenly sm:items-center bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">

            <img src={lineupImage} alt="lineup" style={imageSytle} />

            <div>
                {rows.map((row, index) => (
                    <div key={index} style={{ display: 'flex', margin: '20px' }}>
                        {row.map((artist, i) => (
                            <div key={i} style={{ flex: 1, textAlign: 'center', margin: '20px' }}>
                                <img src={artist.image} alt={artist.name} />
                                <div style={textStyle}>{artist.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LineUpSection;
