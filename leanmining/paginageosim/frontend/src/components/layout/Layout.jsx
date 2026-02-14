import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
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
