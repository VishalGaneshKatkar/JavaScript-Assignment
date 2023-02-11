function giveGrades(score) {
        if (score >= 80 && score <= 100) {
          return 'A';
        } else if (score >= 70 && score <= 79) {
          return 'B';
        } else if (score >= 60 && score <= 69) {
          return 'C';
        } else if (score >= 50 && score <= 59) {
          return 'D';
        } else if (score >= 0 && score <= 49) {
          return 'F';
        } else {
          return 'Invalid score';
        }
      }
    
      console.log(giveGrades(85));  
      console.log(giveGrades(75));  
      console.log(giveGrades(65)); 
      console.log(giveGrades(55));  
      console.log(giveGrades(45));
      console.log(giveGrades(120));