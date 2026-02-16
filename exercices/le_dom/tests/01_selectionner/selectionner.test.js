import { describe, expect, it } from 'vitest';
import { trouverParClasse, trouverParId, trouverParTag } from '../../01_selectionner/exo1';
import { trouverParent, trouverPremier, trouverTous } from '../../01_selectionner/exo2';

describe('01_selectionner', () => {
    const elements = [
        { id: 'titre', classes: ['important', 'grand'], tag: 'h1', text: 'Bonjour' },
        { id: 'sous-titre', classes: ['important'], tag: 'h2', text: 'Sous-titre' },
        { id: 'paragraphe', classes: ['texte'], tag: 'p', text: 'Un texte' },
        { id: 'info', classes: ['texte', 'petit'], tag: 'p', text: 'Info' },
    ];

    describe('exo1: trouverParId', () => {
        it('doit trouver un élément par son id', () => {
            const result = trouverParId(elements, 'titre');
            expect(result).toEqual(elements[0]);
        });
        it('doit retourner null si l\'id n\'existe pas', () => {
            expect(trouverParId(elements, 'inexistant')).toBe(null);
        });
        it('doit fonctionner avec une liste vide', () => {
            expect(trouverParId([], 'titre')).toBe(null);
        });
    });

    describe('exo1: trouverParClasse', () => {
        it('doit trouver tous les éléments avec la classe', () => {
            const result = trouverParClasse(elements, 'important');
            expect(result).toHaveLength(2);
            expect(result[0].id).toBe('titre');
            expect(result[1].id).toBe('sous-titre');
        });
        it('doit retourner un tableau vide si aucune correspondance', () => {
            expect(trouverParClasse(elements, 'inexistante')).toEqual([]);
        });
        it('doit fonctionner avec la classe "texte"', () => {
            const result = trouverParClasse(elements, 'texte');
            expect(result).toHaveLength(2);
        });
    });

    describe('exo1: trouverParTag', () => {
        it('doit trouver tous les éléments avec le tag donné', () => {
            const result = trouverParTag(elements, 'p');
            expect(result).toHaveLength(2);
        });
        it('doit retourner un tableau vide pour un tag inexistant', () => {
            expect(trouverParTag(elements, 'div')).toEqual([]);
        });
    });

    describe('exo2: trouverPremier (arbre)', () => {
        const arbre = {
            tag: 'div', id: 'root', children: [
                { tag: 'h1', id: 'titre', children: [], text: 'Titre' },
                {
                    tag: 'div', id: 'content', children: [
                        { tag: 'p', id: 'para1', children: [], text: 'Premier paragraphe' },
                        { tag: 'p', id: 'para2', children: [], text: 'Deuxième paragraphe' },
                    ]
                },
            ]
        };

        it('doit trouver le premier élément avec le tag', () => {
            const result = trouverPremier(arbre, 'p');
            expect(result.id).toBe('para1');
        });
        it('doit retourner la racine si elle correspond', () => {
            const result = trouverPremier(arbre, 'div');
            expect(result.id).toBe('root');
        });
        it('doit retourner null si le tag n\'existe pas', () => {
            expect(trouverPremier(arbre, 'span')).toBe(null);
        });
    });

    describe('exo2: trouverTous (arbre)', () => {
        const arbre = {
            tag: 'div', id: 'root', children: [
                { tag: 'p', id: 'p1', children: [] },
                {
                    tag: 'div', id: 'inner', children: [
                        { tag: 'p', id: 'p2', children: [] },
                    ]
                },
            ]
        };

        it('doit trouver tous les éléments avec le tag', () => {
            const result = trouverTous(arbre, 'p');
            expect(result).toHaveLength(2);
            expect(result.map(n => n.id)).toEqual(['p1', 'p2']);
        });
        it('doit inclure la racine si elle correspond', () => {
            const result = trouverTous(arbre, 'div');
            expect(result).toHaveLength(2);
            expect(result.map(n => n.id)).toEqual(['root', 'inner']);
        });
    });

    describe('exo2: trouverParent', () => {
        const arbre = {
            tag: 'div', id: 'root', children: [
                { tag: 'h1', id: 'titre', children: [] },
                {
                    tag: 'div', id: 'content', children: [
                        { tag: 'p', id: 'para', children: [] },
                    ]
                },
            ]
        };

        it('doit retourner le parent direct', () => {
            const result = trouverParent(arbre, 'para');
            expect(result.id).toBe('content');
        });
        it('doit retourner la racine pour un enfant direct', () => {
            const result = trouverParent(arbre, 'titre');
            expect(result.id).toBe('root');
        });
        it('doit retourner null si l\'id n\'existe pas', () => {
            expect(trouverParent(arbre, 'inexistant')).toBe(null);
        });
        it('doit retourner null pour la racine elle-même', () => {
            expect(trouverParent(arbre, 'root')).toBe(null);
        });
    });
});
