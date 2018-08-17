import { Component, OnInit, Input} from '@angular/core';
import { MatDrawer } from '@angular/material';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() open:boolean;
  constructor() { }

  ngOnInit() {
  }

}
