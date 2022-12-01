console.log(
    " A student will not be allowed to sit in the exam if his/her attendance is less than 75%. if he/she has medical causes reduce attendance criteria to 60%. Ask the user if he/she has a medical cause or not ( 'Y' or 'N' ) and print accordingly. You were given a total no classes and total classes attended by the student. "
  );
  
  var totalClasses = 250;
  console.log('Total Classes : ' + totalClasses);
  var attendedClasses = 200;
  console.log('Total Classes Attended: ' + attendedClasses);
  var percent = (attendedClasses / totalClasses) * 100;
  console.log('self attendance percentage: ' + percent + '%');
  
  if (percent < 75) {
    var choice = prompt(
      "are you having any medical issues? If Yes type 'Yes' or else type 'No' "
    );
    if ((choice >= 'a' && choice <= 'z') || (choice >= 'A' && choice <= 'Z')) {
      switch (choice) {
        case 'Yes':
          console.log('Yes');
          console.log('True');
          break;
        case 'No':
          console.log('No');
          
          console.log('False');
          break;
        case 'y':
          console.log('y');
          
          console.log('True');
          break;
        case 'n':
          console.log('n');
          
          console.log('False');
          break;
        default:
          console.log('update valid input');
      }
    }
  } else {
    
    console.log('True');
  }