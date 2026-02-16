import { describe, expect, it } from 'vitest';
import { aplatir, collecterTextes, compterNoeuds, profondeurMax } from '../../06_traverser/exo1';

describe('06_traverser', () => {
    const arbreSimple = {
        tag: 'div', id: 'root', classes: [], text: 'Racine', children: []
    };

    const arbreComplexe = {
        tag: 'div', id: 'root', classes: [], text: '', children: [
            {
                tag: 'header', id: 'header', classes: [], text: 'En-tête', children: [
                    { tag: 'h1', id: 'titre', classes: [], text: 'Mon Site', children: [] },
                    { tag: 'nav', id: 'nav', classes: [], text: '', children: [
                        { tag: 'a', id: 'lien1', classes: [], text: 'Accueil', children: [] },
                        { tag: 'a', id: 'lien2', classes: [], text: 'Contact', children: [] },
                    ]},
                ]
            },
            {
                tag: 'main', id: 'main', classes: [], text: '', children: [
                    { tag: 'p', id: 'p1', classes: [], text: 'Contenu principal', children: [] },
                ]
            },
            { tag: 'footer', id: 'footer', classes: [], text: 'Pied de page', children: [] },
        ]
    };

    describe('exo1: compterNoeuds', () => {
        it('doit compter 1 pour un nœud seul', () => {
            expect(compterNoeuds(arbreSimple)).toBe(1);
        });
        it('doit compter tous les nœuds d\'un arbre complexe', () => {
            // root + header + h1 + nav + lien1 + lien2 + main + p1 + footer = 9
            expect(compterNoeuds(arbreComplexe)).toBe(9);
        });
    });

    describe('exo1: profondeurMax', () => {
        it('doit retourner 1 pour un nœud seul', () => {
            expect(profondeurMax(arbreSimple)).toBe(1);
        });
        it('doit retourner la bonne profondeur', () => {
            // root > header > nav > lien = 4
            expect(profondeurMax(arbreComplexe)).toBe(4);
        });
    });

    describe('exo1: collecterTextes', () => {
        it('doit collecter le texte d\'un nœud seul', () => {
            expect(collecterTextes(arbreSimple)).toEqual(['Racine']);
        });
        it('doit collecter tous les textes non vides en profondeur', () => {
            const textes = collecterTextes(arbreComplexe);
            expect(textes).toEqual(['En-tête', 'Mon Site', 'Accueil', 'Contact', 'Contenu principal', 'Pied de page']);
        });
        it('doit ignorer les textes vides', () => {
            const noeud = { tag: 'div', text: '', children: [
                { tag: 'p', text: 'Texte', children: [] },
                { tag: 'p', text: '', children: [] },
            ]};
            expect(collecterTextes(noeud)).toEqual(['Texte']);
        });
    });

    describe('exo1: aplatir', () => {
        it('doit retourner un tableau avec un seul nœud', () => {
            const result = aplatir(arbreSimple);
            expect(result).toHaveLength(1);
            expect(result[0]).toBe(arbreSimple);
        });
        it('doit aplatir en pré-ordre (depth-first)', () => {
            const result = aplatir(arbreComplexe);
            expect(result).toHaveLength(9);
            expect(result.map(n => n.id)).toEqual([
                'root', 'header', 'titre', 'nav', 'lien1', 'lien2', 'main', 'p1', 'footer'
            ]);
        });
        it('doit retourner les objets originaux (même référence)', () => {
            const result = aplatir(arbreComplexe);
            expect(result[0]).toBe(arbreComplexe);
        });
    });
});
