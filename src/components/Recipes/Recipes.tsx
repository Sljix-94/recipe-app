import React from "react";
import classes from "./Recipes.module.css";
import { TRecipesProps } from "../../IRecipe/IRecipe";

const Recipes: React.FC<TRecipesProps> = (props) => {
  const { currentPage, totalPages, recipes } = props.recipesInfo;
  const recipesList = recipes.map((currentRecipe) => {
    return (
      <div className={classes.wraper} key={currentRecipe.id}>
        <div className={classes.wraper_header}>
          <h4>{currentRecipe.title}</h4>
          <button
            className={classes.buttonDelete}
            onClick={() => props.deleteItem(currentRecipe.id)}
          >
            Delete
          </button>
        </div>
        <div className={classes.wraper_description}>
          <p>{currentRecipe.description}</p>
        </div>
      </div>
    );
  });

  let pagination: JSX.Element[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(
      <button
        key={i}
        className={`${classes.buttonPagination} ${
          i === currentPage ? classes.higlighted : ""
        }`}
        onClick={() => props.changePage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={classes.container}>
      <div className={classes.recipeList}>{recipesList}</div>
      <div className={classes.pagination_wraper}>{pagination}</div>
    </div>
  );
};
export default Recipes;
