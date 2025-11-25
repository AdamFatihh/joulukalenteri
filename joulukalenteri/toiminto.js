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

const viestiDiv = document.getElementById("viesti");

const rivienMaara = 5;
let luukkuNumero = 1;

for (let r = 0; r < rivienMaara; r++) {
    const riviDiv = document.createElement("div");
    riviDiv.classList.add("rivi");

    for (let i = 0; i <= r; i++) {
        if (luukkuNumero > 24) break;
        const luukku = document.createElement("div");
        luukku.classList.add("luukku");
        luukku.textContent = luukkuNumero;

        luukku.addEventListener("click", () => {
            if (luukkuNumero > paivaTanaan) {
                viestiDiv.textContent = "Tätä et voi vielä avata!";
                return;
            }
            if (luukku.classList.contains("avattu")) {
                luukku.classList.remove("avattu");
                viestiDiv.textContent = "";
            } else {
                luukku.classList.add("avattu");
                viestiDiv.textContent = viestit[luukkuNumero - 1];
            }

            for (let j = 0; j < 5; j++) {
                luoLahja();
            }
        });

    
    
     riviDiv.appendChild(luukku);
        luukkuNumero++; // Älä unohda kasvattaa luukkuNumeroa
    } // <-- suljetaan sisempi for (let i)

    kalenteri.appendChild(riviDiv); // rivi liitetään kalenteriin kerran per rivi
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