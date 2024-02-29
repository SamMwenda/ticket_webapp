import centerImage from "@/images/center.png";

const imageSytle = {
    width: '100%', height: '100%', alignItems: 'center', paddingTop: '70px',
}
const CenterPiece = () => {
    return (

        <div >
            <img src={centerImage} alt="centerpiece" style={imageSytle} />
        </div>

    );
};

export default CenterPiece;
