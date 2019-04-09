import { Component } from '@angular/core';
// votre AppComponent contiendra l'array des posts, et il le passera à un component PostListComponent OK
// votre PostListComponent affichera un PostListItemComponent pour chaque post dans l'array qu'il a reçu
// chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template
// les PostListItemComponent auront des boutons qui permettent d'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n'a pas besoin d'être remontée au component parent
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
      loveIts: -1,
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
      loveIts: 1,
      created_at: new Date()
    },
  ];

  constructor() {
  }

}
