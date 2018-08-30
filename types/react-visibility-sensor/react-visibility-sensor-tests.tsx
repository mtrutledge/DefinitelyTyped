import * as React from "react";

import ReactVisibilitySensor, { Shape } from "react-visibility-sensor";
const num = 1;
const bool = true;
const shape: Shape = { top: num, left: num, bottom: num, right: num };

const component = (
  <ReactVisibilitySensor
    onChange={(bool, shape) => {}}
    active={bool}
    partialVisibility={bool}
    offset={shape}
    minTopValue={num}
    intervalCheck={bool}
    intervalDelay={num}
    scrollCheck={bool}
    scrollDelay={num}
    scrollThrottle={num}
    resizeCheck={bool}
    resizeDelay={num}
    resizeThrottle={num}
    delayedCall={bool}>
    {({ isVisible: bool, visibilityRect: shape }) => <div />}
  </ReactVisibilitySensor>
);
