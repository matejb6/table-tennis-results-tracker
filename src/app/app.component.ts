import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CoreModule } from '@core/core.module';
import { ToolbarModule } from '@shared/components/toolbar/toolbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModule, ToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
