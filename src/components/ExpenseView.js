import ExpenseItem from "./ExpenseItem";
export default function ExpenseView(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date;
    return (
        <ExpenseItem
            props = {props}
        />
    );
}