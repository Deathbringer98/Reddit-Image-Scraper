document.querySelector(".find").addEventListener("click", () => {
    meme(document.querySelector("input").value);
    document.querySelector(".sub").style.display = 'none';
});

document.querySelector(".rapid").addEventListener("click", () => {
    let subredditList = ['memes', 'dankmemes', 'memes_irl', 'anime', 'aww', 'animal', 'funny', 'gaming', 'humour', 'art', 'sports', 'cat', 'space', 'god', 'food', 'webdev'];
    let rsub = subredditList[Math.floor(Math.random() * subredditList.length)];
    document.querySelector('.sub').innerHTML = 'r/' + rsub;
    meme(rsub);
    document.querySelector(".sub").style.display = 'block';
});

function toggleAtmosphere() {
    let hideElement = document.querySelector('.hide');
    let thElement = document.querySelector('.th');
    hideElement.style.display = hideElement.style.display === 'none' ? 'flex' : 'none';
    thElement.style.display = thElement.style.display === 'none' ? 'block' : 'none';
}

function toggleThemes() {
    let hide2Element = document.querySelector('.hide2');
    let atElement = document.querySelector('.at');
    hide2Element.style.display = hide2Element.style.display === 'none' ? 'flex' : 'none';
    atElement.style.display = atElement.style.display === 'none' ? 'block' : 'none';
}

function toggleFilters() {
    let hide3Element = document.querySelector('.hide3');
    let eeElement = document.querySelector('.ee');
    hide3Element.style.display = hide3Element.style.display === 'none' ? 'flex' : 'none';
    eeElement.style.filter = eeElement.style.filter === 'sepia(100%)' ? 'sepia(0%)' : 'sepia(100%)';
}

function applyFilter(filter) {
    document.querySelector('.img').style.filter = filter;
}

function meme(subreddit) {
    if (!subreddit) {
        document.querySelector(".img").setAttribute("src", "baba.jpg");
    } else {
        document.querySelector(".heading").innerHTML = "Getting your stuff...";
    }

    fetch(`https://meme-api.com/gimme/${subreddit}`)
        .then(data => data.json())
        .then(item => {
            document.querySelector(".img").setAttribute("src", item.url);
            document.querySelector(".heading").innerHTML = item.title;
            document.querySelector(".author").innerHTML = "@" + item.author;
        })
        .catch((error) => console.error('Error fetching data:', error));
}

function downloadImage() {
    let img = document.querySelector('.img');
    let link = document.createElement('a');
    link.href = img.src;
    link.download = img.src;
    link.click();
}