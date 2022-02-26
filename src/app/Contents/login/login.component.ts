import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: boolean
  signUp: boolean
  animationMain!: string
  userLogin: string = ''
  passwordLogin: string = ''
  nameRegister:string=''
  birthRegister:string=''
  userRegister:string=''
  passwordRegister:string=''
  password2Register:string=''
  checkbox1:any
  checkbox2:any

  constructor() {
    this.signIn = true
    this.signUp = false
  }

  ngOnInit(): void {
  }

   nextFocus(inputF:any, inputS:any) {
    document.getElementById(inputF)!.addEventListener('keydown', function(event) {
      if (event.keyCode == 13) {
        document.getElementById(inputS)!.focus();
      }
    });
  }

  SignInLogin() {
    if (this.userLogin === '') {
      var user = document.getElementById("userLogin") as HTMLImageElement;
      user.focus()
    } else {
      if (this.passwordLogin === '') {
        var password = document.getElementById("passwordLogin") as HTMLImageElement;
        password.focus()
      } else {
        console.log(this.userLogin, this.passwordLogin)
      }
    }
  }
  SignUpRegister(){
    console.log(this.nameRegister,this.birthRegister,this.userRegister,this.passwordRegister,this.password2Register,this.checkbox1,this.checkbox2)
  }
  SignIn() {

    this.signIn = true
    this.signUp = false
    this.animationMain = 'SingUpSingIn'
    setTimeout(() => {
    }, 500);
  }


  SignUp() {
    this.animationMain = 'SingInSingUp'
    setTimeout(() => {
      this.signIn = false
      this.signUp = true
    }, 500);

  }
}
