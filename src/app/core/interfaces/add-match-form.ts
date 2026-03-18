import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { GameSetForm } from './game-set-form';

export interface AddMatchForm {
  firstPlayer: FormControl<string | null>;
  secondPlayer: FormControl<string | null>;
  sets: FormArray<FormGroup<GameSetForm>>;
}
