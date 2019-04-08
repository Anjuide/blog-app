
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Titre de l'application
  title = 'Blog-App';
  // Array des posts pour le passer au component PostListComponent
  posts = [
    {
      title : "Mon premier post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Pugnant Stoici cum Peripateticis. Praeclarae mortes sunt imperatoriae; In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Duo Reges: constructio interrete.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon autre post",
      content: "Quid iudicant sensus? Tu quidem reddes; In eo autem voluptas omnium Latine loquentium more ponitur, cum percipitur ea, quae sensum aliquem moveat, iucunditas. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo;",
      loveIts: 0,
      created_at: new Date()
    },
  ];



  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout !');
  }
}
