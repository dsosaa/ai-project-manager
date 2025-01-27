import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>AI Project Manager</h1>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};
