const API_BASE_URL = 'http://localhost:5000';

export async function fetchBars() {
  const response = await fetch(`${API_BASE_URL}/bars`);
  return response.json();
}
export async function fetchBar(id) {
  const response = await fetch(`${API_BASE_URL}/bars/${id}`);
  return response.json();
}

export async function addBar(bar) {
  const response = await fetch(`${API_BASE_URL}/bars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bar)
  });
  return response.json();
}

export async function updateBar(id, bar) {
  const response = await fetch(`${API_BASE_URL}/bars/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bar)
  });
  return response.json();
}

export async function deleteBar(id) {
  await fetch(`${API_BASE_URL}/bars/${id}`, { method: 'DELETE' });
}

export async function fetchBieres() {
  const response = await fetch(`${API_BASE_URL}/bieres`);
  return response.json();
}

export async function addBiere(biere) {
  const response = await fetch(`${API_BASE_URL}/bieres`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(biere)
  });
  return response.json();
}

export async function updateBiere(id, biere) {
  const response = await fetch(`${API_BASE_URL}/bieres/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(biere)
  });
  return response.json();
}

export async function deleteBiere(id) {
  await fetch(`${API_BASE_URL}/bieres/${id}`, { method: 'DELETE' });
}