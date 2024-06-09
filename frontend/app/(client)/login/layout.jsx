const Layout = ({ children }) => {
  return (
    <div className="bg-primario flex min-h-screen flex-col">
      <div className="w-full h-full mt-20 p-8">{children}</div>
    </div>
  );
};

export default Layout;
