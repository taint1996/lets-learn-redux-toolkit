import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice.ts";
import { useFetchBreadsQuery } from "./features/dogs/dogs-api-slice.ts";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreadsQuery();

  function handleClick() {
    if (count % 2 == 0) {
      return dispatch(incremented());
    }
    return dispatch(amountAdded(3));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>

        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((bread) => {
                return (
                  <tr key={bread.id}>
                    <td>{bread.name}</td>
                    <td>
                      <img
                        src={bread.image.url}
                        alt={bread.name}
                        height={250}
                      ></img>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
