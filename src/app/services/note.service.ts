import { Injectable } from '@angular/core';

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
  private _notes : Note[] = [
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
  ];

  selectedNote = {
    noteId: -1,
    subNoteId: -1,
  }

  notes = structuredClone(this._notes);
  

  addNote(title: string) {  
    let note  = new Note();  
    note.title = title;
    this.notes.push(note);   
  }

  addSubNote(note: Note, subtitle: string) {
    note.subNotes.push({
      id : Math.random(),
      subtitle : subtitle,
      context:""
    });      
  }
  addContext(note: Note, subtitle: string, context: string) {
    note.subNotes.push({
      id : Math.random(),
      subtitle : subtitle,
      context: context
    });      
    
  }
}
