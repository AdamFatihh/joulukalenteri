const kalenteri = document.getElementById("kalenteri");

const paivaTanaan = new Date().getDate();

const kuvat = [
    "kuvat/kesa1.jpg","kuvat/kesa2.jpg", "kuvat/kesa3.webp", "kuvat/kesa4.jpg", "kuvat/kesa5.jpg", "kuvat/kesa6.webp", "kuvat/kesa7.jpg", "kuvat/kesa8.jpg", "kuvat/kesa9.webp", "kuvat/kesa10.jpg", "kuvat/kesa11.jpg", "kuvat/kesa12.jpg"
];

const viestiDiv = document.getElementById("viesti");

const rivit = [1, 2, 3, 4, 5, 6, 2, 1];
let luukkuNumero = 1;

for (let r = 0; r < rivit.length; r++) {

    const riviDiv = document.createElement("div");
    riviDiv.classList.add("rivi");

    for (let i = 0; i < rivit[r]; i++) {

        if (luukkuNumero > 24) break;

        const luukku = document.createElement("div");
        luukku.classList.add("luukku");
        luukku.textContent = luukkuNumero;
        const thisLukkuNumero = luukkuNumero;

        luukku.addEventListener("click", () => {
            if (luukkuNumero > paivaTanaan) {
                viestiDiv.textContent = "Tätä et voi vielä avata!";
                return;
            }
            if (luukku.classList.contains("avattu")) {
                luukku.classList.remove("avattu");
                luukku.style.backgroundImage = "";
            } else {
                luukku.classList.add("avattu");
                const kuvaIndex = (thisLukkuNumero - 1) % kuvat.length;
                luukku.style.backgroundImage = `url('${kuvat[kuvaIndex]}')`;

            } 
            
            for (let j = 0; j < 5; j++) {
                luoLahja();
            }
        
        });

        riviDiv.appendChild(luukku);
        luukkuNumero++;
    }

    kalenteri.appendChild(riviDiv);
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


function luoLumi() {
    const lumi = document.createElement("div");
    lumi.classList.add("lumi");
    lumi.style.left = Math.random() * window.innerWidth + "px";
    lumi.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(lumi);

    setTimeout(() => {
        lumi.remove();
    }, parseFloat(lumi.style.animationDuration) * 1000);
}

setInterval(luoLumi, 100); 