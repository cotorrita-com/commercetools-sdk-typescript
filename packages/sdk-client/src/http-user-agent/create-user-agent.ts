import { HttpUserAgentOptions } from '../types/sdk.d'

/*
  This is the easiest way, for this use case, to detect if we're running in
  Node.js or in a browser environment. In other cases, this won't be even a
  problem as Rollup will provide the correct polyfill in the bundle.
  The main advantage by doing it this way is that it allows to easily test
  the code running in both environments, by overriding `global.window` in
  the specific test.
*/
const isBrowser = () =>
  typeof window !== 'undefined' &&
  window.document &&
  window.document.nodeType === 9

function getSystemInfo() {
  if (isBrowser()) return window.navigator.userAgent

  const nodeVersion = process.version.slice(1)
  // const platformInfo = `(${process.platform}; ${process.arch})`
  // return `Node.js/${nodeVersion} ${platformInfo}`

  return `node.js/${nodeVersion}`
}

export default function createUserAgent(options: HttpUserAgentOptions) {
  if (
    !options ||
    Object.keys(options).length === 0 ||
    !{}.hasOwnProperty.call(options, 'name')
  )
    throw new Error('Missing required option `name`')

  // Main info
  const baseInfo = options.version
    ? `${options.name}/${options.version}`
    : options.name

  // Library info
  let libraryInfo: string | null = null
  if (options.libraryName && !options.libraryVersion)
    libraryInfo = options.libraryName
  else if (options.libraryName && options.libraryVersion)
    libraryInfo = `${options.libraryName}/${options.libraryVersion}`

  // Contact info
  let contactInfo: string | null = null
  if (options.contactUrl && !options.contactEmail)
    contactInfo = `(+${options.contactUrl})`
  else if (!options.contactUrl && options.contactEmail)
    contactInfo = `(+${options.contactEmail})`
  else if (options.contactUrl && options.contactEmail)
    contactInfo = `(+${options.contactUrl}; +${options.contactEmail})`

  // System info
  const systemInfo = getSystemInfo()

  return [baseInfo, systemInfo, libraryInfo, contactInfo]
    .filter(Boolean)
    .join(' ')
}
