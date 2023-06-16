type GoodBad = {
  name: string;
  good: boolean;
};

type Info = {
  good_bad: GoodBad[];
  food: Food[];
};

type Category = {
  name: string;
};

enum PointType {
  BAD = 0,
  OK = 1,
  GOOD = 2,
}

type Food = {
  name: string;
  points: PointType;
  category: FoodCategory;
};

export const categories: Category[] = [
  { name: "Vegetables" },
  { name: "Protein" },
  { name: "Grains" },
  { name: "Dairy" },
  { name: "Fruits" },
];

export enum FoodCategory {
  VEGETABLES = 0,
  PROTEIN = 1,
  GRAINS = 2,
  DAIRY = 3,
  FRUITS = 4,
}

const info: Info = {
  good_bad: [
    { name: "Protein", good: true },
    { name: "Complex Carbs", good: true },
    { name: "Fibers", good: true },
    { name: "Vitamins", good: true },
    { name: "Sugars", good: false },
    { name: "Processed Fats", good: false },
    { name: "Sodium", good: false },
  ],
  food: [
    {
      name: "Sliced fruit",
      points: PointType.GOOD,
      category: FoodCategory.FRUITS,
    },
    {
      name: "Fruit Pie",
      points: PointType.OK,
      category: FoodCategory.FRUITS,
    },
    {
      name: "Fruit gummies",
      points: PointType.BAD,
      category: FoodCategory.FRUITS,
    },
    {
      name: "Veggie Salad",
      points: PointType.GOOD,
      category: FoodCategory.VEGETABLES,
    },
    {
      name: "Veggie Straws",
      points: PointType.OK,
      category: FoodCategory.VEGETABLES,
    },
    {
      name: "Onion rings",
      points: PointType.BAD,
      category: FoodCategory.VEGETABLES,
    },
    {
      name: "Seafood",
      points: PointType.GOOD,
      category: FoodCategory.PROTEIN,
    },
    {
      name: "Chicken",
      points: PointType.OK,
      category: FoodCategory.PROTEIN,
    },
    {
      name: "Fast food",
      points: PointType.BAD,
      category: FoodCategory.PROTEIN,
    },
    {
      name: "Whole wheat bread",
      points: PointType.GOOD,
      category: FoodCategory.GRAINS,
    },
    { name: "Croissant", points: PointType.OK, category: FoodCategory.GRAINS },
    {
      name: "Frosted Flakes",
      points: PointType.BAD,
      category: FoodCategory.GRAINS,
    },
    { name: "Smoothies", points: PointType.GOOD, category: FoodCategory.DAIRY },
    { name: "Milkshakes", points: PointType.OK, category: FoodCategory.DAIRY },
    { name: "Coca cola", points: PointType.BAD, category: FoodCategory.DAIRY },
  ],
};
// sort the food var into altrenating healthy and unhealthy
export default info;
