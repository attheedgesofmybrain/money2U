import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  plusTransitions: any
  minusTransitions: any

  constructor(
    private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private bd: AngularFireDatabase
  ) 
  {
    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPlusTransitions()
    this.getMinusTransitions()
  }

  async getPlusTransitions() {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    try {
      this.firestore.collection("plusTransitions").snapshotChanges().subscribe(data => {
        this.plusTransitions = data.map(e => {
          return {
            id: e.payload.doc.id,
            type: e.payload.doc.data()['type'],
            desc: e.payload.doc.data()['desc'],
            date: e.payload.doc.data()['date'],
            amount: e.payload.doc.data()['amount']
          }
        })
      })
      // dismiss loader
      loader.dismiss()
    }
    catch(e) {
      this.showToast(e)
    }
  }

  async getMinusTransitions() {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present() 

    try {
      this.firestore.collection("minusTransitions").snapshotChanges().subscribe(data => {
        this.minusTransitions = data.map(e => {
          return {
            id: e.payload.doc.id,
            type: e.payload.doc.data()['type'],
            desc: e.payload.doc.data()['desc'],
            date: e.payload.doc.data()['date'],
            amount: e.payload.doc.data()['amount']
          }
        })
      })
      // dismiss loader
      loader.dismiss()
    }
    catch(e) {
      this.showToast(e)
    }
  }

  async deletarPlusTransition(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present()

    await this.firestore.doc('plusTransitions/' + id).delete()

    // dismiss loader
    loader.dismiss()
  }

  async deletarMinusTransition(id: string) {
    // show loader
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    })
    loader.present()

    await this.firestore.doc('minusTransitions/' + id).delete()

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
