import { inject, Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  private dialog = inject(MatDialog);

  /**
   * Opens dialog with component and injects data,
   * where T is component type, U is type of dialog result and V is data type
   * @param component Component to open
   * @param data Data to inject
   * @returns Dialog reference
   */
  public openDialog<T, U, V>(component: ComponentType<T>, data?: V): MatDialogRef<T, U> {
    return this.dialog.open(component, {
      data: data
    });
  }
}
