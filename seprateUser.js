const params = new URLSearchParams(window.location.search);
const username = params.get("name");
const userId = params.get("id");
if (!userId && !username) {
    window.history.back();
}
// const userFullData = await(await fetch("./data.json")).json();
document.title = username;
// console.log(userId);
// console.log(username);

const greetUser = document.querySelector("#greet-user");
const usernameDisplay = document.querySelector("#username");
const idDisplay = document.querySelector("#id");
const emailDisplay = document.querySelector("#email");
const ageDisplay = document.querySelector("#age");
const cityDisplay = document.querySelector("#city");
greetUser.innerHTML = `Welcome back again ${username}!`;
// const { id, name, email } = user;
const item = JSON.parse(sessionStorage.getItem(`${username}|${userId}`));
if (item === null) {
    window.location.href = "./404.html";
}
// console.log(item);
// userFullData.forEach(user => {

const { id, name, email, age, city } = item;

idDisplay.innerHTML = `User Id: ${id}`;
usernameDisplay.innerHTML = `Username: ${username}`;
emailDisplay.innerHTML = `Email: ${email}`;
ageDisplay.innerHTML = `Age: ${age}`;
cityDisplay.innerHTML = `City: ${city}`;

// });

const backBtn = document.querySelector("#back-btn");

backBtn.addEventListener("click", () => {
    history.back();
})


