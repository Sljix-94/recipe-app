import React, { useEffect } from "react";
import classes from "./App.module.css";
import Filter from "./components/Filter/Filter";
import Recipes from "./components/Recipes/Recipes";
import AppLogic from "./AppLogic";

const App: React.FC = () => {
  const {
    recipesData,
    fetchData,
    filterValue,
    filterHandler,
    changePageHandler,
    deleteItemHandler,
    error,
  } = AppLogic();

  const { currentPage } = recipesData;
  useEffect(() => {
    fetchData(currentPage, filterValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filterValue]);

  if (error)
    return <div className={classes.containerError}>Something went wrong!</div>;

  return (
    <div className={classes.container}>
      <h1>Recipes overview</h1>
      <Filter onFilterHandler={filterHandler} />
      <Recipes
        recipesInfo={recipesData}
        changePage={changePageHandler}
        deleteItem={deleteItemHandler}
      />
    </div>
  );
};

export default App;
