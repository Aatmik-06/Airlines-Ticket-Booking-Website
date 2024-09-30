async function datashow() {
    let table = `
    
    <table>
    <h1>Passenger Details </h1>
      <tr>
       
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
    
      <td>Gender - ${key.Gender}</td>
      <td>Name - ${key.Name}</td>
      <td>Email - ${key.Email}</td>
      <td>Nationality - ${key.Nationality}</td>
      <td>Contact - ${key.YourNumber}</td>
      <td>Address - ${key.Address}</td>
      <td>Flight Number - ${key.FlightNumber}</td>
      <td>Date Of Birth - ${key.DateOfBirth}</td>
      <td>From - ${key.From}-</td>
      <td>To - ${key.To}</td>
      <td>Departure Date - ${key.Departure}</td>
      <td>Class - ${key.Class}</td>
      <td>Meal - ${key.Meal}</td>
    </tr>
    `;
  });
  table +=`</table>`;
  document.getElementById("data1").innerHTML = table; 
  }
  
  datashow();
  