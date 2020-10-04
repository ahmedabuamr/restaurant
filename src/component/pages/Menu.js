import React from "react";
import Header from "../sections/Header";
import Menu from "../sections/Menu";

import Services from "../sections/Services";
import Footer from "../sections/Footer";

export default function Menus() {
  return (
    <>
      <Header />
      <main>
        <Menu />

        {/** Services */}
        <Services />
        {/** Services */}
      </main>

      {/** Footer */}
      <Footer />
      {/** Footer */}
    </>
  );
}
