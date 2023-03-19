function App() {
    /**
     * setData is called after fetching data from json file
     * setLoaded is called after setData
     */
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);
    /**
     * fetch JSON and call setData and setLoaded
     */
    React.useEffect(() => {
      async function getData() {
        const response = await fetch('./movies.json');
        const json = await response.json();
        setData(json);
        setLoaded(true);
      }
      getData();
    }, []);
    console.log('loaded:', loaded, 'data:', data);
  
    return (
      <>
        <div className="container">
          <div className="col-sm">
            {loaded &&
              data.movies.map((movie, i) => (
                // Step 3 - Rename '<nexttech-movie' to match the name of your new React Component in 'movies.js'
                <nexttech-movie key={i}
                  // Step 2 - Replace all of the attributes below with a single `data` attribute that have `movie` assigned as the value
                  title={movie.title}
                  showTime={movie.showTime}
                  screen={movie.screen}
                  row={movie.row}
                  seat={movie.seat}
                  imageUrl={movie.imageUrl}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
  
  ReactDOM.render(
  <App />,
  document.getElementById('root')
  );
  