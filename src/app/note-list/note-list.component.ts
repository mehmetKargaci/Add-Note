import { Component, OnInit,Output,EventEmitter, Input ,inject, signal, computed, input, output} from '@angular/core';
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

  note = input.required<Note>();
  subNoteEmitter = output<SubNote>();
  
  noteService = inject(NoteService);
  subTitleControl = new FormControl('');  

  onSubNoteClick(subNote: SubNote){
    this.subNoteEmitter.emit(subNote);
  }
  
  addSubNote(): void {
    let subtitle = this.subTitleControl.value;
    if (this.note && subtitle && this.subTitleControl.valid){
      this.noteService.addSubNote(this.note(), subtitle);      
      this.subTitleControl.setValue('');      
    }   
  }

 
    



}
