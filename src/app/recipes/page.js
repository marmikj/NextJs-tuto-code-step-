
const page = async () => {
    const getRecipes = async () => {
        let res = await fetch("https://dummyjson.com/recipes");
        res = await res.json();
        console.log(res.recipes, "recipes");
        return res.recipes;
      };
  let prduct = await getRecipes();
  console.log(prduct,"recipes");
  return (
    <div>
     <h1>recipes page</h1> 
      {prduct.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default page;
