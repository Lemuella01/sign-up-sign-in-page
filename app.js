


const signUp = (e)=>{
e.preventDefault()


let fname = document.getElementById('fname').value,
    lname = document.getElementById('lname').value,   
    email = document.getElementById('email').value,
    pwd = document.getElementById('pwd').value;




    let formData = []

// console.log(fname, lname, email, pwd)

let exist = formData.length && JSON.parse(LocalStorage.getitem("formData")).some(data => data.fname.toLowercase()=== fname.toLowercase()&& data.lname.toLowercase()=== lname.toLowercase())


if (!exist){
  formData.push({fname, lname, email, pwd});
  localStorage.setItem("formData", JSON.stringify(formData));
}

}

document.querySelector("#btn").addEventListener("click", signUp)



const signIN =()=>{
  let email =document.querySelector('.email').value,
   pwd = document.querySelector(".pwd").value;



   let formData = JSON.parse(localStorage.getItem("formData"))
   let exist = formData.length && JSON.parse()
}