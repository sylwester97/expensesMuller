import './ExpenseDate.css';

function ExpenseDate(props) {
    const date = props.date.toLocaleString('pl-PL', { month: 'long' });
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('pl-Pl', { day: '2-digit' });
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{date}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>)
}


export default ExpenseDate; 