import { formatScheduleDateTime } from '../utils/dateUtils.js';

export class ScheduleItem {
  constructor(schedule, actions) {
    this.schedule = schedule;
    this.actions = actions;
  }

  render() {
    const li = document.createElement('li');
    li.className = `schedule-item${this.schedule.done ? ' is-done' : ''}`;
    li.innerHTML = `
      <label class="schedule-main">
        <input type="checkbox" ${this.schedule.done ? 'checked' : ''} />
        <span class="schedule-text">
          <strong>${this.escapeHtml(this.schedule.title)}</strong>
          <span>${formatScheduleDateTime(this.schedule.date, this.schedule.time)}</span>
        </span>
      </label>
      <button type="button" class="delete-button">Delete</button>
    `;

    li.querySelector('input').addEventListener('change', () => {
      this.actions.onToggle(this.schedule.id);
    });

    li.querySelector('.delete-button').addEventListener('click', () => {
      this.actions.onDelete(this.schedule.id);
    });

    return li;
  }

  escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    })[char]);
  }
}
