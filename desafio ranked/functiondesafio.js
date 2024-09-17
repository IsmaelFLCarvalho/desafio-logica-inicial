function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let level = "";
  
    if (vitorias < 10) {
      level = "Iron";
    } else if (vitorias >= 11 && vitorias <= 20) {
      level = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      level = "Silver";
    } else if (vitorias >= 51 && vitorias <= 80) {
      level = "Gold";
    } else if (vitorias >= 81 && vitorias <= 90) {
      level = "Diamont";
    } else if (vitorias >= 91 && vitorias <= 100) {
      level = "Lendary";
    } else if (vitorias >= 101) {
      level = "Immortal";
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${level}`);
  }
  
  const vitorias = 82; 
  const derrotas = 20; 

  calcularRank(vitorias, derrotas);