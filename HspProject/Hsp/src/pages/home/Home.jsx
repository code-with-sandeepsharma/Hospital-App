import React from "react";
import Layout from "../../component/layout/Layout";
import Location from "../location/Location";
import Disclamier from "../disclaimer/Disclamier";
import Specialist from "../specialist/Specialist";
import WhoWeAre from "../whoWeAre/WhoWeAre";
import SocialMedia from "../socialMedia/SocialMedia";
import WhatsNewAbout from "../whatsNewAbout/WhatsNewAbout";
import Carousel from "../carousal/Carasual";
import Components from "../../component/components/Components";
import Navbar from "../../component/navbar/Navbar";
function Home() {
  return (
    <div className="bg-green-300 m-0 p-0">
      <Layout >
        <Carousel/>
        <Components/>
        <Specialist />
        <WhoWeAre />
        <Location />
        {/* <SocialMedia/>
        <WhatsNewAbout/>
        <Disclamier /> */}
      </Layout>
    </div>
  );
}

export default Home;
