import React from "react";
import { Col } from "reactstrap";

export default () => (
  <Col
    id="main-content"
    style={{
      paddingTop: 90,
      display: "flex",
      justifyContent: "center"
    }}
    md="8"
  >
    {/* <span children="Loading..." /> */}
    {/* By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL */}
    <svg
      style={{
        width: 128,
        height: 110,
        position: 'absolute',
        top: 'calc(100vh - 64%)',
      }}
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#61dafb"
    >
      <g
        fill="none"
        fillRule="evenodd"
        transform="translate(1 1)"
        strokeWidth="2"
      >
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
          <animate
            attributeName="r"
            begin="1.5s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="1.5s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            begin="1.5s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="6" strokeOpacity="0">
          <animate
            attributeName="r"
            begin="3s"
            dur="3s"
            values="6;22"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="3s"
            dur="3s"
            values="1;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-width"
            begin="3s"
            dur="3s"
            values="2;0"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="8">
          <animate
            attributeName="r"
            begin="0s"
            dur="1.5s"
            values="6;1;2;3;4;5;6"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </Col>
);
