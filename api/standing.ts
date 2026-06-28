

export async function GET() {
  
  const token = process.env.API_KEY ?? ""

  const response = await fetch("https://api.football-data.org/v4/competitions/WC/standings", {
    headers: { "X-Auth-Token": token }
  })

  const data = await response.json()

  return Response.json(data)
}
