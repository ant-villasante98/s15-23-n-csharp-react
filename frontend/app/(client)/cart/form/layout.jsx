const Layout = ({ children }) => {
    return (
      <div className="bg-purple-300 flex min-h-screen flex-col ">
        <div className="sm:pl-0 sm:pr-0 w-full h-full mt-5 p-10 flex flex-col justify-center items-center">{children}</div>
      </div>
    );
  };
  
  export default Layout;
  