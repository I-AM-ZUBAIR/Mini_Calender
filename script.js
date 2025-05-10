const dayEl = document.getElementById('day');
const monthYearEl = document.getElementById('month-year');

const now = new Date();

const day = now.getDate();
const month = now.toLocaleString('default', { month: 'long' });
const year = now.getFullYear();

dayEl.textContent = day;
monthYearEl.textContent = `${month}, ${year}`;
