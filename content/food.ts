type Food = {
    name: string,
    isHealthy: boolean,
    reason: string,
}
const rawData: Food[] = [
    {
        name: "Apple",
        isHealthy: true,
        reason: "High in fiber and vitamins"
    },
    {
        name: "Broccoli",
        isHealthy: true,
        reason: "Packed with antioxidants and nutrients"
    },
    {
        name: "Salmon",
        isHealthy: true,
        reason: "Rich in omega-3 fatty acids"
    },
    {
        name: "Chocolate",
        isHealthy: false,
        reason: "High in sugar and calories"
    },
    {
        name: "Kale",
        isHealthy: true,
        reason: "Excellent source of vitamins and minerals"
    },
    {
        name: "French fries",
        isHealthy: false,
        reason: "Deep-fried and high in fat"
    },
    {
        name: "Quinoa",
        isHealthy: true,
        reason: "High in protein and fiber"
    },
    {
        name: "Ice cream",
        isHealthy: false,
        reason: "High in sugar and saturated fat"
    },
    {
        name: "Spinach",
        isHealthy: true,
        reason: "Rich in iron and antioxidants"
    },
    {
        name: "Pizza",
        isHealthy: false,
        reason: "High in calories, fat, and sodium"
    },
    {
        name: "Blueberries",
        isHealthy: true,
        reason: "Packed with antioxidants"
    },
    {
        name: "Hamburger",
        isHealthy: false,
        reason: "High in fat and sodium"
    },
    {
        name: "Avocado",
        isHealthy: true,
        reason: "Rich in healthy fats and fiber"
    },
    {
        name: "Soda",
        isHealthy: false,
        reason: "High in sugar and empty calories"
    },
    {
        name: "Almonds",
        isHealthy: true,
        reason: "Good source of healthy fats and protein"
    },
    {
        name: "Cheeseburger",
        isHealthy: false,
        reason: "High in calories, fat, and sodium"
    },
    {
        name: "Oranges",
        isHealthy: true,
        reason: "Rich in vitamin C"
    },
    {
        name: "Potato chips",
        isHealthy: false,
        reason: "High in calories and unhealthy fats"
    },
    {
        name: "Greek yogurt",
        isHealthy: true,
        reason: "Good source of protein and probiotics"
    },
    {
        name: "Cake",
        isHealthy: false,
        reason: "High in sugar and unhealthy fats"
    },
    {
        name: "Carrots",
        isHealthy: true,
        reason: "Rich in beta-carotene and fiber"
    },
    {
        name: "Candy",
        isHealthy: false,
        reason: "High in sugar and artificial ingredients"
    },
    {
        name: "Oatmeal",
        isHealthy: true,
        reason: "Great source of fiber and nutrients"
    },
    {
        name: "Fried chicken",
        isHealthy: false,
        reason: "High in calories and unhealthy fats"
    },
    {
        name: "Strawberries",
        isHealthy: true,
        reason: "Loaded with antioxidants"
    },
    {
        name: "Milkshake",
        isHealthy: false,
        reason: "High in sugar and calories"
    },
    {
        name: "Green beans",
        isHealthy: true,
        reason: "Low in calories and rich in nutrients"
    },
    {
        name: "Pancakes",
        isHealthy: false,
        reason: "High in refined flour and sugar"
    },
    {
        name: "Watermelon",
        isHealthy: true,
        reason: "Hydrating and rich in vitamins"
    },
    {
        name: "Cheetos",
        isHealthy: false,
        reason: "High in unhealthy fats and sodium"
    },
    {
        name: "Cauliflower",
        isHealthy: true,
        reason: "Low in calories and high in fiber"
    },
    {
        name: "Cookies",
        isHealthy: false,
        reason: "High in sugar and unhealthy fats"
    },
    {
        name: "Grapes",
        isHealthy: true,
        reason: "Rich in antioxidants and vitamins"
    },
    {
        name: "Doughnut",
        isHealthy: false,
        reason: "High in sugar and unhealthy fats"
    },
    {
        name: "Lettuce",
        isHealthy: true,
        reason: "Low in calories and high in nutrients"
    },
    {
        name: "Chips",
        isHealthy: false,
        reason: "High in unhealthy fats and sodium"
    },
    {
        name: "Pineapple",
        isHealthy: true,
        reason: "Rich in vitamin C and bromelain"
    },
    {
        name: "Hot dog",
        isHealthy: false,
        reason: "High in sodium and unhealthy additives"
    },
    {
        name: "Tomatoes",
        isHealthy: true,
        reason: "Packed with antioxidants and vitamins"
    },
    {
        name: "Popcorn",
        isHealthy: true,
        reason: "Low in calories and high in fiber"
    },
    {
        name: "Sausage",
        isHealthy: false,
        reason: "High in fat, sodium, and preservatives"
    },
    {
        name: "Mango",
        isHealthy: true,
        reason: "Rich in vitamins and fiber"
    },
    {
        name: "Nachos",
        isHealthy: false,
        reason: "High in unhealthy fats and sodium"
    },
    {
        name: "Celery",
        isHealthy: true,
        reason: "Low in calories and high in fiber"
    },
    {
        name: "Pasta",
        isHealthy: false,
        reason: "High in refined carbs and calories"
    },
    {
        name: "Kiwi",
        isHealthy: true,
        reason: "Loaded with vitamin C and fiber"
    },
    {
        name: "Onion rings",
        isHealthy: false,
        reason: "Deep-fried and high in fat"
    },
    {
        name: "Bell peppers",
        isHealthy: true,
        reason: "Rich in antioxidants and vitamins"
    },
    {
        name: "Cheesecake",
        isHealthy: false,
        reason: "High in sugar, unhealthy fats, and calories"
    },
    {
        name: "Eggs",
        isHealthy: true,
        reason: "Good source of protein and nutrients"
    },
    {
        name: "Donuts",
        isHealthy: false,
        reason: "High in sugar and unhealthy fats"
    },
    {
        name: "Cabbage",
        isHealthy: true,
        reason: "Low in calories and high in fiber"
    }
];

// choose only six

function getFood(){
    const healthy = rawData.filter((food) => food.isHealthy)
    const unhealthy = rawData.filter((food) => !food.isHealthy)
    const res = [
        ...healthy.sort(() => Math.random() - 0.5).slice(0, 3),
        ...unhealthy.sort(() => Math.random() - 0.5).slice(0, 3),
    ]
    res.sort((a, b) => {
        if (a.isHealthy && !b.isHealthy) return -1
        if (!a.isHealthy && b.isHealthy) return 1
        return 0
    })
    return res
}
// sort the food var into altrenating healthy and unhealthy
export default getFood