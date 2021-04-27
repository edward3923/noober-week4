window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Create a variable for the passengers data
  let passengerList = json

  // Loop through the passengers data
  for (let i = 0; i < passengerList.length; i++) {
    // Create a variable to store each passenger in memory
    let passengerData = passengerList[i]

    // Create a variable for each ride field
    let passengerName = passengerData.passengerDetails.first + ` ` + passengerData.passengerDetails.last
    let passengerPhone = passengerData.passengerDetails.phoneNumber

    let pickupAddress = passengerData.pickupLocation.address
    let pickupAddressRegion = passengerData.pickupLocation.city + `, ` + passengerData.pickupLocation.state + ` ` + passengerData.pickupLocation.zip

    let dropoffAddress = passengerData.dropoffLocation.address
    let dropoffAddressRegion = passengerData.dropoffLocation.city + `, ` + passengerData.dropoffLocation.state + ` ` + passengerData.dropoffLocation.zip

    // Store number of passengers
    let numPassengers = passengerData.numberOfPassengers

    // Variable to store the level of service
    let serviceLevel

    // Variables to store additional fonts
    let textSize
    let border


    // If the serviceLevel is specified as Purple, set the level to Purple
    if (passengerData.purpleRequested) {
      serviceLevel = `Noober Purple`
      textSize = `text-4xl`
      border = `border-purple-500`
    } 
    // If the number of passengers is greater than 3, need to set to XL
    else if (numPassengers > 3) {
      serviceLevel = `Noober XL`
      textSize = `text-3xl`
      border = `border-gray-900`
    }
    // All other cases will be set to X level
    else {
      serviceLevel = `Noober X`
      textSize = `text-2xl`
      border = `border-green-500`
    }

    // Create a variable for the HTML element we're going to add to
    let passengerAddition = document.querySelector(`.rides`)

    // Insert HTML into the rides element, using the data from each passenger
    passengerAddition.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl ${textSize} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${serviceLevel}</span>
    </h1>
  
    <div class="border-4 ${border} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupAddress}</p>
          <p>${pickupAddressRegion}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffAddress}</p>
          <p>${dropoffAddressRegion}</p>
        </div>
      </div>
    </div>
    `)







  }





})