import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackBarService {
  private matSnackBar = inject(MatSnackBar);

  /**
   * Opens simple snack bar with a message
   * @param message Message
   * @param duration Duration in milliseconds
   */
  public showSnackBar(message: string, duration?: number): void {
    this.matSnackBar.open(message, 'Close', { duration: duration || 3000 });
  }
}
