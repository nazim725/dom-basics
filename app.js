// document.getElementById('demo').innerHTML = 'Hello World!' //getElementById

// const x = document.getElementsByClassName('intro')
// document.getElementById('demo').innerHTML = x.innerHTML  //getElementByClassName

// document.getElementById('p1').innerHTML = 'New text!' //Text change
// document.getElementById('image').src =
//   'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' //Add image
function myFunction() {
  let x = document.getElementById('numb').value
  console.log(x)
  let text
  if (isNaN(x) || x < 1 || x > 10) {
    text = 'Input not valid'
  } else {
    text = 'Input OK'
  }
  document.getElementById('demo').innerHTML = text
}
// form data

// add css
document.getElementById('p2').style.color = 'blue'

// onchange
function upperCase() {
  const x = document.getElementById('fname')
  const y = x.value.toUpperCase()
  document.getElementById('form-data').innerHTML = y
}

// onclick
function displayDate() {
  document.getElementById('date').innerHTML = Date()
}

// addeventlistenar

document.getElementById('myBtn').addEventListener('click', function () {
  alert('Hello World!')
})

var x = document.getElementById('myBtn')
x.addEventListener('mouseover', myFunction)
x.addEventListener('click', mySecondFunction)
x.addEventListener('mouseout', myThirdFunction)

function myFunction() {
  document.getElementById('demo').innerHTML += 'Moused over!<br>'
}

function mySecondFunction() {
  document.getElementById('demo').innerHTML += 'Clicked!<br>'
}

function myThirdFunction() {
  document.getElementById('demo').innerHTML += 'Moused out!<br>'
}

// create element
const details = document.getElementById('details')
const div = document.createElement('div')
div.classList.add('col')
div.innerHTML = `<p>Hello Card</p>`
details.appendChild(div)
