let username = prompt("What is your name")
let product1 = prompt("1st product name")
let product2 = prompt("2nd product name")
let price1 = +prompt("product price 1")
let price2 = +prompt("product price 2")


function main(username, product1, product2, price1, price2) {
    return " your name is " + username + " your 1st product name" + product1 + " your 2nd product name" + product2 + " your 1st product price " + price1 + " your 2nd product price" + price2
}

console.log(main(username, product1, product2, price1, price2,))
