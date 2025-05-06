//Display theme
//IIFE ELEMENT HOLDER
const docHolder = (function(){
    const body = document.querySelector('body');
    const header = document.getElementById('header');
    const pageHead = document.getElementById('pageHead');
    const container = document.getElementById("container");
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");

    return{
        body, header, container, part1, part2, pageHead
    }
})()

//assigning body var to docHolder.body.
const body = docHolder.body;

function changeTheme(){
    let defaultTheme = "light";
    
    const themebtn = document.createElement('button');
    themebtn.id= "pagetheme"
     themebtn.innerHTML = "<i class=\"material-icons\">dark_mode</i>";
     themebtn.setAttribute('style', 'display:flex; justify-content:center; align-items: center; width: 60px; height:35px;');
    
    themebtn.addEventListener('click', ()=>{
        if(defaultTheme == "light"){
            themebtn.innerHTML = "<i class=\"material-icons\">light_mode</i>";
            body.style.backgroundColor ="black";
            body.style.color= "white";
            defaultTheme = "dark"
    
        }else{
            themebtn.innerHTML = "<i class=\"material-icons\">dark_mode</i>";
            body.style.backgroundColor ="white";
            body.style.color= "black";
            defaultTheme = "light";;
        }
        
    });


    docHolder.pageHead.appendChild(themebtn);
}    

changeTheme();