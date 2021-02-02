const container = document.querySelector(".customers")
console.log(container)
console.log(customers) 
let customer = customers[0]
console.log(customer.name.title)
console.log(customer.picture.thumbnail)
// // create a dom element
// const customerElement = document.createElement("h2")
// customerElement.innerText = "customer.title"
// //insert it into the dom
// container.appendChild(customerElement)
// //create a dom element for menu image


// const customerName = document.createElement("h4")
// customerName.innerText="name: ${customer.name.first} ${customer.name.last}"
// container.appendChild(customerName)


for (let customer of customers) {
    const customerImg = document.createElement("img")
    customerImg.src = customer.picture.thumbnail
    //insert it into the dom
    container.appendChild(customerImg)
    
}

for (let customer of customers) {
    const customerElement = document.createElement("h2")
    customerElement.innerText =`${customer.name.first} ${customer.name.last}`
  //insert it into the dom
    container.appendChild(customerElement)
  }

for (let customer of customers) {
    const customerEmail = document.createElement("div")
    customerEmail.innerText = `${customer.email}`
    container.appendChild(customerEmail)
}



