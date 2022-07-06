const baseUrl = "https://www.dnd5eapi.co"

export async function getClassList() {
  const res = await fetch(`${baseUrl}/api/classes`)
  return res.json()
}

export async function getDetails(apiUrl) {
  const res = await fetch(`${baseUrl}${apiUrl}`)
  return res.json()
}