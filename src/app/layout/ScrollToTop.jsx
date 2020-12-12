import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//When use navigates to new page, scroll to the top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
