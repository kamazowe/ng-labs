import { Component } from '@angular/core';
import { ModulesLoadingStateComponent } from '@nglabs/modules/loading-state';

@Component({
  standalone: true,
  imports: [ModulesLoadingStateComponent],
  selector: 'nglabs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nglabs';
}
