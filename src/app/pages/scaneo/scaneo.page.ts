import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scaneo',
  templateUrl: './scaneo.page.html',
  styleUrls: ['./scaneo.page.scss'],
})
export class ScaneoPage implements OnInit {
  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openModal() {
    this.isModalOpen = true; // Cambiar a verdadero para abrir el modal
  }

}
