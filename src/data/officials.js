// src/data/officials.js
// Official data for officers. Use leader data for name and image if available.

import { leaders } from './leader.js';

// Helper functions for random data
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toISOString().slice(0, 10);
}
function randomPhone() {
  return '0' + Math.floor(100000000 + Math.random() * 900000000);
}
function randomEmail(name) {
  // Convert Khmer or non-ASCII to English letters (simple fallback: use 'official' + id)
  // For demo, use 'official{id}@gmail.com'
  // If name contains English, use it; otherwise, fallback
  const base = name.match(/[a-zA-Z]+/) ? name.replace(/\s/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase() : '';
  const rand = Math.floor(Math.random() * 1000);
  return (base ? base : 'official') + rand + '@gmail.com';
}

const positions = ['ប្រធានផ្នែក', 'នាយកដ្ឋាន', 'មន្ត្រី'];
const organizations = [
  'អង្គភាពទី១', 'អង្គភាពទី២', 'អង្គភាពទី៣', 'អង្គភាពទី៤', 'អង្គភាពទី៥',
  'អង្គភាពទី៦', 'អង្គភាពទី៧', 'អង្គភាពទី៨', 'អង្គភាពទី៩', 'អង្គភាពទី១០'
];
const ranks = [
  'ថ្នាក់ទី១', 'ថ្នាក់ទី២', 'ថ្នាក់ទី៣', 'ថ្នាក់ទី៤', 'ថ្នាក់ទី៥',
  'ថ្នាក់ទី៦', 'ថ្នាក់ទី៧', 'ថ្នាក់ទី៨', 'ថ្នាក់ទី៩', 'ថ្នាក់ទី១០'
];
const officerTypes = [
  'ប្រភេទទី១', 'ប្រភេទទី២', 'ប្រភេទទី៣', 'ប្រភេទទី៤', 'ប្រភេទទី៥',
  'ប្រភេទទី៦', 'ប្រភេទទី៧', 'ប្រភេទទី៨', 'ប្រភេទទី៩', 'ប្រភេទទី១០'
];
const salaryRanks = [
  'SR-1', 'SR-2', 'SR-3', 'SR-4', 'SR-5', 'SR-6', 'SR-7', 'SR-8', 'SR-9', 'SR-10'
];
const genders = ['male', 'female'];

const officials = leaders.map((leader, idx) => ({
  id: idx + 1,
  name: leader.name,
  code: 'A' + String(idx + 1).padStart(3, '0'),
  official_date: randomDate(new Date(2023, 0, 1), new Date(2024, 11, 31)),
  unofficial_date: randomDate(new Date(2022, 0, 1), new Date(2023, 11, 31)),
  email: randomEmail(leader.name),
  phone: randomPhone(),
  gender: randomFrom(genders),
  position: randomFrom(positions),
  organization: randomFrom(organizations),
  rank: randomFrom(ranks),
  officer_type: randomFrom(officerTypes),
  additional_officer_type: randomFrom(officerTypes),
  salary_rank: randomFrom(salaryRanks),
  leader: leader.name,
  image: leader.img,
  pdf: null,
  passport: null
}));

export default officials;
