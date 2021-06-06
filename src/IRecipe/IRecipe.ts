export interface IRecipes {
  currentPage: number;
  totalPages: number;
  recipes: {
    description: string;
    id: string;
    title: string;
    created: string;
    modified: string;
    ingredients: {
      name: string;
      amount: number;
      unit: string;
    }[];
  }[];
}

export interface TRecipesProps {
  recipesInfo: {
    currentPage: number;
    totalPages: number;
    recipes: {
      description: string;
      id: string;
      title: string;
      created: string;
      modified: string;
      ingredients: {
        name: string;
        amount: number;
        unit: string;
      }[];
    }[];
  };
  changePage: (pageNum: number) => void;
  deleteItem: (id: string) => void;
}

export interface TFilter {
  onFilterHandler: (inputValue: string) => void;
}
