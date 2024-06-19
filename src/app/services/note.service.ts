import { Injectable , signal } from '@angular/core';

export class Note {
  id = Math.random();
  title = '';
  subNotes: SubNote[] = [];
}

export class SubNote {
  id = Math.random();
  subtitle = '';
  context = '';
}

@Injectable({providedIn: 'root'})
export class NoteService {
 
  notes = signal<Note[]>([
    {
      id: 1,
      title: 'Javascript',
      subNotes: [
        {
          id: 1,
          subtitle: 'Angular',
          context: 'my example context is here'
        },
        {
          id: 2,
          subtitle: 'React',
          context: 'please add new context'
        },
      ]
    },
    {
      id: 2,
      title: 'NodeJS',
      subNotes: [
        {
          id: 3,
          subtitle: 'NestJS',
          context: 'work hard'
        },
        {
          id: 4,
          subtitle: 'Mysql',
          context: 'never give up!'
        },
      ]
    },
  ]);

  addNote(title: string) {  
  let note = new Note();
  note.title = title;
  this.notes().push(note);
  }

  addSubNote(note: Note, subtitle: string) {
    note.subNotes.push(
      {
        id: Math.random(),
        subtitle: subtitle,
        context: ''
      }
    );
    console.log(this.notes); 
                
  }

  addContext(subnote : SubNote, context: string) { 
    subnote.context = context;   
  }

}
