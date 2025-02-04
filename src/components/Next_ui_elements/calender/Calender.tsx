import { EosIconsModifiedDate } from "@/icons/Icons";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker"; // Mantiene el tipo

interface CalendarProps {
  selectedDates: DateObject[];
  onChange: (dates: DateObject[]) => void;
  placeholder?: string;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  selectedDates,
  onChange,
  placeholder = "Fecha(s)", 
  iconClassName = "absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400",
  inputClassName = "w-full border rounded-xl p-2 pl-10 focus:outline-none hover:bg-gray-50 hover:cursor-pointer"
}) => {
  return (    
      <div className="relative flex items-center">
        <span className={`${iconClassName} flex-shrink-0`}>         
          <EosIconsModifiedDate />
        </span>
        <DatePicker
          multiple
          value={selectedDates}
          onChange={onChange}
          format="DD/MM/YYYY"
          placeholder={placeholder}
          inputClass={inputClassName} // Ajustes de ancho
        />
      </div>    
  );
  
};

export default Calendar;
