import {Component, OnInit} from '@angular/core';
import {RouterService} from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page: string ;

  constructor(private rservice: RouterService) {
  }
  ngOnInit() {
    this.page = this.rservice.targetpage;
    this.rservice.pagechanged
      .subscribe(
        () => {this.page = this.rservice.targetpage; }
      );
  }


}
