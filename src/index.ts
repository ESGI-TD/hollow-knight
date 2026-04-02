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

const mainCharacter = new Entity(
  "The Knight",
  100,
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
