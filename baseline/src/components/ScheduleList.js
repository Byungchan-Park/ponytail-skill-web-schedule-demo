import { ScheduleItem } from './ScheduleItem.js';

export class ScheduleList {
  constructor(root, schedules, actions) {
    this.root = root;
    this.schedules = schedules;
    this.actions = actions;
  }

  render() {
    this.root.innerHTML = `
      <div class="list-header">
        <h2>Schedules</h2>
        <span>${this.schedules.length} item${this.schedules.length === 1 ? '' : 's'}</span>
      </div>
      <ul class="schedule-list"></ul>
    `;

    const list = this.root.querySelector('.schedule-list');

    if (this.schedules.length === 0) {
      list.innerHTML = '<li class="empty-state">No schedules yet.</li>';
      return;
    }

    this.schedules.forEach((schedule) => {
      const item = new ScheduleItem(schedule, this.actions);
      list.appendChild(item.render());
    });
  }
}
