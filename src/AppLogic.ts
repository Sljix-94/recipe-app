import { useState } from "react";
import axios from "axios";
import { IRecipes } from "./IRecipe/IRecipe";

const AppLogic = () => {
  const [recipesData, setRecipesData] = useState<IRecipes>({
    currentPage: 1,
    totalPages: 5,
    recipes: [],
  });
  const [filterValue, setFilterValue] = useState("");
  const [error, setError] = useState(false);

  const fetchData = async (page: number, inputValue: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8081/recipes?page=${page}&search=${inputValue}`
      );
      const data: IRecipes = await response.data;

      const { currentPage, totalPages, recipes } = data;

      setRecipesData((prevState) => ({
        ...prevState,
        currentPage,
        totalPages,
        recipes,
      }));
    } catch (error) {
      setError(true);
    }
  };

  const changePageHandler = (pageNum: number) => {
    setRecipesData((prevState) => ({
      ...prevState,
      currentPage: pageNum,
    }));
  };

  const filterHandler = (inputValue: string) => {
    setFilterValue(inputValue);
  };

  const deleteItemHandler = async (id: string) => {
    await axios.delete(`http://localhost:8081/recipes/${id}`);

    const filteredRecipes = recipesData.recipes.filter(
      (recipe) => recipe.id !== id
    );
    setRecipesData((prevState) => ({
      ...prevState,
      recipes: filteredRecipes,
    }));
  };

  return {
    recipesData,
    filterValue,
    error,
    fetchData,
    changePageHandler,
    filterHandler,
    deleteItemHandler,
  };
};

export default AppLogic;
