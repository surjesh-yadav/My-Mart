import React from "react";
import { Image } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <div>
      <div>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/UHP-topbanner-1440x470.jpg"
          alt="image"
        />
      </div>
      <div style={{ display: "flex" }}>
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-brandsinthespotlight-levis.jpg"
          alt="image"
          
        />
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-brandsinthespotlight-adidas.jpg"
          alt="image"
        />
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-brandsinthespotlight-indiangarage.jpg"
          alt="image"
        />
        <Image
          src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-brandsinthespotlight-nike.jpg"
          alt="image"
        />
        {/* <Image
          src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg"
          alt="image"
        /> */}
      </div>
    </div>
  );
};

export default Homepage;
