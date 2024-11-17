
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const username = document.querySelector('.username')
const submit = document.querySelector('.submit')
const span = document.querySelector('span')
const li = document.querySelector('p')
const h = document.querySelector('h4')

submit.addEventListener('click' , () => {
    let inputofemail = email.value ;
    let inputofpassword = password.value;
    let inpuofusername = username.value
    console.log(`user email : ${inputofemail} ${password}`)
    h.textContent = inpuofusername;
    span.textContent = inputofemail ;
    li.textContent = inputofpassword;
})
