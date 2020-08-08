import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  goals: any

  constructor(
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getGoals()
  }

  async getGoals() {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    try {
     this.firestore.collection("goals").snapshotChanges().subscribe(data => {
        this.goals = data.map(e => {
          return {
            id: e.payload.doc.id,
            name: e.payload.doc.data()['name'],
            type: e.payload.doc.data()['type'], 
            desc: e.payload.doc.data()['desc'],
            prompt: e.payload.doc.data()['prompt'],
            estimated_value: e.payload.doc.data()['estimated_value'],
            monthly_contribution: e.payload.doc.data()['monthly_contribution'],
            total_year: e.payload.doc.data()['total_year']
          }
        })
      })
      loader.dismiss()
    }
    catch(e) {
      this.showToast(e)
    }
  }

  async deletarGoal(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present()

    await this.firestore.doc('goals/' + id).delete()

    // dismiss loader
    loader.dismiss()
  }
 
  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present())
  }

}
