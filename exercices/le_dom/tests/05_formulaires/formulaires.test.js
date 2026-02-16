import { describe, expect, it } from 'vitest';
import { validerEmail, validerFormulaire, validerMotDePasse } from '../../05_formulaires/exo1';
import { FormulaireData } from '../../05_formulaires/exo2';

describe('05_formulaires', () => {
    describe('exo1: validerEmail', () => {
        it('doit valider un email correct', () => {
            const result = validerEmail('alice@example.com');
            expect(result.valide).toBe(true);
            expect(result.message).toBe('');
        });
        it('doit rejeter un email sans @', () => {
            const result = validerEmail('alice.example.com');
            expect(result.valide).toBe(false);
            expect(result.message).toBe('Email invalide');
        });
        it('doit rejeter un email sans . après @', () => {
            const result = validerEmail('alice@example');
            expect(result.valide).toBe(false);
            expect(result.message).toBe('Email invalide');
        });
    });

    describe('exo1: validerMotDePasse', () => {
        it('doit valider un mot de passe correct', () => {
            const result = validerMotDePasse('Motdepasse1');
            expect(result.valide).toBe(true);
            expect(result.message).toBe('');
        });
        it('doit rejeter un mot de passe trop court', () => {
            const result = validerMotDePasse('Ab1');
            expect(result.valide).toBe(false);
            expect(result.message).toBe('Le mot de passe doit contenir au moins 8 caractères');
        });
        it('doit rejeter un mot de passe sans majuscule', () => {
            const result = validerMotDePasse('motdepasse1');
            expect(result.valide).toBe(false);
            expect(result.message).toBe('Le mot de passe doit contenir au moins une majuscule');
        });
        it('doit rejeter un mot de passe sans chiffre', () => {
            const result = validerMotDePasse('Motdepasse');
            expect(result.valide).toBe(false);
            expect(result.message).toBe('Le mot de passe doit contenir au moins un chiffre');
        });
    });

    describe('exo1: validerFormulaire', () => {
        it('doit valider un formulaire correct', () => {
            const result = validerFormulaire({ nom: 'Alice', email: 'alice@mail.com', age: 25 });
            expect(result.valide).toBe(true);
            expect(result.erreurs).toEqual({});
        });
        it('doit rejeter un nom vide', () => {
            const result = validerFormulaire({ nom: '', email: 'a@b.c', age: 25 });
            expect(result.valide).toBe(false);
            expect(result.erreurs.nom).toBe('Le nom est obligatoire');
        });
        it('doit rejeter un nom trop court', () => {
            const result = validerFormulaire({ nom: 'A', email: 'a@b.c', age: 25 });
            expect(result.valide).toBe(false);
            expect(result.erreurs.nom).toBe('Le nom doit contenir au moins 2 caractères');
        });
        it('doit rejeter un email invalide', () => {
            const result = validerFormulaire({ nom: 'Alice', email: 'invalid', age: 25 });
            expect(result.valide).toBe(false);
            expect(result.erreurs.email).toBe('Email invalide');
        });
        it('doit rejeter un âge hors limites', () => {
            const result = validerFormulaire({ nom: 'Alice', email: 'a@b.c', age: 0 });
            expect(result.valide).toBe(false);
            expect(result.erreurs.age).toBe("L'âge doit être entre 1 et 150");
        });
        it('doit accumuler toutes les erreurs', () => {
            const result = validerFormulaire({ nom: '', email: 'bad', age: 200 });
            expect(result.valide).toBe(false);
            expect(Object.keys(result.erreurs)).toHaveLength(3);
        });
    });

    describe('exo2: FormulaireData', () => {
        it('doit initialiser avec des données', () => {
            const fd = new FormulaireData({ nom: 'Alice' });
            expect(fd.get('nom')).toBe('Alice');
        });

        it('get doit retourner null pour une clé inexistante', () => {
            const fd = new FormulaireData();
            expect(fd.get('nom')).toBe(null);
        });

        it('set doit définir une valeur', () => {
            const fd = new FormulaireData();
            fd.set('nom', 'Bob');
            expect(fd.get('nom')).toBe('Bob');
        });

        it('set doit écraser une valeur existante', () => {
            const fd = new FormulaireData({ nom: 'Alice' });
            fd.set('nom', 'Bob');
            expect(fd.get('nom')).toBe('Bob');
        });

        it('append doit permettre plusieurs valeurs', () => {
            const fd = new FormulaireData();
            fd.append('hobby', 'sport');
            fd.append('hobby', 'lecture');
            expect(fd.getAll('hobby')).toEqual(['sport', 'lecture']);
        });

        it('has doit vérifier l\'existence', () => {
            const fd = new FormulaireData({ nom: 'Alice' });
            expect(fd.has('nom')).toBe(true);
            expect(fd.has('email')).toBe(false);
        });

        it('delete doit supprimer la clé', () => {
            const fd = new FormulaireData({ nom: 'Alice' });
            fd.delete('nom');
            expect(fd.has('nom')).toBe(false);
            expect(fd.get('nom')).toBe(null);
        });

        it('getAll doit retourner un tableau vide pour clé inexistante', () => {
            const fd = new FormulaireData();
            expect(fd.getAll('x')).toEqual([]);
        });

        it('toObject doit convertir en objet simple', () => {
            const fd = new FormulaireData({ nom: 'Alice', email: 'a@b.c' });
            expect(fd.toObject()).toEqual({ nom: 'Alice', email: 'a@b.c' });
        });

        it('toObject avec valeurs multiples doit garder la première', () => {
            const fd = new FormulaireData();
            fd.append('hobby', 'sport');
            fd.append('hobby', 'lecture');
            expect(fd.toObject().hobby).toBe('sport');
        });
    });
});
