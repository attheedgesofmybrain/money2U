import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { MinusTransition } from 'src/app/models/minusTransition.model';

@Component({
  selector: 'app-edit-minus',
  templateUrl: './edit-minus.page.html',
  styleUrls: ['./edit-minus.page.scss'],
})
export class EditMinusPage implements OnInit {

  minusTransition = {} as MinusTransition
  id: any

  constructor(
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) 
  { 
    this.id = this.actRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() 
  {
    this.getMinusById(this.id)
  }

  async getMinusById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    this.firestore.doc('minusTransitions/' + id).valueChanges().subscribe(data => {
      this.minusTransition.type = data['type']
      this.minusTransition.desc = data['desc']
      this.minusTransition.date = data['date']
      this.minusTransition.amount = data['amount']
    })
    // dismiss loader
    loader.dismiss()
  }

  async update(minusTransition: MinusTransition) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.doc('minusTransition/' + this.id).update(minusTransition)
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
