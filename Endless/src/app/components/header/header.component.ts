/* 
Header Compnent - Purely HTML and CSS. TS is used for initalization 
*/
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private responsive: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
