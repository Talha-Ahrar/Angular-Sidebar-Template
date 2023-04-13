import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  myDate = new Date();

  currentTime: string | undefined;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);}
}
