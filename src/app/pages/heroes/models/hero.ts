export class Hero {
  id: string;
  name: string;
  likes: number;
  default: boolean;
  avatarUrl: string;

  constructor(hero: any = {}) {
    this.id = hero.id;
    this.name = hero.name || "";
    this.likes = hero.likes || 0;
    this.default = hero.default || false;
    this.avatarUrl = hero.avatarUrl || "";
  }

  like() {
    this.likes += 1;
  }
}
