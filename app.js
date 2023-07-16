const inputEl = document.getElementById("search-inp");
const searchBtn = document.getElementById("search-btn");

let avatar = document.querySelector(".avatar");
let username = document.querySelector(".user-name");
let userLink = document.querySelector(".user-link");
let date = document.querySelector(".date");
let userBio = document.querySelector(".about-user");
let userRepos = document.getElementById("repo-num");
let userFollowers = document.getElementById("followers-num");
let userFollowing = document.getElementById("following-num");
let userLocation = document.getElementById("location");
let userWebsite = document.getElementById("website");
let userTwitter = document.getElementById("twitter");
let userCompany = document.getElementById("company");


function displayUserInfo(user){
    avatar.src = user.avatar_url;
    username.textContent = user.name;
    userLink.href = user.html_url;
    date.textContent = user.created_at;
    userBio.textContent = user.bio;
    userRepos.textContent = user.public_repos;
    userFollowers.textContent = user.followers;
    userFollowing.textContent = user.following;

    // checking if location, website, twitter and company exsist
    if(user.location){
        userLocation.textContent = user.location
    }else{
        userLocation.textContent = "Not Available"
        userLocation.parentElement.style.opacity = 0.5;
    }
    // checking if user have website
    if(user.blog){
        userWebsite.textContent = user.blog;
        userWebsite.href = user.blog;
    }else{
        userWebsite.textContent = "Not Available"
        userWebsite.href = "#"
        userWebsite.parentElement.style.opacity = 0.5;
    }
    // checking if user have twitter account
    if(user.twitter_username){
        userTwitter.textContent = user.twitter_username;
    }else{
        userTwitter.textContent = "Not Available"
        userTwitter.parentElement.style.opacity = 0.5
    }
    // check if user have/works in company
    if(user.company){
        userCompany.textContent = user.company
    }else{
        company.textContent = "Not Available"
        userCompany.parentElement.style.opacity = 0.5
    }
}



searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
        const result = await axios.get("https://api.github.com/users/" + inputEl.value);
        const user = result.data;
        displayUserInfo(user)
        inputEl.value = "";

    } catch (error) {
        alert("error")
        // here will bee "no result" red text, if we catch error
    }
})


