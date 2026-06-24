export class ScheduleForm {
  constructor(root, onSubmit) {
    this.root = root;
    this.onSubmit = onSubmit;
  }

  render() {
    this.root.innerHTML = `
      <form class="schedule-form" aria-label="Add schedule form">
        <label>
          Title
          <input name="title" type="text" placeholder="Team meeting" required />
        </label>
        <label>
          Date
          <input name="date" type="date" required />
        </label>
        <label>
          Time
          <input name="time" type="time" required />
        </label>
        <button type="submit">Add</button>
      </form>
    `;

    this.root.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const schedule = {
        title: String(data.get('title')).trim(),
        date: String(data.get('date')),
        time: String(data.get('time'))
      };

      if (!schedule.title || !schedule.date || !schedule.time) return;

      this.onSubmit(schedule);
      form.reset();
      form.querySelector('input[name="title"]').focus();
    });
  }
}
