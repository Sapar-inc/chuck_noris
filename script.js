let joke = document.querySelector("#joke")
let random = document.querySelector("#random_btn")
let selectJoke = document.querySelector("#select_joke")
let showBtn = document.querySelector("#select_btn")
let searchJoke = document.querySelector("#search")
let searchBtn = document.querySelector("#search_btn")


random.addEventListener("click", async () =>{
   let responce = await fetch("https://api.chucknorris.io/jokes/random")
   let data = await responce.json()
        joke.innerHTML += `<p>${data.value}</p>`     
})

const drawSelect = async () =>{
    joke.innerHTML = ""
    let responce = await fetch("https://api.chucknorris.io/jokes/categories")
    let data = await responce.json()
    for(item of data){
        selectJoke.innerHTML += `<option>${item}</option>`
    }    
}
drawSelect()
showBtn.addEventListener("click", async ()=>{
    joke.innerHTML = ""
    let responce = await fetch(`https://api.chucknorris.io/jokes/random?category=${selectJoke.value}`)
    let data = await responce.json()
    console.log(data)
    joke.innerHTML += `<p>${data.value}</p>`  
})
searchBtn.addEventListener("click", async () =>{
    joke.innerHTML = ""
    let responce = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchJoke.value}`)
    let data = await responce.json()
    // const randomJoke = Math.floor(Math.random() * (data.length - 1))
    let rand = Math.floor(Math.random() * data.result.length)
    joke.innerHTML += `<p>${data.result[rand].value}</p>`   
 })
