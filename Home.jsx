import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]); // Corrected useState
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.log(error);
                setError('Failed to load movies...');
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;