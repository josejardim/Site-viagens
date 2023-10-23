    
function updateAudioSource(value) {
    const audio = document.getElementById("player");
    const source = audio.querySelector("source");

    // Defina as URLs das estações de rádio com base na opção selecionada

    if (value === "rock1") {
        source.src = "https://ice02.fluidstream.net/ibiza.aac";
    } else if (value === "rockon") {
        source.src = "https://streaming.radiostreamlive.com/radiorockon_devices";
    } else if (value === "Antenna 1") {
        source.src = "http://a1-it.newradio.it/stream";
    }

    // Recarregue o player de áudio para usar o novo URL
    audio.load();
}
  

