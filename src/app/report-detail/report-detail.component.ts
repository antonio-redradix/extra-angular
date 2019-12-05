import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { ReportService} from '../report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss']
})
export class ReportDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private reportService: ReportService) { }
  report = [];
  selectedReport;
  id;
  ngOnInit() {
    this.report = this.reportService.getReport();
    this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.selectedReport = this.report[this.id];
      console.log(params.get('id'));
    });
  }
}
