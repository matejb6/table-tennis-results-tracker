import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  /**
   * Returns dialog config
   * @param data Data
   * @returns Dialog config
   */
  private getDialogConfig(data?: any): MatDialogConfig {
    return {
      data: data
    };
  }

  /**
   * Opens dialog with component and injects data
   * @param component Component to open
   * @param data Data to inject
   * @returns Dialog reference
   */
  public openDialog(component: any, data?: any): MatDialogRef<unknown, any> {
    return this.dialog.open(component, this.getDialogConfig(data));
  }
}
