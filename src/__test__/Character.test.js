import { Bowerman } from '../Character';
import { Character } from '../Character';
import { beforeEach } from '@jest/globals';
import { describe, test, expect } from '@jest/globals';

let character;

beforeEach(() => {
    character = new Bowerman('Robin');
});


beforeEach(() => {
    character = new Bowerman('Robin');
});

test('levelUp выдает ошибку если здоровье равно 0', () => {
    character.damage(200); //атака с учетом защиты 25%
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
});

test('levelUp проверяет правильность повышения уровня', () => {
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.health).toBe(100);
    expect(character.attack).toBe(30); 
    expect(character.defence).toBe(30); 
});

test('изменение здоровья по урону', () => {
    character.damage(20);
    expect(character.health).toBe(85); 
});

test('урон не снижает здоровье ниже 0', () => {
    character.damage(200); 
    expect(character.health).toBe(0); 
});

describe('Проверка типа персонажа', () => {
    const invalidTypes = ['InvalidType', 'Warrior', 'Mage', 'Healer'];

    test.each(invalidTypes)('должно выбрасывать ошибку для некорректного типа: %s', (type) => {
        expect(() => new Character('Robin', type)).toThrow('Некорректный тип персонажа.');
    });

    test('должно успешно создавать персонажа с корректным типом', () => {
        const character = new Character('Robin', 'Bowerman');
        expect(character.type).toBe('Bowerman');
    });
});

describe('Проверка имени персонажа', () => {
    test('должно выбрасывать ошибку, если имя слишком короткое', () => {
        expect(() => new Bowerman('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
    });

    test('должно выбрасывать ошибку, если имя слишком длинное', () => {
        expect(() => new Bowerman('VeryLongName')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов.');
    });

    test('должно успешно создавать персонажа с корректным именем', () => {
        const character = new Bowerman('Robin');
        expect(character.name).toBe('Robin');
    });
});