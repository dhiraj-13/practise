import { Component, computed, EventEmitter, input, Input, Output, signal, output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: {
    id: string,
    name: string,
    avatar: string
  };
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
