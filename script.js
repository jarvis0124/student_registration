//Display theme
//IIFE ELEMENT HOLDER
const docHolder = (function(){
    const body = document.querySelector('body');
    const header = document.getElementById('header');
    const pageHead = document.getElementById('pageHead');
    const container = document.getElementById("container");
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const tBody = document.querySelector('tBody');
    return{
        body, header, container, part1, part2, pageHead, tBody
    }
})()

//assigning body var to docHolder.body.
const body = docHolder.body;

function changeTheme(){
    let defaultTheme = "light";
    
    const themebtn = document.createElement('button');
    themebtn.id= "pagetheme"
     themebtn.innerHTML = "<i class=\"material-icons\">dark_mode</i>";
    
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
            defaultTheme = "light";
        }
        
    });


    docHolder.pageHead.appendChild(themebtn);
}    

changeTheme();


//form values
    const studentname = document.getElementById("studentname");
    const age = document.getElementById("age");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const studentId = document.getElementById("studentId");
    const submit = document.getElementById("submit");
    

//submit event
submit.addEventListener('click',getdata)


let studentsArr = JSON.parse(localStorage.getItem("studentsArr")) || [];

function getdata(event){
     event.preventDefault();  

     if(studentname.value === "" ||
         age.value === "" || 
         email.value === "" ||
         contact.value === "" || 
         studentId.value ===""){
            window.alert("Form cannot be empty");
            return;
     }


 // students array empty or from local storage  

   let student = {
        studentname: studentname.value,
        age: age.value,
        email: email.value,
        contact: contact.value,
        studentId: studentId.value,
    }


    studentsArr.push(student);
    localStorage.setItem("studentsArr", JSON.stringify(studentsArr));
    addtoTable(student)
    console.log(studentsArr)

    //clearing input field
    document.querySelectorAll("input").forEach(input =>{
        input.value = "";
    })


}
   const addtoTable = function(student){
    const tableRow = document.createElement("tr")
    tableRow.id = "tableRow";
    tableRow.style.border= "1px solid green";
    tableRow.innerHTML =
     `
    <td>${student.studentname}</td>
    <td>${student.age}</td>
    <td>${student.studentId}</td>
    <td>${student.email}</td>
    <td>${student.contact}</td>
    `;
    
    const edit = document.createElement('button');
    edit.innerHTML ="Edit";
    edit.id= "edit"
    edit.style.width= "70px";
    edit.style.height= "30px";

    const removeStudent = document.createElement('button');
    removeStudent.innerHTML = "Delete";
    removeStudent.id ="remove Student";
    removeStudent.style.width= "70px";
    removeStudent.style.height= "30px";
    removeStudent.style.marginLeft = "10px";
    removeStudent.addEventListener('click', (btn)=>{
        let info = btn.closest('tr');
        info.remove();

        let studentsArr = JSON.parse(localStorage.getItem("studentsArr")) || [];

        // Filter out the deleted student
    studentsArr = studentsArr.filter((student) => student.studentId !== student.studentId);
    localStorage.setItem("studentsArr", JSON.stringify(studentsArr));
    loadStudents();
    })
    
    tableRow.appendChild(edit);
    tableRow.appendChild(removeStudent);

     docHolder.tBody.appendChild(tableRow);
   }

   //appendind students object to table

   function loadStudents(){
    //getting sstudentsArr from local storage
  
    let studentsArr = JSON.parse(localStorage.getItem("studentsArr"))
    studentsArr.forEach(student => {
        addtoTable(student);
    });
   }



   document.onload = loadStudents();