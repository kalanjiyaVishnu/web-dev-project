
const tabsitems = document.querySelectorAll('.tab-items');




function func1(e)
{
    remover();
    this.classList.add('border');
}
function remover(){
    tabsitems.forEach(x=>x.classList.remove('border'));
}
tabsitems.forEach(x=>x.addEventListener('click',func1));

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');
const signIn = document.getElementById('signIn');


// nav.onmouseover =()=>
// {
//         console.log('mouse hevering');
//         nav.onmouseleave =() =>
//         {
//             removeCLS();
//             remflag = 0;
//         }
// };


// var flag =0;
// var remflag = 1;
//         signIn.onmouseenter = () =>
//         {
//             if(signIn.classList.contains('signIn-active'))
//             {
//             flag = 1;
//             }
//             console.log(flag);
//         }

nav.onmouseleave = ()=> {
    removeCLS();
        // if(flag)
        // {
        //     signIn.onmouseleave = () =>
        //     {
        //         removeCLS();
        //         console.log('yes the onmouse leave works');
        //         remflag =0;
        //     }
        // }
    // else
    // {
    // nav.onmouseover=() =>
    // {
    //     flag = 1;
    //     nav.onmouseleave =()=>
    //     {
    //         removeCLS();
    //     }
    // }
    // }
    };
    // nav.onmouseover = ()=> {
    //     btn.classList.add('btn-active');
    //     // signIn.classList.add('signIn-active');

    // };
    
btn.addEventListener('click',()=>
{
    nav.classList.toggle('active');
    // btn.classList.toggle('btn-active');
    // btn.classList.toggle('btn-hov-active');
    signIn.classList.toggle('signIn-active');
    
    
    
    console.log(signIn);
});
function removeCLS()
{
    nav.classList.remove('active');
    btn.classList.remove('btn-active');
    signIn.classList.remove('signIn-active');
}



// const formBtn = document.getElementById('form-btn');
// const form = document.querySelector('.form-container');
// formBtn.addEventListener('click',()=>
// {
//     form.classList.toggle('form-active');
// })


const imgcontainer = document.getElementById('carosalH');

const slen = imgcontainer.querySelectorAll('img').length;
var idx =0;
carosalRun= ()=>{
if(idx>slen-1)
{
    idx =0;
}
imgcontainer.style.transform = `translateX(${-idx*100}%)`
console.log(idx);
idx++;

}
setInterval(() => {
   carosalRun(); 
}, 2000);