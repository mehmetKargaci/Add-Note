import { Component, OnInit,Output,EventEmitter, Input ,inject, signal, computed} from '@angular/core';
import { NoteService, Note, SubNote } from '../services/note.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteDetailComponent } from '../note-detail/note-detail.component';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NoteDetailComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent {

  @Input() note?: Note;
  @Output() subNoteEmitter = new EventEmitter<SubNote>();

  subtitleConrol = new FormControl('');
  noteService = inject(NoteService);
  

 
  addSubnote(): void {
    let title = this.subtitleConrol.value;
    if (title && this.subtitleConrol.valid){
      this.noteService.addNote(title);
      this.subtitleConrol.setValue('');      
    }   

  }

  onSubNoteClick(subNote: SubNote){
    this.subNoteEmitter.emit(subNote);
  }

 
    



}
