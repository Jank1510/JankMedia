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
  nameRegister: string = ''
  birthRegister: string = ''
  userRegister: string = ''
  passwordRegister: string = ''
  password2Register: string = ''
  checkbox1: boolean = false
  checkbox2: boolean = false
  MensajedeError: string = ''

  constructor() {
    this.signIn = true
    this.signUp = false
  }

  ngOnInit(): void {
  }

  nextFocus(inputF: any, inputS: any) {
    document.getElementById(inputF)!.addEventListener('keydown', function (event) {
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
  SignUpRegister() {
    if (this.nameRegister === '') {
      var name = document.getElementById("nameRegister") as HTMLImageElement;
      name.focus()
    } else {
      if (this.birthRegister === '') {
        this.MensajedeError = ' date of birth not recorded '

      } else {
        if (this.userRegister === '') {
          var user = document.getElementById("userRegister") as HTMLImageElement;
          user.focus()
        } else {
          if (this.passwordRegister === '') {
            var password = document.getElementById("passwordRegister") as HTMLImageElement;
            password.focus()
          } else {
            if (this.password2Register === '') {
              var password2 = document.getElementById("password2Register") as HTMLImageElement;
              password2.focus()
            } else {
              if (this.checkbox1 === false && this.checkbox2 === false) {
                this.MensajedeError = 'Sex not selected'
              } else {

                if (this.userRegister.substr(-1) != '@') {
                  this.MensajedeError = 'user example: Nickname@'

                } else {


                  if (this.passwordRegister != this.password2Register) {
                    this.MensajedeError = ' passwords are not the same! '
                    this.passwordRegister = ''
                    this.password2Register = ''
                  } else {
                    this.MensajedeError = ''

                    console.log('todo bonito')
                  }
                }
              }
            }
          }
        }
      }
    }
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
