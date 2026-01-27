import { describe, expect, it } from 'vitest';
import { ajouterPropriete, clonerObjet, fusionner, sansMotDePasse } from '../../05_spread_operator/exo1';

describe('Spread Operator', () => {

  describe('clonerObjet', () => {
    it('devrait créer une copie identique', () => {
      const original = { a: 1, b: 2 };
      const copie = clonerObjet(original);
      expect(copie).toEqual(original);
    });

    it('devrait créer une nouvelle référence (pas le même objet)', () => {
      const original = { a: 1 };
      const copie = clonerObjet(original);
      expect(copie).not.toBe(original);
    });
  });

  describe('fusionner', () => {
    it('devrait combiner deux objets', () => {
      const a = { x: 1 };
      const b = { y: 2 };
      expect(fusionner(a, b)).toEqual({ x: 1, y: 2 });
    });

    it('le deuxième objet devrait écraser le premier en cas de conflit', () => {
      const a = { x: 1, z: 10 };
      const b = { y: 2, z: 20 };
      expect(fusionner(a, b)).toEqual({ x: 1, y: 2, z: 20 });
    });
  });

  describe('ajouterPropriete', () => {
    it('devrait ajouter une nouvelle propriété sans modifier l\'original', () => {
      const user = { name: 'Alice' };
      const updated = ajouterPropriete(user, 'age', 25);
      
      expect(updated).toEqual({ name: 'Alice', age: 25 });
      expect(user).toEqual({ name: 'Alice' }); // Immuabilité
    });

    it('devrait mettre à jour une propriété existante', () => {
      const user = { name: 'Alice', role: 'guest' };
      const updated = ajouterPropriete(user, 'role', 'admin');
      
      expect(updated).toEqual({ name: 'Alice', role: 'admin' });
    });
  });

  describe('sansMotDePasse', () => {
    it('devrait retirer la propriété password', () => {
      const user = { id: 1, email: 'test@test.com', password: '123' };
      const safeUser = sansMotDePasse(user);
      
      expect(safeUser).toEqual({ id: 1, email: 'test@test.com' });
      expect(safeUser.password).toBeUndefined();
    });

    it('ne devrait pas modifier l\'objet original', () => {
      const user = { password: '123' };
      sansMotDePasse(user);
      expect(user.password).toBe('123');
    });
  });
});
