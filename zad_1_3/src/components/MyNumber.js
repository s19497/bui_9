import { useEffect, useState } from "react";

function MyNumber(props) {

    const [base, setBase] = useState(10);
    const bases = { BIN: 2, OCT: 8, DEC: 10, HEX: 16 };

    useEffect(() => setBase(10), [props.numbers]);

    const inner = (
        <div>
            <div>
                {props.value.toString(base)}
            </div>
            <button onClick={() => {
                let newNumbers = [...props.numbers];
                newNumbers.splice(props.index, 1);
                props.setNumbers(newNumbers);
                // setHidden(true);
            }}>
                Delete
            </button>

            {Object.entries(bases).map(([key, value]) =>
                <button className={base === value ? "active" : ""} key={key} onClick={() => setBase(value)}>{key}</button>
            )}
        </div>
    );

    if (props.table) {
        return (
            <tr>{inner}</tr>
        )
    } else {

        return (
            <li>
                {inner}
            </li>
        );
    }
}

export default MyNumber;
