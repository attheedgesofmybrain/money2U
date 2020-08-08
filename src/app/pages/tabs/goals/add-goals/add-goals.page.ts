import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.page.html',
  styleUrls: ['./add-goals.page.scss'],
})
export class AddGoalsPage implements OnInit {

  goal = {} as Goal

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController, 
    private firestore: AngularFirestore,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async create(goal: Goal) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.collection('goals').add(goal)
      } 
      catch(e) {
        this.showToast(e)
      }
      // dismiss loader
      (await loader).dismiss()
      // redirect to home page
      this.navCtrl.navigateRoot('tabs/goals')
    }
  }


  formValidation() { 
    if(!this.goal.name && !this.goal.desc && !this.goal.prompt && !this.goal.type  && !this.goal.estimated_value && !this.goal.monthly_contribution && !this.goal.total_year) {
      this.showToast('Entre com os Dados')
      return false
    }
    if(!this.goal.name) {
      this.showToast('Entre com o Nome')
      return false
    }
    if(!this.goal.desc) {
      this.showToast('Entre com a Descrição')
      return false
    }
    if(!this.goal.prompt) {
      this.showToast('Entre com o Prazo')
      return false
    }
    if(!this.goal.type) {
      this.showToast('Entre com o Tipo')
      return false
    }
    if(!this.goal.estimated_value) {
      this.showToast('Entre com o Valor')
      return false
    }
    if(!this.goal.monthly_contribution) {
      this.showToast('Entre com o Aporte')
      return false
    }
    if(!this.goal.total_year) {
      this.showToast('Entre com o Total')
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
