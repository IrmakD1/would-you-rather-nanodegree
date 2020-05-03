
export const checkPrimary = (page, pageTitle) => {
    let style
    page === pageTitle ? style = 'primary' : style = 'secondary'
    return style
}
/* formatDate copied from the reactnd-chirper-app from https://github.com/udacity/reactnd-chirper-app
file path: reactnd-chirper-app/src/utils/helpers
28/04/2020
*/
export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

export const filterAvatars = (avatars) => avatars.filter(avatar => avatar != null)