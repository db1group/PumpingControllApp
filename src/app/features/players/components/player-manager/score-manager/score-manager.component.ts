import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IUpdatePlayersRequest {
  Amount: number;
  Action: Number;
}

@Component({
  selector: 'pumping-score-manager',
  templateUrl: './score-manager.component.html',
  styleUrls: ['./score-manager.component.css']
})
export class ScoreManagerComponent implements OnInit {
  scoreForm!: FormGroup;
  @Output() updateBalance = new EventEmitter<IUpdatePlayersRequest>();
  @Input() hasPlayersSelected: boolean = false;

  constructor(private fb: FormBuilder){}
  
  ngOnInit() {
    this.scoreForm = this.fb.group({
      Amount: [undefined, Validators.required],
      Action: 0
    });
  }

  updateHandler() {
    if(!this.scoreForm.invalid) {
      this.updateBalance.emit(this.scoreForm.value);
    }
    this.amount?.reset();
  }

  get amount() {
    return this.scoreForm.get("Amount");
  }
}
