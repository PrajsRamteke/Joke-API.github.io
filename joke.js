const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const copy = document.getElementById("copy");

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke =()=>{
    jokeContainer.classList.remove("fade"); //fade animation extra class .fade

    fetch(url).then(data => data.json()).then(item => 
        {
        jokeContainer.innerText = item.joke;

        jokeContainer.classList.add("fade"); //fade animation 
    });
}

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(jokeContainer.innerText);
});

btn.addEventListener("click",getJoke);
getJoke();