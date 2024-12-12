import "./App.scss";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <Navigation />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <AuthProvider/>
    </div>
  );
}

export default App;