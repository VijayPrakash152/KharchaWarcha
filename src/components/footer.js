const Footer = () => {
  return (
    <footer className="text-center text-white bg-slate-900">
      <div className="container p-6 mx-auto bg-[#7286D3]">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
              alt="footer"
            />
          </div>
        </div>
      </div>

      <div className="text-center p-4">
        Made for 🚬 ☕
        <a
          className="text-white"
          href="https://www.linkedin.com/in/me-vijay-prakash/"
        >
          by{" "}
          <span className="font-semibold p-2 hover:drop-shadow-xl hover:border hover:rounded  ">
            Vijay Prakash
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
