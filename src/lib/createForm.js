export default async function createForm(url, form) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(form)
  })
  return response.json()
}
