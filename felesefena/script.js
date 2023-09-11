var alls = document.getElementById('humaza')
var Enput = document.getElementById('Enput')
var email = document.getElementById('Email')
var passowrd = document.getElementById('Password')
var numberEl = document.getElementById('numberEl')
var Numb = document.getElementById('Numb')
let inputs = document.querySelectorAll('input')
let errorMesage = document.getElementById('error')

let mesage = []

function SubEl() {
    alls.innerHTML = `
    <form>
    <input type="email" placeholder="Enput your email" id ="Email" required/>
    <input type="password" placeholder="Enput your passowrd" id="Password" required/>
    <button type="submit" onclick="ElEl()">sumbit</button>
</form>`
mesage.push('its.not done')
        
}
function ElEl() {
        alls.innerHTML = `
        <form action="#">
        <input type="number" placeholder="input your phone number" id ="numberEl" required />
        <button type="submit" onclick="hamza()">Submit</button>
        </form>
        `     
    

}
function hamza() {
        alls.innerHTML = `
        <form action="#">
        <input type="number" placeholder="Enput the number we sent " id ="Numb" required />
        <button type="submit" onclick="doit()">Submit</button>
    </form>`

}
function doit() {
        alls.innerHTML = `
        <a href="/index.html"><h1 onclick="how()" href="">You are done please come back after 24 hour later to sign-in</h1></a>
        `
}
