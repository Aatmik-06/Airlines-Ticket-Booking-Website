function datashow() {
  // e.preventDefault();
   

  let storedGender = localStorage.getItem("gender");
  let storedName = localStorage.getItem("Name");
  let storedEmail = localStorage.getItem("Email");
  let storedNationality = localStorage.getItem("Nationality");
  let storedYourNumber = localStorage.getItem("Your Number");
  let storedAddress = localStorage.getItem("Address");
  let storedFlightNumber = localStorage.getItem("Flight Number");
  let storedDateOfBirth = localStorage.getItem("Date Of Birth");
  let storedFrom = localStorage.getItem("From");
  let storedTo = localStorage.getItem("To");
  let storedDeparture = localStorage.getItem("Departure");
  let storedClass = localStorage.getItem("Class");
  let storedPassangers = localStorage.getItem("Passangers");
  let storedMeal = localStorage.getItem("Meal");

  document.getElementById("data1").innerHTML ="Gender - "+storedGender;
  document.getElementById("data2").innerHTML = "Name - " +storedName;
  document.getElementById("data3").innerHTML = "Email - " +storedEmail;
  document.getElementById("data4").innerHTML = "Nationality - " +storedNationality;
  document.getElementById("data5").innerHTML = "Your Number - " +storedYourNumber;
  document.getElementById("data6").innerHTML = "Address - " +storedAddress;
  document.getElementById("data7").innerHTML = "Flight Number - " +storedFlightNumber;
  document.getElementById("data8").innerHTML = "Date Of Birth - " +storedDateOfBirth;
  document.getElementById("data9").innerHTML = "From - " +storedFrom;
  document.getElementById("data10").innerHTML = "To - " + storedTo;
  document.getElementById("data11").innerHTML = "Departure - " + storedDeparture;
  document.getElementById("data12").innerHTML = "Class - " + storedClass;
  document.getElementById("data13").innerHTML = "Number Of Passengers - " + storedPassangers;
  document.getElementById("data14").innerHTML = "Meal - " + storedMeal;
  
  }
  
  datashow();
  