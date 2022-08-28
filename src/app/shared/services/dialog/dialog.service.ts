import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  /**
   * @private
   * @param data Data
   * @returns Dialog config
   * @description Returns dialog config
   */
  private getDialogConfig(data?: any): MatDialogConfig {
    return {
      data: data
    };
  }

  /**
   * @public
   * @param component Component to open
   * @param data Data to inject
   * @returns Dialog reference
   * @description Opens dialog with component and injects data
   */
  public openDialog(component: any, data?: any): MatDialogRef<unknown, any> {
    return this.dialog.open(component, this.getDialogConfig(data));
  }
}
