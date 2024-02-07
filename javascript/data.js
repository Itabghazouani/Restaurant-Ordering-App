import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: uuidv4(),
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: uuidv4()
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: uuidv4()
    },
        {
          name: "Chicken Nuggets",
          ingredients: ["chicken", "BBQ Sauce"],
          price: 9,
          emoji: "🍗",
          id: uuidv4()
    }
]

export default menuArray
