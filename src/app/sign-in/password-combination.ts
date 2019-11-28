import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordCombination {
    static passwordCombinationWrong(control: AbstractControl) : ValidationErrors | null {
        if (control.get('confirmPassword').dirty && control.get('password').dirty) {
            if (control.get('password').value != control.get('confirmPassword').value) {
                return { passwordCombinationWrong: true };
            }
        }
        return null;
    }
}