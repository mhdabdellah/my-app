import { Component, Input, OnInit } from '@angular/core';
import { ServiceProgressBarService } from '../services/service-progress-bar.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input('curPercentage') curPercentage = 0;
  
  constructor(private serviceProgress: ServiceProgressBarService) { }

  ngOnInit() {
    this.serviceProgress.checkPercentage()

  }

}

