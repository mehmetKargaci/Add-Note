import { Component, Input, inject, input } from '@angular/core';
import { Note, SubNote } from '../services/note.service';
import { CommonModule } from '@angular/common';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css'
})
export class NoteDetailComponent {
addContext() {
throw new Error('Method not implemented.');
}
  @Input() subNote? : SubNote;
  
  
  noteService = inject(NoteService);

  notes = this.noteService.notes;  
  

 
  


}
