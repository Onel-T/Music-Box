htmlTemplateStart = "<html><body><button>Play Music</button><script>\n"
htmlTemplateEnd = "<\/script></body></html>"

function play_notes() {
    song = document.getElementById("textBox").value;

    // Splits each line places into array
    lines = song.split(/\r?\n/);
    //console.log("Lines: ", lines);

    soundDelay = 0;
    compiledScript = "";

    // Iterates through each character in each line to play audio
    for (i = 0; i < lines.length; i++) {
        //console.log(lines[i]);
        soundDelay += 1500;

        if (lines[i][0] == "A") {
            setTimeout(function () {
                console.log("Play A");
                new Audio('PianoKey1.mp3').play();
            }, soundDelay)

            compiledScript += "setTimeout(function () {\ console.log(\"Play A\");\ new Audio('PianoKey1.mp3').play();\ }, " + soundDelay + ")\n";
        }

        if (lines[i][1] == "B") {
            setTimeout(function () {
                console.log("Play B");
                new Audio('PianoKey2.mp3').play();
            }, soundDelay)

            compiledScript += "setTimeout(function () {\ console.log(\"Play B\");\ new Audio('PianoKey2.mp3').play();\ }, " + soundDelay + ")\n";
        }

        if (lines[i][2] == "C") {
            setTimeout(function () {
                console.log("Play C");
                new Audio('PianoKey3.mp3').play();
            }, soundDelay)

            compiledScript += "setTimeout(function () {\ console.log(\"Play C\");\ new Audio('PianoKey3.mp3').play();\ }, " + soundDelay + ")\n";
        }

        if (lines[i][3] == "D") {
            setTimeout(function () {
                console.log("Play D");
                new Audio('PianoKey4.mp3').play();
            }, soundDelay)

            compiledScript += "setTimeout(function () {\ console.log(\"Play D\");\ new Audio('PianoKey4.mp3').play();\ }, " + soundDelay + ")\n";
        }
    }
    // Sends compiled code into the white text area
    document.getElementById("compiled").value = htmlTemplateStart + compiledScript + htmlTemplateEnd;
}

