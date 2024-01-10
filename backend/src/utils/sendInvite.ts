export const sendInvite = (org: string, email: string): boolean => {
  try {
    console.log(org, email)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
