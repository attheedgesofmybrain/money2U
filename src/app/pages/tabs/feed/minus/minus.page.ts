import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { MinusTransition } from 'src/app/models/minusTransition.model';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.page.html',
  styleUrls: ['./minus.page.scss'],
})
export class MinusPage implements OnInit {

  minusTransition = {} as MinusTransition

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, 
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async create(minusTransition: MinusTransition) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.collection('minusTransitions').add(minusTransition)
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
    if(!this.minusTransition.type && !this.minusTransition.desc && !this.minusTransition.date && !this.minusTransition.amount) {
      this.showToast('Entre com os Dados')
      return false
    }
    if(!this.minusTransition.type) {
      this.showToast('Entre com o Tipo')
      return false
    }
    if(!this.minusTransition.desc) {
      this.showToast('Entre com a Descrição')
      return false
    }
    if(!this.minusTransition.date) {
      this.showToast('Entre com a Data')
      return false
    }
    if(!this.minusTransition.amount) {
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
