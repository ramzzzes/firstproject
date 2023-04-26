import './App.css';
import Movie from './Movie/Movie';

function App() {

  const movieList = [
    {
      moviePoster : 'moviePoster',
      title : 'Superman',
      releaseDate : '2012-05-09',
      movieUrl : 'https://static.displate.com/857x1200/displate/2019-11-27/dd8566e09466a7a657835a5af8612d94_1f96abec68490e6896ec5eb546ac3419.jpg'
    },
    {
      moviePoster : 'moviePosterSecond',
      title : 'Batman',
      releaseDate : '2016-05-09',
      movieUrl : 'https://m.media-amazon.com/images/I/71kUTilIdiL._AC_SL1500_.jpg'
    }
  ]

  return (
    <div>
       {movieList.map((m,index) => <Movie 
            key={index}
            title={m.title}
            moviePoster={m.moviePoster} 
            movieUrl={m.movieUrl}
            releaseDate={m.releaseDate}
            />)
        }
    </div>
  );
}

export default App;
