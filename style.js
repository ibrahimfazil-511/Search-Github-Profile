async function searchUser(){

    let username = document.getElementById("username").value

    let response = await fetch(`https://api.github.com/users/${username}`)

    let data = await response.json()

    let card = document.getElementById("card")
    let error = document.getElementById("error")

    if(data.message == "Not Found"){

        card.style.display = "none"
        error.innerHTML = "User Not Found"

        return
    }

    error.innerHTML = ""

    card.style.display = "block"

    document.getElementById("avatar").src = data.avatar_url

    document.getElementById("name").innerHTML = data.name

    document.getElementById("login").innerHTML = "@" + data.login

    document.getElementById("bio").innerHTML = data.bio

    document.getElementById("followers").innerHTML = data.followers

    document.getElementById("following").innerHTML = data.following

    document.getElementById("repos").innerHTML = data.public_repos

    document.getElementById("profileLink").href = data.html_url

}
