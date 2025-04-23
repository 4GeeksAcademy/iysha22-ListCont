// ScrollToTop.jsx
function ScrollToTop() {
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
      function toggleVisibility() {
        if (window.pageYOffset > 300) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return (
      visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )
    );
  }

  // Example usage in App component
  function App() {
    return (
      <>
        <Navbar />
        <div className="pt-20 max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-8">Page Content</h1>
          <p className="mb-4">
            Scroll down to see the ScrollToTop button appear in the bottom right.
          </p>
          <div style={{ height: "1500px" }} className="bg-gray-100 rounded p-4">
            {/* Just filler content */}
            <p>Lots of content here...</p>
          </div>
        </div>
        <ScrollToTop />
      </>
    );
  }

  ReactDOM.render(<App />, document.getElementById("root"));