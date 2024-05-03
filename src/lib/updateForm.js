export default async function updateForm(url, form) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(form)
  })
  return response.json()
}
