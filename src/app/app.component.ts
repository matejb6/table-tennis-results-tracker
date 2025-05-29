import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from '@app/core/core.module';
import { ToolbarComponent } from '@app/shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
