  
document.getElementById('btn').addEventListener('click',insert);

async function insert(){

  try{
    let myGender =document.getElementById("gender").value;
    let myName =document.getElementById("Name").value;
    let myEmail =document.getElementById("Email").value;
    let myNationality =document.getElementById("Nationality").value;
    let myYournumber =document.getElementById("Your number").value;
    let myAddress =document.getElementById("Address").value;
    let myFlightNumber =document.getElementById("Flight Number").value;
    let myDateofbirth =document.getElementById("Date Of Birth").value;
    let myFrom =document.getElementById("From").value;
    let myTo =document.getElementById("To").value;
    let myDeparture =document.getElementById("Departure").value;
    let myClass =document.getElementById("Class").value;
    let myPassengers =document.getElementById("Passengers").value;
    let myMeal =document.getElementById("Meal").value;
    
    if ( myGender === "" || 
      myName === "" || 
      myEmail === "" ||
      myNationality === "" ||
      myYournumber === "" || 
      myAddress === "" ||
      myFlightNumber === "" ||
      myDateofbirth === "" ||
      myFrom === "" ||
      myTo === "" ||
      myDeparture === "" ||
      myClass === "" ||
      myPassengers === "" ||
      myMeal === "" 
    ){
      alert("All fields are mandatory");
    }else{
    let url  = 'http://localhost:3000/customer';

    let response = await fetch(url,{
        method: "POST",
        body:JSON.stringify({
            Gender:myGender,
            Name:myName,
            Email:myEmail,
            Nationality:myNationality,
            YourNumber:myYournumber,
            Address:myAddress,
            FlightNumber:myFlightNumber,
            DateOfBirth:myDateofbirth,
            From:myFrom,
            To:myTo,
            Departure:myDeparture,
            Class:myClass,
            Passengers:myPassengers,
            Meal:myMeal 
        }),
        headers:{
            "Content-type": "application/json;charset=UTF-8"
        }
    })
    window.location.href = "checkout.html";
    console.log(response);
    let data = await response.json();
    console.log(data);
    alert('Proceeding to checkout page')
  }
  

  }catch(error){
    console.error("Error:",error);
    alert('Error while adding data')
  }
  
}