class heroi {
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    ataque(){
    	let ataque;
        
        	if (this.tipo === "mago"){
        		ataque ="usou magia";
            } else if (this.tipo === "guerreiro"){
           		 ataque = "usou sua espada";
            } else if (this.tipo === "monge"){
            	ataque = "usou artes marciais";
            } else if (this.tipo === "ninja"){
            	ataque = "usou shuriken";
            }
    	
        console.log(`O ${this.tipo} atacou e ${ataque}`)
    }
}

let mago = new heroi("Merlim", "345", "mago")
let guerreiro = new heroi("Arthur", "45", "guerreiro")
let monge = new heroi("Benito", "174", "monge")
let ninja = new heroi("Naruto", 17, "ninja")

mago.ataque()
guerreiro.ataque()
monge.ataque()
ninja.ataque()