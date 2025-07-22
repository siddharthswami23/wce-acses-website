const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-10">
      <div className="text-white-500 flex flex-col gap-2">
        <p>Walchand College Of Engineering, Vishrambag</p>
        <p> Sangli, Maharashtra - 416415</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </div>
      </div>

      <p className="text-white-500">Copyright © All Rights Reserved by WCEACSES</p>
    </footer>
  );
};

export default Footer;
