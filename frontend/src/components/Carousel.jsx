import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import a from "../Pictures/a.jpg";
import b from "../Pictures/b.jpg";
import c from "../Pictures/c.jpg";
import d from "../Pictures/d.jpg";
import f from "../Pictures/f.jpg";

const Carousel = () => {
  return (
    <div>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" src={d} alt="advertisement" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={f} alt="advertisement" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={b} alt="advertisement" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={c} alt="advertisement" />
        </CCarouselItem>

        <CCarouselItem>
          <CImage className="d-block w-100" src={a} alt="advertisement" />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Carousel;
