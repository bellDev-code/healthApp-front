import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {format} from 'date-fns';

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

// {
//  day: 1,      // day of month (1-31)
//  month: 1,    // month of year (1-12)
//  year: 2017,  // year
//  timestamp,   // UTC timestamp representing 00:00 AM of this date
//  dateString: '2016-05-13' // date formatted as 'YYYY-MM-DD' string
// }

// mokup data - array
const attendance = [
  {
    id: 1,
    title: '제목입니다.',
    contents: '내용입니다.',
    date: '2023-04-01',
  },
  {
    id: 2,
    title: '제목입니다.',
    contents: '내용입니다.',
    date: '2023-04-27',
  },
];

export default function CalendarView() {
  const markedDates = attendance.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      initialDate={'2023-04-01'}
      enableSwipeMonths={true}
      markedDates={markedSelectedDates}
      onDayPress={day => {
        setSelectedDate(day.dateString);
      }}
    />
  );
}
