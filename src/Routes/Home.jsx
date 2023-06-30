import { useContext, useEffect } from "react";
//import { useThemeContext } from "react";
//import { ThemeContext, useThemeContext } from "../Components/contexts/ThemeContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Components/contexts/ThemeContext";
import styles from "./Home.module.css";

const Home = () => {
  //const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState();

  const {theme, toggleTheme, data, fetchData, loading, error} = useContext(ThemeContext)

  //const {contextTheme} = useThemeContext()
  //const {contextTheme, setContextTheme} = useThemeContext ();

  // console.log(contextTheme);

   
  /* const fetchData = async() => {
    setLoading(true);
    let jsonData;

    try {
      const response = await fetchData("https://jsonplaceholder.typicode.com/users");
      const jsonData = await response.json();
            
      setError();
      setData(jsonData);

    } catch (error) {

      setError(error.message);

    } finally {
      // console.log("finally");
      setLoading(false);
    }
  } */

  useEffect(() => {
    // console.log("fetching data", props.user);
    fetchData();
  }, []);

  return (
    <>
      {/* <div>
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <p> Tema actual: {theme}</p>
      </div> */}

        {loading ? (
        <div> Cargando ...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          
        <div className={styles.container}>
         
        {data.map((usuario) => (
          <div  key={usuario.id} className={styles.card} >   
          <Card
            name= {usuario.name}
            username={usuario.username}
            id={usuario.id}
            img={"./img/doctor.jpg"}
          />
          {/* <div className={styles.buttonContainer}>
          <Link to={`/dentista/${usuario.id}`}>
          <button className={styles.button}>Ver detalle  </button>
          </Link>
          </div> */}
          </div>
        ))}
        </div>
        
      
      )}
    </>
  )
};

export default Home; 
