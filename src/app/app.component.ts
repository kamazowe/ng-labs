import { Component } from '@angular/core';
import { LoadingState } from '../../modules/loading-state/src/lib/result-state';

@Component({
  standalone: true,
  selector: 'nglabs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nglabs';
  loadingstate = LoadingState.INIT
}
