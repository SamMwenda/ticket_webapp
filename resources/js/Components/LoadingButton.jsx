export default function LoadingButton({ loading, className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-black border border-gray-300 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-white border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150'
            } ` + className
            }
        >
            {loading && <div className="mr-2 btn-spinner" />}
            {children}
        </button>
    );
};
