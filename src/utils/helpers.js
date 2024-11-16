export const Helpers = {
  formatDate(dateString) {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }
    return new Date(dateString).toLocaleString('en-US', options).toUpperCase()
  }
}
