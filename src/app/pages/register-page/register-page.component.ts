import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  userModel = new User();

  constructor(private auth: AuthService ) { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    //console.log(data)
    //console.log(this.userModel)
    this.auth.register(this.userModel).subscribe((response) => {
      console.log(response)
    })
  }

}
