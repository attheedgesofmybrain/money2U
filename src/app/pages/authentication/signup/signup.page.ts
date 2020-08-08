import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user = {} as User

  constructor(
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController, 
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  async register(user: User) {

    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.pass)
        .then(data => {
          console.log(data)
          // redirect to home page
          this.navCtrl.navigateRoot('tabs')
        })     
      } 
      catch(e) {
        this.showToast(e)
      }
      // dismiss loader
      (await loader).dismiss()
    }
  }

  formValidation() {
    if(!this.user.email && !this.user.pass) {
      this.showToast('Entre com os Dados')
      return false
    }
    if(!this.user.email) {
      this.showToast('Entre com o email')
      return false
    }
    if(!this.user.pass) {
      this.showToast('Entre com a senha')
      return false
    }
    return true
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present())
  }

}
