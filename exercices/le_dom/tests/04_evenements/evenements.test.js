import { describe, expect, it, vi } from 'vitest';
import { GestionnaireEvenements } from '../../04_evenements/exo1';
import { deleguer, simulerBubbling, trouverChemin } from '../../04_evenements/exo2';

describe('04_evenements', () => {
    describe('exo1: GestionnaireEvenements', () => {
        it('doit ajouter et déclencher un écouteur', () => {
            const ge = new GestionnaireEvenements();
            const callback = vi.fn();
            ge.addEventListener('click', callback);
            ge.dispatchEvent('click');
            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(expect.objectContaining({ type: 'click' }));
        });

        it('doit supporter plusieurs écouteurs pour le même événement', () => {
            const ge = new GestionnaireEvenements();
            const cb1 = vi.fn();
            const cb2 = vi.fn();
            ge.addEventListener('click', cb1);
            ge.addEventListener('click', cb2);
            ge.dispatchEvent('click');
            expect(cb1).toHaveBeenCalledTimes(1);
            expect(cb2).toHaveBeenCalledTimes(1);
        });

        it('doit passer les données supplémentaires dans l\'event', () => {
            const ge = new GestionnaireEvenements();
            const callback = vi.fn();
            ge.addEventListener('input', callback);
            ge.dispatchEvent('input', { value: 'test' });
            expect(callback).toHaveBeenCalledWith(expect.objectContaining({
                type: 'input',
                value: 'test'
            }));
        });

        it('doit retirer un écouteur', () => {
            const ge = new GestionnaireEvenements();
            const callback = vi.fn();
            ge.addEventListener('click', callback);
            ge.removeEventListener('click', callback);
            ge.dispatchEvent('click');
            expect(callback).not.toHaveBeenCalled();
        });

        it('ne doit pas planter si on dispatch un événement sans écouteurs', () => {
            const ge = new GestionnaireEvenements();
            expect(() => ge.dispatchEvent('click')).not.toThrow();
        });

        it('doit compter les écouteurs', () => {
            const ge = new GestionnaireEvenements();
            expect(ge.countListeners('click')).toBe(0);
            ge.addEventListener('click', () => {});
            ge.addEventListener('click', () => {});
            expect(ge.countListeners('click')).toBe(2);
            expect(ge.countListeners('input')).toBe(0);
        });
    });

    describe('exo2: trouverChemin', () => {
        const arbre = {
            id: 'root', tag: 'div', children: [
                {
                    id: 'parent', tag: 'div', children: [
                        { id: 'enfant', tag: 'button', children: [] }
                    ]
                },
                { id: 'frere', tag: 'p', children: [] }
            ]
        };

        it('doit retourner le chemin de la racine à la cible', () => {
            const chemin = trouverChemin(arbre, 'enfant');
            expect(chemin.map(n => n.id)).toEqual(['root', 'parent', 'enfant']);
        });
        it('doit retourner [racine] si la cible est la racine', () => {
            const chemin = trouverChemin(arbre, 'root');
            expect(chemin.map(n => n.id)).toEqual(['root']);
        });
        it('doit retourner un tableau vide si non trouvé', () => {
            expect(trouverChemin(arbre, 'inexistant')).toEqual([]);
        });
    });

    describe('exo2: simulerBubbling', () => {
        const arbre = {
            id: 'root', tag: 'div', handlers: { click: [() => {}] }, children: [
                {
                    id: 'parent', tag: 'div', handlers: {}, children: [
                        { id: 'enfant', tag: 'button', handlers: { click: [() => {}] }, children: [] }
                    ]
                }
            ]
        };

        it('doit retourner les ids des nœuds avec handlers dans l\'ordre du bubbling', () => {
            const result = simulerBubbling(arbre, 'enfant', 'click');
            expect(result).toEqual(['enfant', 'root']);
        });
        it('doit retourner un tableau vide si pas de handlers pour ce type', () => {
            const result = simulerBubbling(arbre, 'enfant', 'input');
            expect(result).toEqual([]);
        });
    });

    describe('exo2: deleguer', () => {
        it('doit exécuter le callback uniquement pour les tags correspondants', () => {
            const elements = [
                { id: '1', tag: 'li', text: 'A' },
                { id: '2', tag: 'p', text: 'B' },
                { id: '3', tag: 'li', text: 'C' },
            ];
            const resultats = [];
            const count = deleguer(elements, 'li', (el) => resultats.push(el.text));
            expect(count).toBe(2);
            expect(resultats).toEqual(['A', 'C']);
        });
        it('doit retourner 0 si aucun tag ne correspond', () => {
            const elements = [{ id: '1', tag: 'p', text: 'A' }];
            expect(deleguer(elements, 'li', () => {})).toBe(0);
        });
    });
});
