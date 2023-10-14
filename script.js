class Hero {
    constructor() {
      this.nome = (prompt("digite o seu nome"));
      this.idade = (prompt("digite a sua idade"));
      this.tipo = prompt(("digite o tipo do seu personagem"));
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "a magia";
          break;
        case "guerreiro":
          ataque = "a espada";
          break;
        case "monge":
          ataque = "as artes marciais";
          break;
        case "ninja":
          ataque = "o shuriken";
          break;
        default:
          ataque = "não aconteceu o ataque , opção nao inválida !";
          break;
      }
      alert(`o seu nome é ${this.nome}`);
      alert(`sua idade é ${this.idade}`);
      alert(`você escolheu O ${this.tipo} e atacou usando ${ataque}`);
    }
  }
  
  const resultado = new Hero();
  
  resultado.atacar();    
  