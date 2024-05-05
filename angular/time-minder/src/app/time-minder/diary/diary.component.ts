import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [],
  templateUrl: './diary.component.html',
  styleUrl: './diary.component.css'
})

export class DiaryComponent implements OnInit {
  monthNames  : string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  currentDate : Date = new Date();
  currentDay  : number = this.currentDate.getDate();
  currentMonth: number = this.currentDate.getMonth()+1;
  monthNumber : number = this.currentDate.getMonth()+1;
  currentYear : number = this.currentDate.getFullYear();

  constructor() {}

  ngOnInit(): void {
    this.writeMonth(this.currentMonth, this.monthNumber, this.currentYear, this.startDay, this.getTotalDays, this.lastDay);

  }

  async getInfoUser(id: string) {
    try {
      const eventResponse = await fetch("http://localhost:3000/users");
      const data = await eventResponse.json();

      const userNameSpan = document.getElementById("userName");
      let name = "";
      data.forEach((user: any) => {
        if (user.id === id) {
          name = user.name;
        }
      });
      if (userNameSpan) {
        userNameSpan.textContent = name;
      } else {
        console.error('No se encontró el span con el ID "userName"');
      }
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
    }
  }

  getFormattedDate(day: number, month: number, year: number): string {
    return `${parseInt(day.toString())}/${parseInt(month.toString())}/${parseInt(year.toString())}`;
  }

  createDayElement(day: number, month: number, year: number, className: string = ''): string {
    return `<div id="day${this.getFormattedDate(day, month, year)}" class="calendar__item ${className}" (click)="abrirModal('${this.getFormattedDate(day, month, year)}')">
                <div class="day d-flex justify-content-center">
                    ${day}
                </div>
            </div>`;
  }

  createLastDaysElement(day: number, nextMonth: number, nextYear: number): string {
    return this.createDayElement(day, nextMonth, nextYear, 'calendar__last-days');
  }

  writeMonth(month: number, monthNumber: number, currentYear: number, startDay: () => number, getTotalDays: (month: number) => number, lastDay: () => number): void {
    let html = '';

    // Días del mes pasado visibles en el mes actual
    for (let i = startDay(); i > 0; i--) {
      const lastMonthDay = (monthNumber === 0) ? getTotalDays(11) - (i - 1) : getTotalDays(monthNumber - 1) - (i - 1);
      html += this.createLastDaysElement(lastMonthDay, (monthNumber === 0) ? 12 : monthNumber, (monthNumber === 0) ? currentYear - 1 : currentYear);
    }

    // Días del mes actual
    for (let i = 1; i <= getTotalDays(month); i++) {
      html += `<div class="divTxtDayEvent calendar__item">${this.createDayElement(i,(monthNumber === 0) ? 1 : monthNumber+1,currentYear)}</div>`;
    }

    // Días del próximo mes en el mes actual
    let j = 1;
    const nextMonthNumber = (monthNumber + 1) % 12; // Calcular el número del próximo mes (manejando el caso de diciembre)
    const nextYear = currentYear + Math.floor((monthNumber + 1) / 12); // Calcular el año del próximo mes

    for (let i = lastDay(); i < 6; i++) {
      const day = j;
      const nextMonth = nextMonthNumber + 1;

      html += this.createLastDaysElement(day, nextMonth, nextYear);
      j++;
    }


  }

  getTotalDays(month: number): number {
    if (month === -1) month = 11;

    if (
      month == 0 ||
      month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 7 ||
      month == 9 ||
      month == 11
    ) {
      return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
      return 30;
    } else {
      return this.isLeap() ? 29 : 28;
    }
  }

  isLeap(): boolean {
    const currentYear = this.currentDate.getFullYear();
    return (
      (currentYear % 100 !== 0 && currentYear % 4 === 0) ||
      currentYear % 400 === 0
    );
  }

  startDay(): number {
    console.log("currentYear", this.currentYear);

    let start = new Date(this.currentYear, this.monthNumber);
    console.log("startDay: ",start)
    return start.getDay() === 0 ? 6 : start.getDay() - 1;
  }

  lastDay(): number {
    let last = new Date(
      this.currentYear,
      this.monthNumber,
      this.getTotalDays(this.monthNumber)
    );
    return last.getDay() === 0 ? 6 : last.getDay() - 1;
  }

  lastMonth(): void {
    if (this.monthNumber !== 0) {
      this.monthNumber--;
    } else {
      this.monthNumber = 11;
      this.currentYear--;
    }
    this.setNewDate();
  }

  nextMonth(): void {
    if (this.monthNumber !== 11) {
      this.monthNumber++;
    } else {
      this.monthNumber = 0;
      this.currentYear++;
    }
    this.setNewDate();
  }

  setNewDate(): void {
    this.currentDate.setFullYear(
      this.currentYear,
      this.monthNumber,
      this.currentDay
    );
    // Assuming dates is a reference to the HTMLElement for dates
    this.writeMonth(
      this.currentMonth,
      this.monthNumber,
      this.currentYear,
      this.startDay,
      this.getTotalDays,
      this.lastDay
    );
  }

  getCurrentDate() {
    // Aquí va la lógica para obtener la fecha actual
  }

  async abrirModal(fecha: string) {
    // Aquí va la lógica para abrir el modal con eventos del día
  }

  async getEventsByUser(id: string, fechaInicio: string, fechaFin: string) {
    // Aquí va la lógica para obtener los eventos del usuario para un rango de fechas
  }

  showModal() {
    // Lógica para mostrar el modal para crear un evento
    // Aquí puedes implementar la creación del modal usando Angular Material o Bootstrap, por ejemplo
  }
}
