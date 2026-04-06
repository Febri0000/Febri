//output console
console.log("pesan ini tamppil diconsole")

//output alert
alert("Selamat datang")

//
document.getElementById("nama")
.innerHTML = "Nama saya Febri"

//
let pesan = "Belajar JS  menyenangkan"
document.getElementById("pesan").innerHTML = pesan

//array
let kompetensi = ["Fullstak", "Project Manager", "UI/UX"]
document.getElementById("kompetensi").innerHTML = kompetensi[2]

//perulangan
kompetensi.forEach(element => {
    //document.getElementById("kompetensi").innerHTML += 
    `<li>${element}</li>`
    // cara kedua
    document.getElementById("kompetensi").innerHTML += "<li>"+
    element +"</li>"
});