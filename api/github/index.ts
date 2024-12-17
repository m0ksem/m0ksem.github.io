export const getContributions = async (token: string, username: string) => {
  const headers = { 'Authorization': `bearer ${token}` }
  const body = {
    'query': `query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                  }
                }
              }
            }
          }
        }`
  }

  const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
  const data = await response.json()

  return data.data.user.contributionsCollection.contributionCalendar.weeks
}