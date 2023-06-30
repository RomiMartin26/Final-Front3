import { useEffect, useState } from "react";
//import { useThemeContext } from "react";
//import { ThemeContext, useThemeContext } from "../Components/contexts/ThemeContext";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //const {contextTheme} = useThemeContext()
  //const {contextTheme, setContextTheme} = useThemeContext ();

  // console.log(contextTheme);

   
  async function fetchData() {
    setLoading(true);
    let jsonData;

    try {
      const data1 = await fetch`https://jsonplaceholder.typicode.com/users`;
      jsonData = await data1.json();
      
      setError();
      setData(jsonData);

    } catch (error) {

      setError(error.message);

    } finally {
      // console.log("finally");
      setLoading(false);
    }
  }

  useEffect(() => {
    // console.log("fetching data", props.user);
    fetchData(props.user);
  }, [props.user]);

  return (
    <>
       {/* <div className={contextTheme}>
        <p>Theme actual: {contextTheme}</p>
        <button onClick={contextTheme}>Cambiar Tema</button>
        
      </div>  */} 
     {/* <div className={contextTheme}> */}
     <div>
        {error ? <p>{error}</p> : null} 

        {data.map((usuario) => (
          <div  key={usuario.id} >
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
        {/* <div>Home</div>

        <button disabled={loading} onClick={fetchData}>
          Fetch Data
        </button> */}
      </div>
    </>
  );
};

export default Home; 
