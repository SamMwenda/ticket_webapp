import logoImage from "@/images/logoBlack.png";

const imageSytle = {
    width: '60%', height: '80%', alignItems: 'center', marginLeft: '60px'
}
export default function Guest({ children }) {
    return (
 <div className="min-h-screen flex flex-col sm:justify-center items-center  bg-gray-100">
            <div>
                           <img src={logoImage} alt="logo" style={imageSytle} />

            </div>

            <div className="sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>

    );
}
