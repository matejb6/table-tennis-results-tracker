import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { GameSetForm } from './game-set-form';

export interface AddMatchForm {
  players: FormArray<FormControl<string | null>>;
  sets: FormArray<FormGroup<GameSetForm>>;
}
