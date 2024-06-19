import { Component, Input, inject, input } from '@angular/core';
import { Note, SubNote } from '../services/note.service';
import { CommonModule } from '@angular/common';
import { NoteService } from '../services/note.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
  note = input.required<Note>();
  subNote = input.required<SubNote>();  
  contextControl = new FormControl('');
  
  noteService = inject(NoteService);

  addContext() {
    let context = this.contextControl.value;    
    if (this.subNote && context && this.contextControl.valid){
      this.noteService.addContext(this.subNote(),context);                
    }     
  }
}
