//find all selectors
let unitItems = document.querySelectorAll('.unit__item')

//create function for unit data
function getUnitData() {
    //loop through unitItems
    unitItems.forEach( (element, index) => {
        //find all selectors with unit-number
        let unitNumber = element.querySelectorAll('.unit-number')
        //find selectors with the conversion data attribute
        let conversionType = element.querySelectorAll('[data-conversion]')
        //get value of input
        let unitInput = parseInt(document.getElementById('unit-el').value)
        //apply unit number for each unit item
        unitNumber.forEach(item=>item.textContent = unitInput)
        
        //apply conversion based on unit type
        conversionType.forEach(item=>{
            if(item.dataset.conversion == 'feet') item.textContent = (unitInput * 3.2808).toFixed(3)
            if(item.dataset.conversion == 'meter') item.textContent = (unitInput / 3.2808).toFixed(3)
            if(item.dataset.conversion == 'liter') item.textContent = (unitInput * 0.2641722).toFixed(3)
            if(item.dataset.conversion == 'gallon') item.textContent = (unitInput * 3.785).toFixed(3)
            if(item.dataset.conversion == 'kilo') item.textContent = (unitInput * 2.2046).toFixed(3)
            if(item.dataset.conversion == 'pound') item.textContent = (unitInput / 2.2046).toFixed(3)
        })
    })
}