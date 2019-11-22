export function makeTestId(str: string, pathPrefix = ''): string {
  if (!str) throw Error('makeTestId(): an empty string was passed in')
  return pathPrefix + str.toLowerCase().replace(/ /g, '-')
}
