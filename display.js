async function datashow() {
    let table = `
    
    <table>
    <h1>Passenger Details </h1>
      <tr>
       <th>Gender</th>
       <th>Name</th>
       <th>Email</th>
       <th>Nationality</th>
       <th>Number</th>
       <th>Address</th>
       <th>Flight Number</th>
       <th>Date Of Birth</th>
       <th>From</th>
       <th>To</th>
       <th>Departure Date</th>
       <th>Class</th>
       <th>Passangers No.</th>
       <th>Meal</th>
      </tr>
    `;
  
  let url ="http://localhost:3000/customer";
  let myobj = await fetch(url);

  
  // console.log(myobj);
  let data = await myobj.json();// converts mydata from response object to json  
  // console.log(data);
  data.map((key)=>{
    table +=`
    <tr>
      <td>${key.Gender}</td>
      <td>${key.Name}</td>
      <td>${key.Email}</td>
      <td>${key.Nationality}</td>
      <td>${key.YourNumber}</td>
      <td>${key.Address}</td>
      <td>${key.FlightNumber}</td>
      <td>${key.DateOfBirth}</td>
      <td>${key.From}</td>
      <td>${key.To}</td>
      <td>${key.Departure}</td>
      <td>${key.Class}</td>
      <td>${key.Passengers}</td>
      <td>${key.Meal}</td>
    </tr>
    `;
  });
  table +=`</table>`;
  document.getElementById("table2").innerHTML = table; 
  }
  
  datashow();
  