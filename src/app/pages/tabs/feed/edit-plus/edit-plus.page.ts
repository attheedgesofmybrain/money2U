import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlusTransition } from 'src/app/models/plusTransition.model';


@Component({
  selector: 'app-edit-plus',
  templateUrl: './edit-plus.page.html',
  styleUrls: ['./edit-plus.page.scss'],
})
export class EditPlusPage implements OnInit {

  plusTransition = {} as PlusTransition
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
    this.getPlusById(this.id)
  }

  async getPlusById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    this.firestore.doc('plusTransitions/' + id).valueChanges().subscribe(data => {
      this.plusTransition.type = data['type']
      this.plusTransition.desc = data['desc']
      this.plusTransition.date = data['date']
      this.plusTransition.amount = data['amount']
    })
    // dismiss loader
    loader.dismiss()
  }

  async update(plusTransition: PlusTransition) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.doc('plusTransitions/' + this.id).update(plusTransition)
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
