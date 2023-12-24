const add = document.querySelector('#increment')
const remove = document.querySelector('#decrement')
let result = document.querySelector('#result')

let value = 0
add.addEventListener('click', function(e) {
    if(value >= 10){
        alert("Not greater than 10")
    }
    else {
        value = value + 1
        result.innerHTML = value
    }
})

remove.addEventListener('click', function(e) {
    if(value <= 0) {
        alert('Not less than 0')
    }
    else {
        value = value - 1
        result.innerHTML = value
    }
})