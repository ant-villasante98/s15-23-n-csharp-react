const Layout = ({ children }) => {
    return (
      <div className="bg-purple-300 flex min-h-screen flex-col">
        <div className="w-full h-full mt-5 p-10">{children}</div>
      </div>
    );
  };
  
  export default Layout;
  