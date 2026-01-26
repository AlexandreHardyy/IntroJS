import { describe, expect, it } from 'vitest';
import { sommeTableau } from '../../04_tableaux/exo1';
import { moyenneTableau } from '../../04_tableaux/exo2';
import { trouverMaxTableau } from '../../04_tableaux/exo3';
import { filtrerPairs } from '../../04_tableaux/exo4';
import { compterOccurrences } from '../../04_tableaux/exo5';
import { trierTableau } from '../../04_tableaux/exo6';

describe('04_tableaux', () => {
    describe('exo1: sommeTableau', () => {
        it('doit calculer la somme', () => {
            expect(sommeTableau([1, 2, 3])).toBe(6);
            expect(sommeTableau([10, -2, 5])).toBe(13);
        });
    });

    describe('exo2: moyenneTableau', () => {
        it('doit calculer la moyenne', () => {
            expect(moyenneTableau([10, 20])).toBe(15);
        });
        it('doit retourner 0 si vide', () => {
            expect(moyenneTableau([])).toBe(0);
        });
    });

    describe('exo3: trouverMaxTableau', () => {
        it('doit trouver le max', () => {
            expect(trouverMaxTableau([1, 10, 5])).toBe(10);
        });
    });

    describe('exo4: filtrerPairs', () => {
        it('doit garder uniquement les pairs', () => {
            expect(filtrerPairs([1, 2, 3, 4])).toEqual([2, 4]);
        });
    });

    describe('exo5: compterOccurrences', () => {
        it('doit compter les occurrences', () => {
            expect(compterOccurrences(['a', 'b', 'a'], 'a')).toBe(2);
            expect(compterOccurrences([1, 2, 3], 4)).toBe(0);
        });
    });

    describe('exo6: trierTableau', () => {
        it('doit trier le tableau', () => {
            const entiere = [3, 1, 2];
            const trie = trierTableau(entiere);
            expect(trie).toEqual([1, 2, 3]);
        });
        it('ne doit pas modifier l original', () => {
            const original = [3, 1, 2];
            trierTableau(original);
            expect(original).toEqual([3, 1, 2]);
        });
    });
});
