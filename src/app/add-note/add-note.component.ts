import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Note, NoteService } from '../services/note.service';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule, FormsModule, NoteListComponent, ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css'
})
export class AddNoteComponent {

  @Output() noteData = new EventEmitter<Note>();
  titleControl = new FormControl('');
  @Input() note? : Note;

  notes = this.noteService.notes;

  constructor(private noteService: NoteService){ }

  addNote(): void {
    let title = this.titleControl.value;
    if (title && this.titleControl.valid){
      this.noteService.addNote(title);
      console.log(this.noteService.notes);
      this.titleControl.setValue('');      
    }   
  }

  onTitleClick(note: Note) {
    this.noteData.emit(note);
  }
}
