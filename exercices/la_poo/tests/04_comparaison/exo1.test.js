import { describe, expect, it } from 'vitest';
import { estIdentique, estIdentiqueComplet, sontLesMemesReferences } from '../../04_comparaison/exo1';

describe('Comparaison d\'objets', () => {
  
  describe('sontLesMemesReferences', () => {
    it('devrait retourner true pour la même référence', () => {
      const a = { id: 1 };
      const b = a;
      expect(sontLesMemesReferences(a, b)).toBe(true);
    });

    it('devrait retourner false pour des objets identique mais références différentes', () => {
      const a = { id: 1 };
      const b = { id: 1 };
      expect(sontLesMemesReferences(a, b)).toBe(false);
    });
  });

  describe('estIdentique (JSON)', () => {
    it('devrait retourner true pour des contenus identiques', () => {
      const a = { nom: 'Alice', age: 30 };
      const b = { nom: 'Alice', age: 30 };
      expect(estIdentique(a, b)).toBe(true);
    });

    it('devrait retourner false pour des contenus différents', () => {
      const a = { nom: 'Alice' };
      const b = { nom: 'Bob' };
      expect(estIdentique(a, b)).toBe(false);
    });
  });

  describe('estIdentiqueComplet (Deep Equal)', () => {
    it('devrait gérer les objets simples', () => {
      expect(estIdentiqueComplet({ a: 1 }, { a: 1 })).toBe(true);
      expect(estIdentiqueComplet({ a: 1 }, { a: 2 })).toBe(false);
    });

    it('devrait gérer les objets imbriqués', () => {
      const obj1 = { user: { name: 'Max', address: { city: 'Paris' } } };
      const obj2 = { user: { name: 'Max', address: { city: 'Paris' } } };
      const obj3 = { user: { name: 'Max', address: { city: 'Lyon' } } };

      expect(estIdentiqueComplet(obj1, obj2)).toBe(true);
      expect(estIdentiqueComplet(obj1, obj3)).toBe(false);
    });
  });
});
