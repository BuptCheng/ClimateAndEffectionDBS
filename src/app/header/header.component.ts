import { Component, OnInit } from '@angular/core';
import {RouterService} from '../router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rservice: RouterService) { }

  ngOnInit() {
  }
  switch(input: string) {
    this.rservice.updatatargetpage(input);
    this.rservice.pagechanged.emit();
  }
}
