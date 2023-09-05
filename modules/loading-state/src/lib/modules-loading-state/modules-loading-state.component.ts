import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nglabs-modules-loading-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modules-loading-state.component.html',
  styleUrls: ['./modules-loading-state.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulesLoadingStateComponent {}
