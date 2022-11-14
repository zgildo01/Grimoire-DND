const baseUrl = 'https://www.dnd5eapi.co'

export async function getClassList() {
  const res = await fetch(`${baseUrl}/api/classes`)
  return res.json();
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${baseUrl}${apiUrl}`)
  return res.json();
}

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}

export async function spellSearch(formData) {
  const res = await fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
  return res.json()
}

export async function getSpellDetails(spellName) {
  const res = await fetch(`${baseUrl}/api/spells/${spellName}`)
  return res.json()
}