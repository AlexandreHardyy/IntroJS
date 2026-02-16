import { describe, expect, it } from 'vitest';
import { ajouterEnfant, creerElement, insererAvant, supprimerEnfant } from '../../03_creer_supprimer/exo1';
import { clonerElement, remplacerEnfant, viderEnfants } from '../../03_creer_supprimer/exo2';

describe('03_creer_supprimer', () => {
    describe('exo1: creerElement', () => {
        it('doit créer un élément basique', () => {
            const result = creerElement('p', 'Hello');
            expect(result).toEqual({
                tag: 'p', id: '', classes: [], text: 'Hello', attributes: {}, children: []
            });
        });
        it('doit créer un élément avec options', () => {
            const result = creerElement('div', 'Contenu', { id: 'box', classes: ['a', 'b'], attributes: { role: 'main' } });
            expect(result.tag).toBe('div');
            expect(result.id).toBe('box');
            expect(result.classes).toEqual(['a', 'b']);
            expect(result.attributes).toEqual({ role: 'main' });
            expect(result.children).toEqual([]);
        });
    });

    describe('exo1: ajouterEnfant', () => {
        it('doit ajouter un enfant à la fin', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', id: '', classes: [], text: 'A', attributes: {}, children: [] }
            ]};
            const enfant = { tag: 'li', id: '', classes: [], text: 'B', attributes: {}, children: [] };
            const result = ajouterEnfant(parent, enfant);
            expect(result.children).toHaveLength(2);
            expect(result.children[1].text).toBe('B');
        });
        it('ne doit pas modifier le parent original', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [] };
            const enfant = { tag: 'li', id: '', classes: [], text: 'A', attributes: {}, children: [] };
            ajouterEnfant(parent, enfant);
            expect(parent.children).toHaveLength(0);
        });
    });

    describe('exo1: supprimerEnfant', () => {
        it('doit supprimer l\'enfant à l\'index donné', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
                { tag: 'li', text: 'B', id: '', classes: [], attributes: {}, children: [] },
                { tag: 'li', text: 'C', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const result = supprimerEnfant(parent, 1);
            expect(result.children).toHaveLength(2);
            expect(result.children[0].text).toBe('A');
            expect(result.children[1].text).toBe('C');
        });
        it('doit retourner une copie non modifiée si l\'index est invalide', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const result = supprimerEnfant(parent, 5);
            expect(result.children).toHaveLength(1);
        });
        it('doit gérer un index négatif', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const result = supprimerEnfant(parent, -1);
            expect(result.children).toHaveLength(1);
        });
    });

    describe('exo1: insererAvant', () => {
        it('doit insérer avant l\'index donné', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
                { tag: 'li', text: 'C', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const nouveau = { tag: 'li', text: 'B', id: '', classes: [], attributes: {}, children: [] };
            const result = insererAvant(parent, nouveau, 1);
            expect(result.children).toHaveLength(3);
            expect(result.children[0].text).toBe('A');
            expect(result.children[1].text).toBe('B');
            expect(result.children[2].text).toBe('C');
        });
        it('doit ajouter à la fin si l\'index dépasse', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const nouveau = { tag: 'li', text: 'B', id: '', classes: [], attributes: {}, children: [] };
            const result = insererAvant(parent, nouveau, 99);
            expect(result.children).toHaveLength(2);
            expect(result.children[1].text).toBe('B');
        });
    });

    describe('exo2: clonerElement', () => {
        const original = {
            tag: 'div', id: 'a', classes: ['x'], text: 'Parent', attributes: {}, children: [
                { tag: 'p', id: 'b', classes: [], text: 'Enfant', attributes: {}, children: [] }
            ]
        };

        it('clone superficiel : pas de children', () => {
            const result = clonerElement(original, false);
            expect(result.tag).toBe('div');
            expect(result.text).toBe('Parent');
            expect(result.children).toEqual([]);
            expect(result).not.toBe(original);
        });
        it('clone profond : children inclus', () => {
            const result = clonerElement(original, true);
            expect(result.children).toHaveLength(1);
            expect(result.children[0].text).toBe('Enfant');
            expect(result.children[0]).not.toBe(original.children[0]); // Pas la même référence
        });
    });

    describe('exo2: remplacerEnfant', () => {
        it('doit remplacer l\'enfant à l\'index', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
                { tag: 'li', text: 'B', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const nouveau = { tag: 'li', text: 'X', id: '', classes: [], attributes: {}, children: [] };
            const result = remplacerEnfant(parent, 1, nouveau);
            expect(result.children[1].text).toBe('X');
            expect(result.children[0].text).toBe('A');
        });
        it('doit retourner une copie non modifiée si index invalide', () => {
            const parent = { tag: 'ul', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'li', text: 'A', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const nouveau = { tag: 'li', text: 'X', id: '', classes: [], attributes: {}, children: [] };
            const result = remplacerEnfant(parent, 5, nouveau);
            expect(result.children).toHaveLength(1);
            expect(result.children[0].text).toBe('A');
        });
    });

    describe('exo2: viderEnfants', () => {
        it('doit retourner un élément avec children vide', () => {
            const el = { tag: 'div', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'p', text: 'A', id: '', classes: [], attributes: {}, children: [] },
                { tag: 'p', text: 'B', id: '', classes: [], attributes: {}, children: [] },
            ]};
            const result = viderEnfants(el);
            expect(result.children).toEqual([]);
            expect(result.tag).toBe('div');
        });
        it('ne doit pas modifier l\'original', () => {
            const el = { tag: 'div', id: '', classes: [], text: '', attributes: {}, children: [
                { tag: 'p', text: 'A', id: '', classes: [], attributes: {}, children: [] },
            ]};
            viderEnfants(el);
            expect(el.children).toHaveLength(1);
        });
    });
});
