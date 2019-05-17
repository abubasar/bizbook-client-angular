import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'loginnew',
  templateUrl: './loginnew.component.html',
  styleUrls: ['./loginnew.component.scss']
})
export class LoginnewComponent implements OnInit {
  model: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() { }
  login() {
    this.auth.login(this.model).subscribe(
      next => {
        alert('Logged in successfully');
      },
      error => {
        alert('Logged in fail');
      },

    );
  }
}
