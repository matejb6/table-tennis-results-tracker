import { FormControl } from '@angular/forms';

export interface GameSetForm {
  firstPlayerScore: FormControl<number | null>;
  secondPlayerScore: FormControl<number | null>;
}
