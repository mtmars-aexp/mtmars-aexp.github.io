function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'user-agent': "mtmars-aexp.github.io",
        }
    }).then(result => result.json())
        .then(result => document.getElementById('joke-text').innerText = result.joke)
    .catch(result => console.log("Something went wrong with getting a joke."))
}
