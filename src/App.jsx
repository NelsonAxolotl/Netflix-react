
import './App.css'
import data from "./assets/data.json"
function App() {

  {
    const dataTab = data;

    return (
      <>
        <header>
          <h1>NETFLIX</h1>
        </header>
        <main>
          <article>
            {
              dataTab.map((movies) => {
                console.log(movies);//tableau des cats et images
                console.log(movies.category);//category
                console.log(movies.images);//tableau images
                return (
                  <h2>{movies.category}</h2>
                )
              })
            };

          </article>
        </main>
      </>
    )
  }
};

export default App
