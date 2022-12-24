import { Component } from '@angular/core';
import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-progress-bar-ng-bootstrap',
  templateUrl: './progress-bar-ng-bootstrap.component.html',
  styleUrls: ['./progress-bar-ng-bootstrap.component.css'],
	standalone: true,
	imports: [NgbProgressbarModule],
	providers: [NgbProgressbarConfig], 
})
export class ProgressBarNgBootstrapComponent {
  constructor(config: NgbProgressbarConfig) {
		// customize default values of progress bars used by this component tree
		config.max = 1000;
		config.striped = true;
		config.animated = true;
		config.type = 'success';
		config.height = '20px';
	}
}
