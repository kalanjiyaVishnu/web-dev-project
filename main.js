
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