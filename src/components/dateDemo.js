import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateDemo = () => {
    const [startDate, setStartDate] = useState(new Date());


    return (
        <DatePicker className="border-red-100" selected={startDate} onChange={(date) => setStartDate(date)}/>
    );
};

export default DateDemo;