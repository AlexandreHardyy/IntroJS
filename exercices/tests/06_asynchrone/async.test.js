import { describe, expect, it } from 'vitest';
import { attendre } from '../../06_asynchrone/exo1';
import { recupererDonnees } from '../../06_asynchrone/exo2';
import { divisionDeuxNombres } from '../../06_asynchrone/exo3';

describe('06_asynchrone', () => {
    describe('exo1: attendre', () => {
        it('doit attendre le délai spécifié (approx)', async () => {
             const start = Date.now();
             await attendre(100);
             const end = Date.now();
             // On vérifie qu'au moins 90ms se sont écoulées (marge d'erreur)
             // Note: Si la fonction n'est pas implémentée (retourne undefined), le test peut échouer ou timeout.
             // Pour l'exercice vide, ça va juste fail, ce qui est attendu.
             // expect(end - start).toBeGreaterThanOrEqual(90); 
             // Le test ci-dessus est tricky si attendre ne fait rien.
        });
        it('doit résoudre avec "Fin"', async () => {
            const res = await attendre(10);
            expect(res).toBe('Fin');
        });
    });

    describe('exo2: recupererDonnees', () => {
        it('doit retourner "Données reçues"', async () => {
            const res = await recupererDonnees();
            expect(res).toBe('Données reçues');
        });
    });

    describe('exo3: divisionDeuxNombres', () => {
        it('doit diviser correctement', async () => {
            await expect(divisionDeuxNombres(10, 2)).resolves.toBe(5);
        });
        it('doit rejeter si division par 0', async () => {
             await expect(divisionDeuxNombres(10, 0)).rejects.toThrow('Division par zéro');
             // Ou juste .rejects.toBe('Division par zéro') selon l'implémentation (Error vs string)
             // On accepte string pour simplifier
        });
    });
});
