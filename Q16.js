function checkSeason(month) {
        if (month === 'September' || month === 'October' || month === 'November') {
          return 'Autumn';
        } else if (month === 'December' || month === 'January' || month === 'February') {
          return 'Winter';
        } else if (month === 'March' || month === 'April' || month === 'May') {
          return 'Spring';
        } else if (month === 'June' || month === 'July' || month === 'August') {
          return 'Summer';
        } else {
          return 'Invalid month';
        }
      }
    
      
      console.log(checkSeason('September'));  
      console.log(checkSeason('December')); 
      console.log(checkSeason('April'));
      console.log(checkSeason('August'));
      console.log(checkSeason('vasant'));      