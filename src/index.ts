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

const boss = new Entity(
  "The Knight",
  100,
  "./src/image/The_Knight_Front.png",
  5,
);
console.log(boss);
