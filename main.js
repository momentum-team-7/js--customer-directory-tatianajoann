const container = document.querySelector(".customers")
let customer = customers[0]

// window.addEventListener("load", () => renderMenu())


for (let customer of customers) {
    const customerdiv = document.createElement("div")

    const customerImg = document.createElement("img")
    customerImg.src = customer.picture.thumbnail
    customerdiv.appendChild(customerImg)
    container.appendChild(customerdiv)

    const customerElement = document.createElement("h2")
    customerElement.innerText =`${customer.name.first} ${customer.name.last}`
    customerdiv.appendChild(customerElement)

    const customerEmail = document.createElement("div")
    customerEmail.innerText = `${customer.email}`
    customerdiv.appendChild(customerEmail)

    const customerAddress = document.createElement("div")
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}`
    customerdiv.appendChild(customerAddress)
    
    const customerAddress2 = document.createElement("div")
    customerAddress2.innerText = `${customer.location.city} ${nameToAbbr(customer.location.state)}`
    customerdiv.appendChild(customerAddress2)

}

// location: {
//       street: {
//         number: 4339,
//         name: 'Green Rd'
//       },
//       city: 'Great Falls',
//       state: 'Alabama',
//       country: 'United States',
//       postcode: 66032,
//       coordinates: {
//         latitude: '11.2090',
//         longitude: '139.7209'



