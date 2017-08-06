import React from "react";

import AlignmentSection from "./sections/Alignment";
import AreasSection from "./sections/Areas";
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
    <AreasSection />
    <AlignmentSection />
    <CenteringSection />
  </main>;

export default Main;
