import { version } from "react";

const HomePage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h1 className="text-5xl">Vite React 18 Starter Kit</h1>
      <p className="text-3xl">{version}</p>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p>{import.meta.env.VITE_NUM ?? 1}</p>
    </div>
  );
};

export default HomePage;
