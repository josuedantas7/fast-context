import createFastContext from "./app/createFastContext";
import MainPage from "./pages/MainPage";

export const { 
  FastContextProvider:AppFastContextProvider,
  useFastContextFields:useAppFastContextFields
} = createFastContext({
  first: "" as string,
  last: "" as string,
});

function App() {
  console.log(`App Rendering`)
  return (
    <AppFastContextProvider>
      <div className="container">
        <h1>App (NO RE-RENDERS)</h1>
        <MainPage />
      </div>
    </AppFastContextProvider>
  );
}

export default App;
