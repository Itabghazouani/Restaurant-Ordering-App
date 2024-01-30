import menuArray from './data.js'

function getMenuHtml(menuArr) {
    return menuArr.map(menu => {
        const {
            name,
            ingredients,
            id,
            price,
            emoji
        } = menu
    })
}