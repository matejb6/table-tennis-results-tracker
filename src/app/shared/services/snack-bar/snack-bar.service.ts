import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  /**
   * @param message Message
   * @param duration Duration in milliseconds
   * @description Opens simple snack bar with a message
   */
  public showSnackBar(message: string, duration?: number): void {
    this.matSnackBar.open(message, 'Close', { duration: duration || 3000 });
  }
}
