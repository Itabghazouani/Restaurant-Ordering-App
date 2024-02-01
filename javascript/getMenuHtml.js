function getMenuHtml(menuArr) {
  return menuArr.map(menuItem => {
    const {
        name,
        ingredients,
        id,
        price,
        emoji
    } = menuItem
    return `
    <section class="menu-card">
      <p class="emoji">${emoji}</p>
      <div class="menu-description">
        <p class="menu-name">${name}</p>
        <p class="menu-ingredients">${ingredients.join(', ')}</p>
        <p class="menu-price">$${price}</p>
      </div>
      <button id="add-btn-el" class="add-btn" data-add="${id}">+</button>
    </section>`
  }).join('')
}

export default getMenuHtml
