import { Component, OnInit,Output,EventEmitter, Input ,inject, signal, computed} from '@angular/core';
import { NoteService, Note } from '../services/note.service';
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
  @Input() subnoteTitle?: Note;
  @Output() context = new EventEmitter<string>();
  selectedContext: string = '';

  subtitleConrol = new FormControl('');

  noteService = inject(NoteService);

  notes = this.noteService.notes


  addSubnote(): void {
    let title = this.subtitleConrol.value;
    if (title && this.subtitleConrol.valid){
      this.noteService.addNote(title);
      this.subtitleConrol.setValue('');      
    }   

  }

  onTitleClick(context: string){
    this.context.emit(context);

  }
  onSelectSubNote(noteId: number, subNoteId: number): void {
    this.noteService.selectedNote.noteId = noteId;
    this.noteService.selectedNote.subNoteId = subNoteId;

    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      const subNote = note.subNotes.find(sn => sn.id === subNoteId);
        
      if (subNote) {
        this.selectedContext = subNote.context;
        
      }
    }
  }

}
