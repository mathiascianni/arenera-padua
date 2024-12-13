import BackNumber from "./BackNumber"

const HistorySegments = ({ number, children }) => {
    return (
        <div className="relative">
            <BackNumber number={number} />
            <p>{children}</p>
        </div>
    )
}


export default HistorySegments