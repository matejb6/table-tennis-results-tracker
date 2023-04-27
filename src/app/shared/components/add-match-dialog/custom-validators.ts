import { AbstractControl, ValidationErrors } from '@angular/forms';
import { GameSetFormData } from '@shared/components/add-match-dialog/add-match-dialog.component';

export class CustomValidators {
  /**
   * Validator for match sets, valid if at least one player reaches 3 sets won
   */
  public static matchSets(control: AbstractControl<GameSetFormData[]>): ValidationErrors | null {
    const sets = control.value;
    let firstPlayerSetsWon = 0;
    let secondPlayerSetsWon = 0;

    sets.forEach((item) => {
      if (item.firstPlayerScore! > item.secondPlayerScore!) {
        firstPlayerSetsWon = ++firstPlayerSetsWon;
      } else if (item.firstPlayerScore! < item.secondPlayerScore!) {
        secondPlayerSetsWon = ++secondPlayerSetsWon;
      }
    });
    const valid = firstPlayerSetsWon >= 3 || secondPlayerSetsWon >= 3;

    return !valid ? { matchValid: true } : null;
  }

  /**
   * Validator for set gems,
   * valid if gem is won by 11 points and more than 1 point difference or by 12 or more points and 2 points difference
   */
  public static setGems(control: AbstractControl<GameSetFormData>): ValidationErrors | null {
    const firstPlayerScore: number = control.value.firstPlayerScore!;
    const secondPlayerScore: number = control.value.secondPlayerScore!;
    let valid = false;

    if (firstPlayerScore === 11 && secondPlayerScore < 10) {
      valid = true;
    } else if (secondPlayerScore === 11 && firstPlayerScore < 10) {
      valid = true;
    } else if (firstPlayerScore > 11 && secondPlayerScore === firstPlayerScore - 2) {
      valid = true;
    } else if (secondPlayerScore > 11 && firstPlayerScore === secondPlayerScore - 2) {
      valid = true;
    }

    return !valid ? { setValid: true } : null;
  }
}
