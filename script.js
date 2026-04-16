const userData = await(await fetch("./data.json")).json()
const userContainer = document.querySelector("#main");

userData.forEach(user => {
    const { id, name, email, age, city } = user;

    const anchor = document.createElement("a");
    // creating elements
    anchor.classList.add("card");
    anchor.href = `./seprateUser.html?id=${id}&name=${name}`;

    const showId = document.createElement("h4");
    const showName = document.createElement("h4");
    const showEmail = document.createElement("h4");

    // setting all data to the innerhtml
    showId.innerHTML = `ID: ${id}`;
    showName.innerHTML = `NAME: ${name}`;
    showEmail.innerHTML = `EMAIL: ${email}`;

    anchor.append(showId, showName, showEmail);

    userContainer.append(anchor);
    anchor.addEventListener("click", () => {
        console.log("clicked");
        sessionStorage.setItem(`${name}|${id}`, JSON.stringify({ id, name, email, age, city }));
    })
});