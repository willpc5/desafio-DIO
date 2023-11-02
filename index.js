let nameUser = "Willams";
let xp = 4.500;
let nivel = "";

// Usando apenas a estrutura de Decisão

if (xp < 1.000) {
  nivel = "Ferro";
} else if (xp >= 1.001 && xp <= 2.000) {
  nivel = "Bronze";
} else if (xp >= 2.001 && xp <= 5.000) {
  nivel = "Prata";
} else if (xp >= 6.001 && xp <= 7.000) {
  nivel = "Ouro";
} else if (xp >= 7.001 && xp <= 8.000) {
  nivel = "Platina";
} else if (xp >= 8.001 && xp <= 9.000) {
  nivel = "Ascendente";
} else if (xp >= 9.001 && xp <= 10.000) {
  nivel = "Imortal";
} else if (xp >= 10.001) {
  nivel = "Radiante";
} else {
  console.log("Xp fora do padrão");
}

console.log(`O Herói de Nome: ${nameUser} está no Nível ${nivel}`);


/*

Uma alternativa com loop.

const xpIntervals = [
  { min: 0, max: 1.000, level: "Ferro" },
  { min: 1.001, max: 2.000, level: "Bronze" },
  { min: 2.001, max: 5.000, level: "Prata" },
  { min: 6.001, max: 7.000, level: "Ouro" },
  { min: 7.001, max: 8.000, level: "Platina" },
  { min: 8.001, max: 9.000, level: "Ascendente" },
  { min: 9.001, max: 10.000, level: "Imortal" },
  { min: 10.001, max: Infinity, level: "Radiante" }
];

for (let i = 0; i < xpIntervals.length; i++) {
  const interval = xpIntervals[i];
  if (xp >= interval.min && xp <= interval.max) {
    console.log(`O Herói de Nome: ${nameUser} está no Nível ${interval.level}`);
  }
}

*/