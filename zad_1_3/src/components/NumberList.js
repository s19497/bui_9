import MyNumber from './MyNumber';

function NumberList({ numbers, setNumbers, table }) {
    const inner = (
        <div>
            {
                numbers.map((value, index) =>
                    <MyNumber key={index} {...{ numbers, setNumbers, table, value, index }} />)
            }
        </div>
    )
    if (table) {
        return (
            <table>
                {inner}
            </table>
        )
    } else {
        return (
            <ul>
                {inner}
            </ul>
        );
    }
}

export default NumberList;