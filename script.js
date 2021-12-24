const options = window.location.search

const option = options.split('?')

const name = option[1].split('=')[1].replace('%', ' ')
const phone = option[2].split('=')[1]
const email = option[3].split('=')[1]
const src = option[4].split('=')[1]


function change () {
    document.getElementById("name").innerText = name
    document.getElementById("phone").innerText = phone
    document.getElementById("email").innerText = email
    document.getElementById("src").src = src;
}

change()

