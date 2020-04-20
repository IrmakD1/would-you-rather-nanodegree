
export const checkPrimary = (page, pageTitle) => {
    let style
    page === pageTitle ? style = 'primary' : style = 'secondary'
    return style
}