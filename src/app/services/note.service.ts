import { Injectable, signal } from '@angular/core';

export class Note {
  id = Math.random();
  title = '';
  subNotes: SubNote[] = [];
}

class SubNote {
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
          context: 'kjhshfksajhdsak welkjfnowlisen wlei welkifmseorli'
        },
        {
          id: 2,
          subtitle: 'React',
          context: 'kjhshfksajhdsak welkjfnowlisen wlei welkifmseorli'
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
          context: 'kjhshfksajhdsak welkjfnowlisen wlei welkifmseorli'
        },
        {
          id: 4,
          subtitle: 'Mysql',
          context: 'kjhshfksajhdsak welkjfnowlisen wlei welkifmseorli'
        },
      ]
    },
  ];

  selectedNote = {
    nodeId: -1,
    subNoteId: -1,
  }

  notes = structuredClone(this._notes);

  addNote(title: string) {
    const note  = new Note();
    note.title = title;
    this.notes.push(note);
  }
}
