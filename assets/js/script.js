//JS by Anders Erik Nissen
//UCN MMDA0920

const template = document.createElement("template");
template.innerHTML = '<style>h3 {color: red;}</style><section class="profil_info"><div><h3></h3><article id="info"><p><slot name="email" /></p><p>TLF</p></article><button id="toggle-info">HIDE INFO</button></div><article></article></section>';






class ProfilInfo extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
        // this.shadowRoot.querySelector("img").src = this.getAttribute("name");
    }

    toggleInfo() {
        //Pisse smart. Den skifter i mellem true/false. Første gang sættes den til false, fordi i constructor er den true, så den gemmer indholdet første gang man trykker.
        this.showInfo = !this.showInfo;



        const info = this.shadowRoot.querySelector("#info");
        const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        
        if(this.showInfo) {
            info.style.display = "block";
            toggleBtn.innerText = 'Hide Info'
        } else {
            info.style.display = "none";
            toggleBtn.innerText = 'Show Info'

        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo())
    }
    disconnectedCallback () {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener("click", () => this.toggleInfo())
    }
}

window.customElements.define('profil-info', ProfilInfo);

































console.log("        /\\       _______   ___    __ ")
console.log("       /  \\     |   ____| |   \\  |  |")
console.log("      / /\\ \\    |  |____  |    \\ |  |")
console.log("     / /__\\ \\   |   ____| |  |\\ \\|  |")
console.log("    / /____\\ \\  |  |____  |  | \\    |")
console.log("   /_/      \\_\\ |_______| |__|  \\___|")

// console.log("               ____________                _____________________________    ________            _______")
// console.log("              /            \\              |                             |  |         \\         |       |")
// console.log("             /              \\             |                             |  |          \\        |       |");
// console.log("            /                \\            |         ____________________|  |           \\       |       |")
// console.log("           /        /\\        \\           |        |                       |            \\      |       |")
// console.log("          /        /  \\        \\          |        |                       |             \\     |       |")
// console.log("         /        /    \\        \\         |        |____________________   |              \\    |       |")
// console.log("        /        /      \\        \\        |                             |  |               \\   |       |")
// console.log("       /        /________\\        \\       |                             |  |       |\\       \\  |       |")
// console.log("      /                            \\      |         ____________________|  |       | \\       \\ |       |")
// console.log("     /        _____________         \\     |        |                       |       |  \\       \\|       |")
// console.log("    /        /             \\         \\    |        |                       |       |   \\               |")
// console.log("   /        /               \\         \\   |        |____________________   |       |    \\              |")
// console.log("  /        /                 \\         \\  |                             |  |       |     \\             |")
// console.log(" /        /                   \\         \\ |                             |  |       |      \\            |")
// console.log("/________/                     \\_________\\|_____________________________|  |_______|       \\___________|")



 