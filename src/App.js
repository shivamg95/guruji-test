// import { ThemeProvider, createTheme } from "@mui/styles";
// import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

function App() {
  
  return (
    // <ThemeProvider >
      <div className="App">
        <ProfilePage />
      </div>
    // </ThemeProvider>
  );
}

export default App;
