import '../css/Favorite.css';
import { useMovieContext } from '../context/moviecontext';
import MovieCard from '../components/MovieCard';

function Favorite() {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className="favorite-empty">
                <h2>No favorite movies yet</h2>
                <p>Start adding movies to your favorites and they will appear here.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="favorite">
                <h2>Your Favorites</h2>
            </div>
            <div className="movie-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Favorite;