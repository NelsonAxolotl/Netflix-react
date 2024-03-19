
import './App.css'
import data from "./assets/data.json"
function App() {
  {
    return (
      <>
        <header>
          <h1>NETFLIX</h1>
        </header>
        <main>
          {data.map(category => (
            <article key={category.category}>
              <h2>{category.category}</h2>
              <div className="movie-list">
                {category.images.map(movie => (
                  <div key={movie.id} className="movie">
                    <img src={movie.img} alt={movie.title} />
                    <p>{movie.title}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </main>
      </>
    )
  }
};

export default App