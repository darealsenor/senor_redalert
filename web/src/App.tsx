import { debugData } from "./utils/debugData";
import Alerts from "./components/alerts";
import Settings from "./components/settings";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

function App() {
  return (
    <div className="nui-wrapper">
      <Alerts />
      <Settings />
    </div>
  );
}

export default App;
