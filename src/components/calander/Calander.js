// creat a calander that can shows the date and time of restaurant table booking
import React, { useState } from "react";
import CalendarTemplate from "availability-calendar-react";

const Calander = () => {
	const [date, setDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [selectedTable, setSelectedTable] = useState(1);

	return (
		<div>
			Calander
			<CalendarTemplate />
		</div>
	);
};

export default Calander;
