const buttonEl = document.querySelectorAll(".button");
const tabs = document.querySelector(".tabs");
const articles = document.querySelectorAll(".content");
const color = document.getElementById("div")
const filea = document.getElementById("files");
const pic = document.getElementById("pic");
const h1El = document.getElementById("sorce");

filea.addEventListener("change", () => {
  pic.src = URL.createObjectURL(filea.files[ 0 ])
  h1El.innerHTML = `do you want to be your profile
  <button onclick="yes()"   style="color: white; background: rgb(202, 146, 255); padding: 5px;  margin-left: 20px; margin-top: -10px;">yes</button> 
   <button  margin-left: 0px; margin-top: -40px;  style="color: white; background: rgb(202, 146, 255); padding: 5px; display: flex;"  onclick="no()">no</button>`
})


function no(){
  h1El.textContent = 'click the Choose File and choose what you want'
  console.log("you dislike your profile")
}
function yes(){
  console.log("you change the profile")
  h1El.textContent = null
}



tabs.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  lssubmitsls.push(this)
  if (id) {
    buttonEl.forEach(function (btn) {
      btn.classList.remove("live");
    });
  }
  e.target.classList.add("live");

  articles.forEach((article) => {
    article.classList.remove("live");
  });

  const element = document.getElementById(id);
  element.classList.add("live");
});
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


