'use client';

import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const [date, setDate] = useState<String>();

  useEffect(() => {
    getDate();
  }, []);

  async function getDate() {
    const currentDay = new Date().getDate();
    const nameMonth = new Intl.DateTimeFormat('en-US', {
      month: 'short'
    }).format(new Date());
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    const d = new Date();
    let day = weekday[d.getDay()];
    const currentDate = day + ', ' + nameMonth + ' ' + currentDay;
    setDate(currentDate);
  }

  return (
    <div>
      <p>hello</p>
      <p>{date}</p>
    </div>
  );
}
