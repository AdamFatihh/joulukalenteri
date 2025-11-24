const kalenteri = document.getElementById("kalenteri");

const paivaTanaan = new Date().getDate();

const viestit = [
    "Hyvää joulunodotusta!",
    "Piparit uuniin!",
    "Luo lumiukko!",
    "Koristele kuusi!",
    "Katso jouluvalot!",
    "Kirjoita joulukortti!",
    "Juo kaakaota!",
    "Leivo kakku!",
    "Kuuntele joululauluja!",
    "Lue satu!",
    "Väritä joulukuva!",
    "Tee lahjalista!",
    "Katso jouluelokuva!",
    "Piirrä tonttu!",
    "Käy ulkona!",
    "Laita jouluvalot!",
    "Leiki lumessa!",
    "Kirjoita kirje Joulupukille!",
    "Nauti jouluteetä!",
    "Käy joulumarkkinoilla!",
    "Tee joululahja!",
    "Kokoa palapeli!",
    "Kuuntele tarina!",
    "Juhli joulua!"
];

let viestiDiv = document.getElementById("viesti");

for (let i=1; i<=24; i++) {
    const luukku = document.createElement("div");
    luukku.classList.add("luukku");
    luukku.textContent = i;

    luukku.addEventListener("click", () => {
        if (i > paivaTanaan) {
            viestiDiv.textContent = "Tätä luukkua ei voi vielä avata!";
            return;
        }

        if (luukku.classList.contains("avattu")) {
            luukku.classList.remove("avattu"); // menee kiinni
            viestiDiv.textContent = "";        // tyhjennä viesti
        } else {
            luukku.classList.add("avattu");    // menee auki
            viestiDiv.textContent = viestit[i - 1]; // näytä viesti
        } 

        for (let j = 0; j < 5; j++) {
        luoLahja();

        } 
    });
    
    
    kalenteri.appendChild(luukku);
}

function luoLahja() {
    const lahja = document.createElement("div");
    lahja.classList.add("lahja");
    lahja.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(lahja);

    setTimeout(() => {
        lahja.remove();
    }, 2000);
}