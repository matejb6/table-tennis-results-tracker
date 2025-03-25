import { FormControl } from '@angular/forms';

export interface AddPlayerForm {
  name: FormControl<string | null>;
}
