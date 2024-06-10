import { Component, input } from '@angular/core';
import { Note, NoteService } from '../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule,NoteListComponent],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {
  title!: string; 
  notes = this.getNotes();
  
  
  constructor(private noteService: NoteService){ }

  getNotes(){    
    return this.noteService.getNotes();
  }

  addNote(): void {
    if(this.title){
      this.noteService.addNote(this.title);
      const a = this.getNotes();
      console.log(a);       
      this.title = '';  
    }

  }

}
