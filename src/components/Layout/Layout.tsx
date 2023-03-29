import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="grow">
        <header className="h-20 bg-white text-slate-800 p-6 flex items-center">
          Pixelformers
        </header>
        <main className=" bg-slate-200">
          <div className="container flex items-center border border-black m-auto p-6">{children}</div>
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
