// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://assortment-igv.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'project') {
    return `/projects/${doc.uid}`
  }
  if (doc.type === 'talent') {
    return `/roster/${doc.uid}`
  }
  if (doc.type === 'edition') {
    return `/editions/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'project') {
    return '/projects/[uid]'
  }
  if (doc.type === 'talent') {
    return '/roster/[uid]'
  }
  if (doc.type === 'edition') {
    return '/editions/[uid]'
  }
  return '/'
}
