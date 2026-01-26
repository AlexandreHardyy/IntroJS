import { describe, expect, it } from 'vitest';
import { creerPersonne } from '../../05_objets/exo1';
import { afficherInfos } from '../../05_objets/exo2';
import { estAdulte } from '../../05_objets/exo3';
import { ajouterPropriete } from '../../05_objets/exo4';
import { listerCles } from '../../05_objets/exo5';
import { fusionnerObjets } from '../../05_objets/exo6';

describe('05_objets', () => {
    describe('exo1: creerPersonne', () => {
        it('doit créer un objet personne', () => {
            const p = creerPersonne('Alice', 25);
            expect(p).toEqual({ nom: 'Alice', age: 25 });
        });
    });

    describe('exo2: afficherInfos', () => {
        it('doit formater les infos', () => {
             const p = { nom: 'Alice', age: 25 };
             expect(afficherInfos(p)).toBe('Nom: Alice, Age: 25');
        });
    });

    describe('exo3: estAdulte', () => {
        it('doit vérifier l age', () => {
            expect(estAdulte({ age: 20 })).toBe(true);
            expect(estAdulte({ age: 15 })).toBe(false);
        });
    });

    describe('exo4: ajouterPropriete', () => {
        it('doit ajouter une propriété', () => {
            const obj = { a: 1 };
            ajouterPropriete(obj, 'b', 2);
            expect(obj).toEqual({ a: 1, b: 2 });
        });
    });

    describe('exo5: listerCles', () => {
        it('doit retourner les clés', () => {
            const obj = { a: 1, b: 2 };
            expect(listerCles(obj)).toEqual(['a', 'b']);
        });
    });

    describe('exo6: fusionnerObjets', () => {
        it('doit fusionner deux objets', () => {
             const obj1 = { a: 1 };
             const obj2 = { b: 2 };
             expect(fusionnerObjets(obj1, obj2)).toEqual({ a: 1, b: 2 });
        });
        it('le deuxième écrase le premier', () => {
            const obj1 = { a: 1 };
            const obj2 = { a: 2 };
            expect(fusionnerObjets(obj1, obj2)).toEqual({ a: 2 });
        });
    });
});
