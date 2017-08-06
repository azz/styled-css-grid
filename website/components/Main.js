import React from "react";

import CenteringSection from "./sections/Centering";
import DenseSection from "./sections/Dense";
import HolyGrailSection from "./sections/HolyGrail";
import PositioningSection from "./sections/Positioning";
import TraditionalGridSection from "./sections/TraditionalGrid";
import TransposedGridSection from "./sections/TransposedGrid";
import ResponsiveSection from "./sections/Responsive";

const Main = () =>
  <main className="language-jsx">
    <TraditionalGridSection />
    <TransposedGridSection />
    <PositioningSection />
    <DenseSection />
    <ResponsiveSection />
    <HolyGrailSection />
    <CenteringSection />
  </main>;

export default Main;
