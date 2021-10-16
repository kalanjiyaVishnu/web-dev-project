const email = document.getElementById("email");
const msg = document.getElementById('msg');
email.focus();
let isEmailopen = false;
email.addEventListener(
  "click",
  (e) => {
    document.body.addEventListener("click", () => {
      !isEmailopen && (email.style.backgroundColor = "transparent");
      isEmailopen = true;
    });
    isEmailopen && (email.style.backgroundColor = "white");
    console.log("mouse clicked");
    
  },
  true
);
email.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
const signin = document.getElementById("signin");
signin.addEventListener("click", () => {
  let reg = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  if (email.value.match(reg)) {
    console.log("Email is correct");
    msg.innerText='your are logged in';
    signin.innerText='log out?'
  } else{ console.log("Email is incorect");msg.innerText='mail is wrong';}
});

signin.addEventListener('mouseover',(e)=>{
    signin.classList.add('btn-warning');
})
signin.addEventListener('mouseleave',(e)=>{
    signin.classList.remove('btn-warning');
})
document.body.addEventListener('contextmenu',(e)=>{
  console.log('context menu is clicked',e.clientX,e.clientY);
  const newP = document.createElement('p');
  newP.innerText = 'yes working';
  newP.x
  document.body.appendChild(newP);
  e.preventDefault();
})