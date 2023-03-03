
import Header from "./Header";
import { LayoutProps } from "./Layout";
import Sidebar from "./Sidebar/Sidebar";
const Layout = ({ children }: LayoutProps.Children) => {
  return (
    <div>
      <Header />
      <Sidebar/>
      {children}
    </div>
  );
};

export default Layout;
