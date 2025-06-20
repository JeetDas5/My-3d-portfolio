const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-row justify-between items-center flex-wrap mx-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2 cursor-pointer" onClick={() => window.open("https://github.com/JeetDas5", "_blank")} />
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="w-1/2 h-1/2 cursor-pointer bg-white"
            onClick={() => window.open("https://linkedin.com/in/jeet-das-7633a52ab", "_blank")}
          />
          <img
            src="/assets/twitter.svg"
            alt="Twitter"
            className="w-1/2 h-1/2 cursor-pointer"
            onClick={() => window.open("https://x.com/I_am_Jeet5", "_blank")}
          />
        </div>
      </div>
      <p className="text-white-500">© 2025 Jeet. All rights reserved.</p>
    </section>
  );
};

export default Footer;
