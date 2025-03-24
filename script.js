function playStation(url, name) {
    let audio = document.getElementById("audio");
    let title = document.getElementById("radio-title");

    audio.src = url;
    audio.play();
    title.innerText = "Сейчас играет: " + name;
}