type GoodBad = {
    name: string,
    good: boolean
}
type Info = {
    good_bad: GoodBad[]
}
const info: Info = {
    good_bad: [
        { name: 'Protein', good: true },
        { name: 'Complex Carbs', good: true },
        { name: 'Fibers', good: true },
        { name: 'Vitamins', good: true },
        { name: 'Sugars', good: false },
        { name: 'Processed Fats', good: false },
        { name: 'Sodium', good: false },
    ]
}
// sort the food var into altrenating healthy and unhealthy
export default info
