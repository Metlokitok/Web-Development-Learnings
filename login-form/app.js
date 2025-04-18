// Declares Variable

const loginPrompt=document.querySelector(".login-prompt")
const promptBtn =document.querySelector(".login-prompt button")

const formBox = document.querySelector(".login-form")
const msgBox = document.querySelector(".login-form p")

const form = document.querySelector("#login-info")
const submitBtn = document.querySelector("#submit")

const confirmBox = document.querySelector(".login-confirmed")


// Listener for login promp
promptBtn.addEventListener('click',()=>{
    loginPrompt.classList.toggle("hide");
    formBox.classList.toggle("hide");
})


// Listener for submiting login form
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username=document.querySelector("#Username").value.trim();
    const password=document.querySelector("#Password").value.trim();
    submitBtn.style.backgroundColor='gray'
    changeBG()
    checkLogin(username, password)
})

// Ued in changing bg
const originalColor = getComputedStyle(submitBtn).backgroundColor;
const changeBG=()=>{
    submitBtn.style.backgroundColor='gray'
    setTimeout(() => {
        submitBtn.style.backgroundColor = `${originalColor}`;
    }, 1000);
}

// Dummy Database
const accountDB = [
    {
        Username: 'abc',
        Password: 'abcd'
    },
    {
        Username: 'dummy',
        Password: 'dummypass'
    }
]

// Async & Promise for password checking

const loadTime = () => (Math.floor(Math.random()*3) + 1)*1000

function login(username, password) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // Uses .find method to check for username
            const account = accountDB.find(acc => acc.Username === username)
            if (!account) {
                reject('Username Not Found!')
            } else if (account.Password !== password) {
                reject('Wrong Password!')
            } else {
                resolve('Logged in')
            }
        },loadTime())
    })
}

const checkLogin = async (username, password) => {
    try {
        const result = await login (username.toLowerCase(), password.toLowerCase())
        msgBox.textContent = result
        formBox.classList.toggle('hide')
        confirmBox.classList.toggle('hide')
    } catch (e) {
        msgBox.textContent = e
    }
}