const Notification = ({ message, type, onClose }) => {
    const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 ${backgroundColor} text-white rounded-lg shadow-lg transition-opacity duration-500 opacity-100`}
        >
            {message}
            <button
                className="ml-4 text-white font-bold"
                onClick={onClose}
            >
                ✖
            </button>
        </div>
    );
};

export default Notification