import { describe, expect, it } from 'vitest';
import { ajouterClasse, changerTexte, supprimerClasse, toggleClasse } from '../../02_modifier/exo1';
import { getDataAttribute, hasAttribute, removeAttribute, setAttribute } from '../../02_modifier/exo2';

describe('02_modifier', () => {
    describe('exo1: changerTexte', () => {
        it('doit retourner une copie avec le texte modifié', () => {
            const original = { tag: 'p', classes: ['info'], text: 'Ancien', attributes: {}, children: [] };
            const result = changerTexte(original, 'Nouveau');
            expect(result.text).toBe('Nouveau');
            expect(original.text).toBe('Ancien'); // pas modifié
        });
        it('doit conserver les autres propriétés', () => {
            const original = { tag: 'p', classes: ['info'], text: 'Ancien', attributes: {}, children: [] };
            const result = changerTexte(original, 'Nouveau');
            expect(result.tag).toBe('p');
            expect(result.classes).toEqual(['info']);
        });
    });

    describe('exo1: ajouterClasse', () => {
        it('doit ajouter une classe', () => {
            const el = { tag: 'div', classes: ['a'], text: '', attributes: {}, children: [] };
            const result = ajouterClasse(el, 'b');
            expect(result.classes).toEqual(['a', 'b']);
        });
        it('ne doit pas ajouter une classe déjà présente', () => {
            const el = { tag: 'div', classes: ['a', 'b'], text: '', attributes: {}, children: [] };
            const result = ajouterClasse(el, 'a');
            expect(result.classes).toEqual(['a', 'b']);
        });
        it('ne doit pas modifier l\'original', () => {
            const el = { tag: 'div', classes: ['a'], text: '', attributes: {}, children: [] };
            ajouterClasse(el, 'b');
            expect(el.classes).toEqual(['a']);
        });
    });

    describe('exo1: supprimerClasse', () => {
        it('doit supprimer la classe', () => {
            const el = { tag: 'div', classes: ['a', 'b', 'c'], text: '', attributes: {}, children: [] };
            const result = supprimerClasse(el, 'b');
            expect(result.classes).toEqual(['a', 'c']);
        });
        it('ne doit rien faire si la classe n\'existe pas', () => {
            const el = { tag: 'div', classes: ['a'], text: '', attributes: {}, children: [] };
            const result = supprimerClasse(el, 'z');
            expect(result.classes).toEqual(['a']);
        });
    });

    describe('exo1: toggleClasse', () => {
        it('doit ajouter la classe si absente', () => {
            const el = { tag: 'div', classes: ['a'], text: '', attributes: {}, children: [] };
            const result = toggleClasse(el, 'b');
            expect(result.classes).toEqual(['a', 'b']);
        });
        it('doit retirer la classe si présente', () => {
            const el = { tag: 'div', classes: ['a', 'b'], text: '', attributes: {}, children: [] };
            const result = toggleClasse(el, 'b');
            expect(result.classes).toEqual(['a']);
        });
    });

    describe('exo2: setAttribute', () => {
        it('doit ajouter un nouvel attribut', () => {
            const el = { tag: 'img', attributes: { src: 'old.jpg' }, classes: [], text: '', children: [] };
            const result = setAttribute(el, 'alt', 'Photo');
            expect(result.attributes.alt).toBe('Photo');
            expect(result.attributes.src).toBe('old.jpg');
        });
        it('doit modifier un attribut existant', () => {
            const el = { tag: 'img', attributes: { src: 'old.jpg' }, classes: [], text: '', children: [] };
            const result = setAttribute(el, 'src', 'new.jpg');
            expect(result.attributes.src).toBe('new.jpg');
        });
        it('ne doit pas modifier l\'original', () => {
            const el = { tag: 'img', attributes: { src: 'old.jpg' }, classes: [], text: '', children: [] };
            setAttribute(el, 'alt', 'Photo');
            expect(el.attributes.alt).toBeUndefined();
        });
    });

    describe('exo2: removeAttribute', () => {
        it('doit supprimer l\'attribut', () => {
            const el = { tag: 'img', attributes: { src: 'a.jpg', alt: 'Photo' }, classes: [], text: '', children: [] };
            const result = removeAttribute(el, 'alt');
            expect(result.attributes).toEqual({ src: 'a.jpg' });
        });
        it('ne doit rien faire si l\'attribut n\'existe pas', () => {
            const el = { tag: 'img', attributes: { src: 'a.jpg' }, classes: [], text: '', children: [] };
            const result = removeAttribute(el, 'alt');
            expect(result.attributes).toEqual({ src: 'a.jpg' });
        });
    });

    describe('exo2: getDataAttribute', () => {
        it('doit retourner la valeur du data attribute', () => {
            const el = { attributes: { 'data-id': '42', 'data-role': 'admin' } };
            expect(getDataAttribute(el, 'id')).toBe('42');
            expect(getDataAttribute(el, 'role')).toBe('admin');
        });
        it('doit retourner undefined si inexistant', () => {
            const el = { attributes: {} };
            expect(getDataAttribute(el, 'id')).toBeUndefined();
        });
    });

    describe('exo2: hasAttribute', () => {
        it('doit retourner true si l\'attribut existe', () => {
            const el = { attributes: { src: 'img.jpg' } };
            expect(hasAttribute(el, 'src')).toBe(true);
        });
        it('doit retourner false si l\'attribut n\'existe pas', () => {
            const el = { attributes: {} };
            expect(hasAttribute(el, 'src')).toBe(false);
        });
    });
});
