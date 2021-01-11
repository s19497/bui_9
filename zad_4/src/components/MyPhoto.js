import StarRating from "./StarRating/StarRating";
import ThumbRating from "./ThumbRating";

function MyPhoto(props) {
    const { url, title, date } = props;

    return (
        <div className="MyPhoto">
            <img src={url} />
            <div>{title}</div>
            <div>{date.toISOString()}</div>
            <StarRating />
            <ThumbRating />
        </div>
    )
}

export default MyPhoto;