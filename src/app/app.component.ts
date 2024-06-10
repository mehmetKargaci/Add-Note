import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Note } from './services/note.service';
import { AddNoteComponent } from "./add-note/add-note.component";
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NoteService } from './services/note.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AddNoteComponent, NoteListComponent, NoteDetailComponent]
})
export class AppComponent {
  selectedNote = signal(this.getNotes);

  constructor(private noteService: NoteService){ }

  getNotes(){    
    return this.noteService.getNotes();
  }

 

 
}
