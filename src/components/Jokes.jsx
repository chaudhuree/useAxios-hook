import useAxios from "../hooks/useAxios";
import axios from "../apis/AxiosApi";

const Jokes = () => {
  const [response, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        //'Accept': 'text/html'
      },
    },
  });
  console.log({ response });
  console.log(response.joke);
  return (
    <article>
      <h2>Random Dad Joke</h2>

      {loading && <p>Loading...</p>}

      {!loading && error && <p className="errMsg">{error}</p>}

      {!loading && !error && response && <p>{response.joke}</p>}

      {!loading && !error && !response && <p>No dad joke to display</p>}

      <button onClick={() => refetch()}>Get Joke</button>
    </article>
  );
};

export default Jokes;
