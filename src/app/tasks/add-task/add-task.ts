import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  // @Input({ required: true }) id!: string;
  @Output() dialogClosed = new EventEmitter<void>();

  closeDialog() {
    this.dialogClosed.emit();
    // document.querySelector('dialog')!.close();
  }

  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  // ];
}
