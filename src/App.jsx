
import './App.css'
import data from "./assets/data.json"
function App() {

  {

    const dataTab = data;
    {
      dataTab.map((movies) => {
        // console.log(movies);//tableau des cats et images
        // console.log(movies.category);//category
        //  console.log(movies.images);//tableau images

        movies.images.map((pictures) => {
          console.log(pictures);//images
        });

        return (
          <h2>{movies.category}</h2>

        )
      })
    };

    return (
      <>
        <header>
          <h1>NETFLIX</h1>
        </header>
        <main>
          {data.map(category => (
            <article>
              <h2>{category.category}</h2>
              {category.images}
            </article>
          ))};
        </main>
      </>
    )
  }
};

export default App
