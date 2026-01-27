import { describe, expect, it } from 'vitest';
import { Livre } from '../../03_classes/exo1';
import { Utilisateur } from '../../03_classes/exo2';
import { CompteBancaire } from '../../03_classes/exo3';

describe('03_classes', () => {
    describe('exo1: Livre', () => {
        it('doit créer un objet livre avec titre et auteur', () => {
            const l = new Livre('Le Petit Prince', 'St-Exupéry');
            expect(l.titre).toBe('Le Petit Prince');
            expect(l.auteur).toBe('St-Exupéry');
        });
    });

    describe('exo2: Utilisateur', () => {
        it('doit se présenter correctement', () => {
            const u = new Utilisateur('Alice', 'alice@example.com');
            expect(u.sePresenter()).toBe("Je m'appelle Alice et mon email est alice@example.com");
        });
    });

    describe('exo3: CompteBancaire', () => {
        it('doit utiliser getter et setter pour le solde', () => {
            const c = new CompteBancaire(100);
            expect(c.solde).toBe(100);
            
            c.solde = 200;
            expect(c.solde).toBe(200);
            
            c.solde = -50; // Doit être ignoré
            expect(c.solde).toBe(200);
        });
    });
});
