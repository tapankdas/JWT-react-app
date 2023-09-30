import axios from "axios";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
 
const Movies = () => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    axios
      .get("http://localhost:4000/liked-movies", { withCredentials: true })
      .then((response) => {
        setMovies(response.data);
      });
  }, []);
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "500px", minWidth: "600px" }}
      >
        <Card>
          <Card.Header>Liked Movies</Card.Header>
          <ListGroup variant="flush">
            {movies.map((item) => (
              <ListGroup.Item>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    </>
  );
};
 
export default Movies;