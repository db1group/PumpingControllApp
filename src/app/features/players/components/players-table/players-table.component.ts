import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPlayersList } from '../../Interfaces/IPlayersList';
import { gsap } from 'gsap';

@Component({
  selector: 'pumping-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css'],
})
export class PlayersTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['index', 'name', 'nation', 'unit', 'points'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() selectedRows!: IPlayersList[];
  @Input() players?: IPlayersList[];
  @Output() select = new EventEmitter<IPlayersList>();

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.players);
    this.dataSource.paginator = this.paginator;
    this.animate();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["players"]) {
      this.dataSource = new MatTableDataSource(changes["players"].currentValue);
      this.dataSource.paginator = this.paginator;
      this.animate(); 
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.animate();
  }

  selectRow(player: IPlayersList) {
    this.select.emit(player);
  }

  pageHandler() {
    this.animate();
  }

  private animate() {
    setTimeout(() => {
      gsap.to("tbody tr",
      {
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
      });
    }, 100);
  }
}
