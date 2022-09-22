import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router, public fb: FormBuilder){

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  };

 //constructor(private router: Router){}
  irAlInicio(){
    this.router.navigate(['/inicio'])
}

 irArecuperar(){
    this.router.navigate(['/recuperar'])

}

  ngOnInit() {
  }

}
