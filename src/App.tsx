import { version } from "react";
import "./styles/App.css";

const App = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Vite React Starter Kit</h1>
      <p className="text-xl text-gray-500">{version}</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default App;
