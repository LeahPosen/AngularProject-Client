import { Component } from '@angular/core';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
ngOnInit(){
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('lecturer');
}
}
