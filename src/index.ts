class Entity {
  name: string;
  hp: number;
  image: string;
  dmg: number;

  constructor(name: string, hp: number, image: string, dmg: number) {
    this.name = name;
    this.hp = hp;
    this.image = image;
    this.dmg = dmg;
  }
}

const bossData: [string, number, string, number][] = [
  ["Faux Chevalier", 50, "FauxChevalier", 4],
  ["Mère Gruz", 30, "MereGruz", 3],
  ["Hornet Protectrice", 60, "Hornet1", 5],
  ["Chargeur de Mousse Massif", 40, "ChargeurMousse", 4],
  ["Roi de la Vengeance", 35, "RoiVengeance", 3],
  ["Mawlek Maussade", 45, "Mawlek", 4],
  ["Seigneurs Mantes", 55, "SeigneursMantes", 5],
  ["Guerrier de l'Âme", 65, "GuerrierAme", 5],
  ["Maître de l'Âme", 70, "MaitreAme", 6],
  ["Gardien des Dunes", 80, "GardienDunes", 6],
  ["Mouche Vengeresse Royale", 35, "MoucheVengeresse", 3],
  ["Défenseur du Fumier", 75, "DefenseurFumier", 5],
  ["Chevaliers Observateurs", 70, "ChevaliersObs", 6],
  ["Uumuu", 55, "Uumuu", 5],
  ["Le Collecteur", 65, "Collecteur", 5],
  ["Sentinelle Frelon", 80, "SentinelleFrelon", 7],
  ["Hornet Sentinelle", 85, "Hornet2", 7],
  ["Nosk", 70, "Nosk", 6],
  ["Chevalier de la Ruche", 60, "ChevalierRuche", 5],
  ["Briseur", 50, "Briseur", 4],
  ["Oblobbles", 55, "Oblobbles", 5],
  ["Dompteur de Dieux", 90, "DompteurDieux", 7],
  ["Le Hollow Knight", 120, "HollowKnight", 8],
  ["Radiance", 150, "Radiance", 10],
  ["Grimm", 95, "Grimm", 7],
  ["Grimm Cauchemar", 130, "GrimmCauchemar", 9],
  ["Zote le Redoutable", 25, "Zote", 0],
];

class Boss extends Entity {
  constructor(name: string, hp: number, image: string, dmg: number) {
    super(name, hp, image, dmg);
  }
}

const bosses: Boss[] = bossData.map(
  ([name, hp, img, dmg]) => new Boss(name, hp, `./src/image/bosses/${img}.png`, dmg)
);

const containerBoss = document.getElementById("boss");

if (containerBoss) {
  bosses.forEach((boss) => {
    containerBoss.innerHTML += `
        <h2>${boss.name}</h2>
        <img src="${boss}" width="150" />
        <p>HP: ${boss.hp}</p>
        <p>Damage: ${boss.dmg}</p>
      `;
  });
  const div = document.createElement("div");

  containerBoss.appendChild(div);
}

const mainCharacter = new Entity(
  "The Knight",
  5,
  "./src/image/The_Knight_Front.png",
  5,
);

const container = document.getElementById("mainCharacter");

if (container) {
  const div = document.createElement("div");

  div.innerHTML = `
    <h2>${mainCharacter.name}</h2>
    <img src="${mainCharacter.image}" width="150" />
    <p>HP: ${mainCharacter.hp}</p>
    <p>Damage: ${mainCharacter.dmg}</p>
  `;

  container.appendChild(div);
}
