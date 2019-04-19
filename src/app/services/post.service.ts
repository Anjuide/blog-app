import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class PostService{

    // Créer un Subject qui gèrera des array de type any[]
    postsSubject = new Subject<any[]>();

    // Array des posts pour le passer au component PostListComponent
    private posts = [
        {
            id: 1,
            title: "Mon premier post",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam Pyrrho, Aristo, Erillus iam diu abiecti. Pugnant Stoici cum Peripateticis. Praeclarae mortes sunt imperatoriae; In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt.",
            loveIts: -1,
            created_at: new Date()
        },
        {
            id: 2,
            title: "Mon deuxième post",
            content: "Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Duo Reges: constructio interrete.",
            loveIts: 0,
            created_at: new Date()
        },
        {
            id: 3,
            title: "Mon autre post",
            content: "Quid iudicant sensus? Tu quidem reddes; In eo autem voluptas omnium Latine loquentium more ponitur, cum percipitur ea, quae sensum aliquem moveat, iucunditas. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo;",
            loveIts: 1,
            created_at: new Date()
        },
    ];

    // émettre les posts sous forme de Subject 
    emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    // Récupérer l'id d'un post
    getPostById(id: number) {
        const post = this.posts.find(
            (resultat) => {
                return post.id === id;
            }
        );
        return post;
    }

    // Ajouter un nouveau post
    addPost(title: string, content: string) {
        const postObject = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        postObject.title = title;
        postObject.content = content;
        postObject.loveIts = 0;
        postObject.created_at = new Date();
        postObject.id = this.posts[(this.posts.length - 1)].id + 1;
        this.posts.push(postObject);
        this.emitPostSubject();
    }

    // Supprimer un post
    deletePost(i: number) {
        this.posts[i].title = 'Ce post va être supprimé';
    }
}