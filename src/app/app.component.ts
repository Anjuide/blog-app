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
  constructor() {
  }

}
