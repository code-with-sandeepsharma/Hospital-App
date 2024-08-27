import React from "react";
import Layout from "../../component/layout/Layout";
import Location from "../location/Location";
import Specialist from "../specialist/Specialist";
import WhoWeAre from "../whoWeAre/WhoWeAre";
import Carousel from "../carousal/Carasual";
import Components from "../../component/components/Components";
import Navbar from "../../component/navbar/Navbar";

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-500 m-0 p-0">
      <Layout >
        <Carousel/>
        <Components/>
        <Specialist />
        <WhoWeAre />
        <Location />
       
        
      </Layout>
    </div>
  );
}

export default Home;
