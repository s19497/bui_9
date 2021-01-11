import { FaStar } from 'react-icons/fa';

function Star({ index, value, rating, setRating }) {
    return (
        <div>
            <FaStar color={value ? "orange" : "#aaa"} onClick={() => setRating(index + 1)} />
        </div>
    )
}

export default Star;