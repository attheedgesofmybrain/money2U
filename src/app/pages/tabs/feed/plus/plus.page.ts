import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlusTransition } from 'src/app/models/plusTransition.model';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
})
export class PlusPage implements OnInit {

  plusTransition = {} as PlusTransition

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, 
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async create(plusTransition: PlusTransition) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.collection('plusTransitions').add(plusTransition)
      } 
      catch(e) {
        this.showToast(e)
      }
      // dismiss loader
      (await loader).dismiss()
      // redirect to home page
      this.navCtrl.navigateRoot('tabs/feed')
    }
  }

  formValidation() {
    if(!this.plusTransition.type && !this.plusTransition.desc && !this.plusTransition.date && !this.plusTransition.amount) {
      this.showToast('Entre com os Dados')
      return false
    }
    if(!this.plusTransition.type) {
      this.showToast('Entre com o Tipo')
      return false
    }
    if(!this.plusTransition.desc) {
      this.showToast('Entre com a Descrição')
      return false
    }
    if(!this.plusTransition.date) {
      this.showToast('Entre com a Data')
      return false
    }
    if(!this.plusTransition.amount) {
      this.showToast('Entre com o Valor')
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
