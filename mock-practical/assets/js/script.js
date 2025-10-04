const desc = document.getElementById("desc");
const addBtn = document.getElementById("add-btn");
const printBtn = document.getElementById("print");
const customer = document.getElementById("customer");
const num = document.getElementById("num");
const address = document.getElementById("address");
const date = document.getElementById("date");
const city = document.getElementById("city");
const itemName = document.getElementById("item-name");
const quantity = document.getElementById("quantity") || "";
const rate = document.getElementById("rate") || "";
const amount = document.getElementById("amount") || "";
const customerD = document.getElementById("customerD");
const numD = document.getElementById("numD");
const addressD = document.getElementById("addressD");
const dateD = document.getElementById("dateD");
const cityD = document.getElementById("cityD");
const itemNameD = document.getElementById("item-nameD");
const quantityD = document.getElementById("quantityD") || "";
const rateD = document.getElementById("rateD") || "";

const arrData = [];

printBtn.addEventListener("click", () => {
  console.log(customer.value);

  let dataObj = {
    name: customer.value,
    invNo: num.value,
    address: address.value,
    date: date.value,
    city: city.value,
    item: itemName.value,
    quantity: quantity.value,
    rate: rate.value,
  };
  arrData.push(dataObj);
  console.log(arrData);
  

  arrData.map((item, idx) => {
    desc.innerHTML=" "
    desc.innerHTML += `
            <tr>
                  <th scope="row">${idx+1}</th>
                  <td>${item.name}</td>
                  <td>${item.invNo}</td>
                  <td>${item.address}</td>
                  <td>${item.date}</td> 
                  <td>${item.city}</td> 
                  <td>${item.item}</td> 
                  <td>${item.quantity}</td> 
                  <td>${item.rate}</td> 
                  <td>${item.quantity * item.rate}</td> 
                </tr>
        `;
  });

});
