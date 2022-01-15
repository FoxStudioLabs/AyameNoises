    const randomInt = Math.floor(Math.random() * 49); //Get a random integer 0 - 49 (50 files)
    const audio = new Audio(`/media/sound/ayamenoise${randomInt}.mp3`); // Load the sound file based on the randomInt variable
    const text = [
        "Eeeeeee.YADA!",
        "Yo Dayo",
        "Banana",
        "Ojou Giggles",
        "最近、寒くなってきたな!",
        "Docchi Docchi",
        "Daijoubu Desu ka",
        "Ojou laughter",
        "Ja iranai",
        "Wife Noises",
        "1st voice tweet",
        "Oyasumi",
        "Arimasu",
        "1,2,3,4,5 x3",
        "Kore wa",
        "Ojou kicks you",
        "Baka!!",
        "Hentai",
        "Urusai",
        "Mou shiranai",
        "Konnakiri",
        "Hai",
        "Suki",
        "Na",
        "何故え!?",
        "天然ものだぞ",
        "う〜ん、仕方ない",
        "Tongue Twister",
        "Arigato",
        "Ano Ne",
        "Ojou Blessing",
        "みんなチョコもらた?",
        "Ojou Cries",
        "Onee san voice",
        "Un!!!",
        "Yeeeei!!!",
        "Won't forgive you",
        "Pikan!",
        "FU! x3",
        "Eh?!",
        "もういい",
        "Oni Noises",
        "Angry cat noises",
        "Oni Giggles",
        "早く起きる",
        "困っちゃうよね",
        "unintelligible,",
        "*pain*",
        "n~",
        "yada, yada, YADAAA, *crying*"

    ]; // construct the array with text
    const quote = document.getElementById("quote") // get quote element
    audio.play(); // Play sound
    quote.innerHTML = "&#8220; " + text[randomInt] + " &#8221;"; // inject text to output
    console.info(`Played sound ${randomInt}!`);