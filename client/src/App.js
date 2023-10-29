import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CreatePlugin from "./component/CreatePlugin";

function App() {
  return (
    <div>
      <h1 className="text-center mt-3">Plugin App</h1>
      <CreatePlugin />
    </div>
  );
}

export default App;
