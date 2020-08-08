import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Goal } from 'src/app/models/goal.model';

@Component({
  selector: 'app-edit-goals',
  templateUrl: './edit-goals.page.html',
  styleUrls: ['./edit-goals.page.scss'],
})
export class EditGoalsPage implements OnInit {

  goal = {} as Goal
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
    this.getGoalById(this.id)
  }

  async getGoalById(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    this.firestore.doc('goals/' + id).valueChanges().subscribe(data => {
      this.goal.name = data['name']
      this.goal.type = data['type']
      this.goal.desc = data['desc']
      this.goal.prompt = data['prompt']
      this.goal.estimated_value = data['estimated_value']
      this.goal.monthly_contribution = data['monthly_contribution']
      this.goal.total_year = data['total_year']
    })
    // dismiss loader
    loader.dismiss()
  }

  async update(goal: Goal) {
    if(this.formValidation()) {
      // show loader
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      })
      loader.present()

      try {
        await this.firestore.doc('goals/' + this.id).update(goal)
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
