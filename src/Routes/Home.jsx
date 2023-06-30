import { useContext, useEffect } from "react";
//import { useThemeContext } from "react";
//import { ThemeContext, useThemeContext } from "../Components/contexts/ThemeContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Components/contexts/ThemeContext";


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
       {/* <div className={contextTheme}>
        <p>Theme actual: {contextTheme}</p>
        <button onClick={contextTheme}>Cambiar Tema</button>
        
      </div>  */} 
     {/* <div className={contextTheme}> */}
     {/* <div> */}
       {/* {error ? <p>{error}</p> : null}  */}
        <div> 
          <button onClick={toggleTheme}>Cambiar Tema</button>
          <p> Tema actual: {theme}</p>
        </div>

        {loading ? (
          <div> Cargando ...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div>
        
        <div> {/* display flow flex*/}

        {data.map((usuario) => (
          <div  key={usuario.id} >   {/*  row */}
          <Card
            name= {usuario.name}
            username={usuario.username}
            id={usuario.id}
            img={"./img/doctor.jpg"}
            // key={usuario.id}
          />
          <Link to={`/dentista/${usuario.id}`}>
          <button>Ver detalle  </button>
          </Link>
          </div>
        ))}
        
        </div>
        {/* <div>Home</div>

        <button disabled={loading} onClick={fetchData}>
          Fetch Data
        </button> */}
      </div>
        )}
    </>
  );
};

export default Home; 
