import { ScheduleForm } from './components/ScheduleForm.js';
import { ScheduleList } from './components/ScheduleList.js';
import { loadSchedules, saveSchedules } from './services/storageService.js';

export class App {
  constructor(root) {
    this.root = root;
    this.schedules = loadSchedules();
  }

  init() {
    this.render();
  }

  addSchedule(data) {
    this.schedules = [
      ...this.schedules,
      {
        id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
        title: data.title,
        date: data.date,
        time: data.time,
        done: false
      }
    ];
    this.persistAndRender();
  }

  toggleSchedule(id) {
    this.schedules = this.schedules.map((schedule) =>
      schedule.id === id ? { ...schedule, done: !schedule.done } : schedule
    );
    this.persistAndRender();
  }

  deleteSchedule(id) {
    this.schedules = this.schedules.filter((schedule) => schedule.id !== id);
    this.persistAndRender();
  }

  persistAndRender() {
    saveSchedules(this.schedules);
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <section class="app-shell">
        <header>
          <p class="eyebrow">Baseline</p>
          <h1>Schedule Manager</h1>
          <p class="description">A small structured implementation with separated UI and storage code.</p>
        </header>
        <section id="form-region"></section>
        <section id="list-region"></section>
      </section>
    `;

    new ScheduleForm(
      this.root.querySelector('#form-region'),
      (data) => this.addSchedule(data)
    ).render();

    new ScheduleList(
      this.root.querySelector('#list-region'),
      this.schedules,
      {
        onToggle: (id) => this.toggleSchedule(id),
        onDelete: (id) => this.deleteSchedule(id)
      }
    ).render();
  }
}
