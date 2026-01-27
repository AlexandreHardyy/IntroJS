import { describe, expect, it } from 'vitest';
import { Musique } from '../../02_prototypes/exo1';

describe('02_prototypes', () => {
    describe('exo1: Prototype', () => {
        it('doit avoir une méthode jouer sur le prototype', () => {
            const m = new Musique('Thriller', 'Michael Jackson');
            expect(m.titre).toBe('Thriller');
            expect(m.artiste).toBe('Michael Jackson');
            expect(m.jouer()).toBe('Je joue Thriller de Michael Jackson');
            expect(Object.getPrototypeOf(m).hasOwnProperty('jouer')).toBe(true);
        });
    });
});
