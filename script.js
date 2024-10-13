function assign() {
      let personAge = 25; // Replace with the actual age
      let isStudent = true;0 // Replace with true if the person is a student, otherwise return false
    
      if (personAge < 18 && isStudent) {
        console.log("Junior Class");
      } else if (personAge == 18 && isStudent) {
        console.log("Senior Class");
      } else if (personAge > 18 && personAge <= 25) {
        console.log("Advance Class");
      } else {
        console.log("Not in school");
      }
    }

 assign();