class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов.');
        }

        const validTypes = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Некорректный тип персонажа.');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        
        
        switch (type) {
            case 'Bowerman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            default:
                throw new Error('Некорректный тип персонажа.');
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего.');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        const effectiveDamage = points * (1 - this.defence / 100);
        this.health -= effectiveDamage;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}


class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman');
    }
}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
    }
}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
    }
}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
    }
}




export { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie };