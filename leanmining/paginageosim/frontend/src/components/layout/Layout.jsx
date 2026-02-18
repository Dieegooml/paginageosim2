import Navbar from './Navbar';
import Footer from './Footer';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <main className="relative flex-grow">
        <div className="relative">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
