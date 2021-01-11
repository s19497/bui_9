import { useState } from 'react';
import Star from './Star';
import { averageSum, fillArray } from '../../util';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [ratings, setRatings] = useState([]);

    return (
        <div className="StarRating">
            <div>
                {fillArray(rating, () => 1).concat(fillArray(5 - rating, () => 0)).map((value, index) => <Star {...{ value, index, setRating }} />)}
            </div>
            <div>Average rating {averageSum(ratings)}</div>
            <button onClick={
                () => {
                    ratings.push(rating);
                    setRating(0);
                }
            }>
                Rate
            </button>
        </div>
    )
}

export default StarRating;