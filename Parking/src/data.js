const weekly_freq = ['Every', '1st and 3rd', '2nd and 4th'];
const time_of_day = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', ]

export const street_table = [
  {
    id: 0, 
    street_name: 'Divisadero',
    // weekly_freq: 'EVERY',
    // daily_freq: [0,1,0,1,0,0,1],
    // time_of_day: 6,    
  },
  {
    id: 1, 
    street_name: 'Fell',
    // weekly_freq: '1&3',
    // daily_freq: [0,0,0,0,0,0,0],
    // time_of_day: 4,    
  },
  {
    id: 2, 
    street_name: 'Oak',
    // weekly_freq: '2&4',
    // daily_freq: [0,0,0,0,0,0,0],
    // time_of_day: 10,    
  },
  {
    id: 3, 
    street_name: 'Baker',
    // weekly_freq: 'EVERY',
    // daily_freq: [0,0,0,0,0,1,0],
    // time_of_day: 9,    
  },
  {
    id: 4, 
    street_name: 'Grove',
    // weekly_freq: 'EVERY',
    // daily_freq: [0,1,0,0,0,0,0],
    // time_of_day: 12,    
  },
];

export const current_parked = {
  on: street_table[3],
  at: street_table[4],
  expire_time: 'Date'
};
