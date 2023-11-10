import React, { useState } from "react";
import { toast } from "sonner";
import Drawer from "./Drawer";

const DeskIcon: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("");

  const handleShapeClick = (deskId: string) => {
    setSelectedId(deskId);
  };

  const handleEllipseClick = (event: React.MouseEvent<SVGEllipseElement>) => {
    const dataName = event.currentTarget.getAttribute("data-name");
    if (dataName) {
      toast.info(`Desk ${dataName} selected. Click "View" to confirm details`)
      handleShapeClick(dataName);
    }
  };

  return (
    <>
      <Drawer deskId={selectedId} />
      <div>
        <svg
          viewBox="0 3.27 1657.63 961.263"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="workmate-block-b-df-s-rect1"
            width="1629.58"
            height="721.177"
            rx="3"
            ry="3"
            transform="matrix(1, 0, 0, 1, 14.26100063323976, 32.007999420166016)"
            fill="#eff7fa"
            stroke="#88a3b8"
            stroke-width="10"
          />
          <text
            id="workmate-block-b-df-s-text1"
            dx="0"
            dy="0"
            font-family='"Arial, sans-serif"'
            font-size="32"
            font-weight="700"
            transform="matrix(1.3847750425338745, 0, 0, 1.6769839525222778, 487.3762279655966, 697.6706036578207)"
          >
            <tspan id="workmate-block-b-df-s-tspan1" y="0" font-weight="700">
              Block B - Down floor
            </tspan>
          </text>
          <rect
            id="workmate-block-b-df-s-rect2"
            width="104.403"
            height="282.024"
            rx="9.109"
            ry="9.109"
            transform="matrix(5.430120944976807, 0, 0, 1.6493721008300781, 1071.2613685021006, 40.030148148985916)"
            fill="#dfefec"
            stroke="#cfe7e8"
          />
          <rect
            id="workmate-block-b-df-u-copy-of-rectangle"
            width="104.403"
            height="282.024"
            rx="9.109"
            ry="9.109"
            transform="matrix(5.430120944976807, 0, 0, 0.83057701587677, 1071.2613685021006, 517.1926956950529)"
            fill="#d1ebf6"
            stroke="#cfe7e8"
          />
          <rect
            id="workmate-block-b-df-s-rect3"
            width="53.943"
            height="97.445"
            rx="0"
            ry="0"
            transform="matrix(1, 0, 0, 1, 216.72200012207037, 660.2700195312499)"
            fill="#eff7fa"
            stroke="#88a3b8"
          />
          <rect
            id="workmate-block-b-df-u-copy-of-rectangle2"
            width="53.943"
            height="97.445"
            rx="0"
            ry="0"
            transform="matrix(1, 0, 0, 1, 1133.2161865234375, 517.192626953125)"
            fill="#eff7fa"
            stroke="#88a3b8"
          />
          <rect
            id="workmate-block-b-df-u-copy-of-rectangle-2"
            width="53.943"
            height="97.445"
            rx="0"
            ry="0"
            transform="matrix(2.2970471382141113, 0, 0, 0.7184190154075623, 1071.2613685021006, 366.8477532691918)"
            fill="#eff7fa"
            stroke="#88a3b8"
          />
          <g
            id="workmate-block-b-df-s-g1"
            transform="matrix(1, 0, 0, 1, 16.558069229125977, -29.94142723083496)"
          >
            <g
              id="workmate-block-b-df-s-g2"
              transform="matrix(2.49698 0 0 1 271.725245-8.186505)"
            >
              <rect
                id="workmate-block-b-df-s-rect4"
                width="253.675"
                height="162.657"
                rx="0"
                ry="0"
                transform="translate(59.895 825.364)"
                fill="#eff7fa"
                stroke="#88a3b8"
                stroke-width="6"
              />
            </g>
            <text
              id="workmate-block-b-df-s-text2"
              dx="0"
              dy="0"
              font-family='"Arial, sans-serif"'
              font-size="86"
              font-weight="700"
              transform="matrix(.298663 0 0 0.361702 821.588836 909.708941)"
              fill="#333"
              stroke="#88a3b8"
            >
              <tspan id="workmate-block-b-df-s-tspan2" y="0" font-weight="700">
                Unavailable Desk
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-s-text3"
              dx="0"
              dy="0"
              font-family='"Arial, sans-serif"'
              font-size="86"
              font-weight="700"
              transform="matrix(.298663 0 0 0.361702 508.30945 908.70894)"
              fill="#333"
              stroke="#88a3b8"
            >
              <tspan id="workmate-block-b-df-s-tspan3" y="0" font-weight="700">
                Available Desk
              </tspan>
            </text>
            <circle
              id="workmate-block-b-df-s-circle1"
              r="10"
              transform="translate(802.76025 900.505995)"
              fill="#ff3b00"
            />
            <circle
              id="workmate-block-b-df-s-circle2"
              r="10"
              transform="translate(489.818138 900.505995)"
              fill="#46b200"
            />
            <text
              id="workmate-block-b-df-u-copy-of-text"
              dx="0"
              dy="0"
              font-family='"Arial, sans-serif"'
              font-size="32"
              font-weight="700"
              transform="translate(1173.588796 303.005548)"
              fill="#0e0e0e"
            >
              <tspan id="workmate-block-b-df-s-tspan4" y="0" font-weight="700">
                Conference Room
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-2"
              dx="0"
              dy="0"
              font-family='"Arial, sans-serif"'
              font-size="32"
              font-weight="700"
              transform="translate(1183.715804 653.504108)"
              fill="#0e0e0e"
            >
              <tspan id="workmate-block-b-df-s-tspan5" y="0" font-weight="700">
                Kitchen &amp; Wash Room
              </tspan>
            </text>
          </g>
          <g
            id="workmate-block-b-df-u-one"
            transform="matrix(1, 0, 0, 1, 25.434244155883803, -4.829975128173828)"
          >
            <g
              id="workmate-block-b-df-u-row1"
              transform="translate(35.311505-9.757981)"
            >
              <rect
                id="workmate-block-b-df-s-rect5"
                width="152.360499"
                height="421.909"
                rx="0"
                ry="0"
                transform="translate(71.486501 114.503)"
                fill="#fff"
                stroke="#dde5eb"
                stroke-width="8"
              />
              <line
                id="workmate-block-b-df-s-line1"
                x1="0"
                y1="-210.9545"
                x2="0"
                y2="210.9545"
                transform="translate(144.7325 325.4575)"
                fill="none"
                stroke="#9fb3c2"
                stroke-width="7"
              />
              <line
                id="workmate-block-b-df-s-line2"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(147.66675 392.5965)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
              <line
                id="workmate-block-b-df-s-line3"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(144.514349 254.388)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
            </g>
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R1-D6"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              id="workmate-block-b-df-u-r1d6"
              rx="13.48575"
              ry="13.48575"
              transform="translate(245.491921 176.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 176.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R1-D5"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              id="workmate-block-b-df-u-r1d5"
              rx="13.48575"
              ry="13.48575"
              transform="translate(245.491921 319.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-2"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 319.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R1-D4"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              id="workmate-block-b-df-u-r1d4"
              rx="13.48575"
              ry="13.48575"
              transform="translate(245.491921 455.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-3"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 455.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-4"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 456.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-5"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 315.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              data-name="AM-B-DF-R1-D3"
              id="workmate-block-b-df-u-r1d3"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 456.068088)"
              fill="#d2dbed"
              cursor={"pointer"}
              stroke-width="0"
              onClick={handleEllipseClick}
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-6"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 176.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <text
              id="workmate-block-b-df-u-copy-of-text-22"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 145.187474 415.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan6"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 3
              </tspan>
            </text>
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R1-D2"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              id="workmate-block-b-df-u-r1d2"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 315.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <text
              id="workmate-block-b-df-u-copy-of-text2"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 145.187474 276.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan7"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 2
              </tspan>
            </text>
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R1-D1"
              className={"hover:fill-blue-300"}
              cursor={"pointer"}
              id="workmate-block-b-df-u-r1d1"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 176.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <text
              id="workmate-block-b-df-s-text4"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 145.187474 137.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan8"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 1
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-4"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 212.002719 275.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan9"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 5
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan10"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-3"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 212.002719 412.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan11"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 4
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-5"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 212.002719 134.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan12"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 6
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan13"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
          </g>
          <g
            id="workmate-block-b-df-u-copy-of-one"
            transform="matrix(1, 0, 0, 1, 354.5957641601563, -1.3596611022949219)"
          >
            <g
              id="workmate-block-b-df-u-row12"
              transform="translate(35.311505-10.757981)"
            >
              <rect
                id="workmate-block-b-df-s-rect6"
                width="152.360499"
                height="421.909"
                rx="0"
                ry="0"
                transform="translate(71.486501 114.503)"
                fill="#fff"
                stroke="#dde5eb"
                stroke-width="8"
              />
              <line
                id="workmate-block-b-df-s-line4"
                x1="0"
                y1="-210.9545"
                x2="0"
                y2="210.9545"
                transform="translate(144.7325 325.4575)"
                fill="none"
                stroke="#9fb3c2"
                stroke-width="7"
              />
              <line
                id="workmate-block-b-df-s-line5"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(147.66675 392.5965)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
              <line
                id="workmate-block-b-df-s-line6"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(144.514349 254.388)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
            </g>
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D6"
              cursor={"pointer"}
              id="workmate-block-b-df-u-r2d6"
              rx="13.48575"
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="translate(245.491921 176.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse2"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 176.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D5"
              id="workmate-block-b-df-u-r2d5"
              cursor={"pointer"}
              rx="13.48575"
              ry="13.48575"
              className={"hover:fill-blue-300"}
              transform="translate(245.491921 319.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-22"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 319.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D4"
              id="workmate-block-b-df-u-r2d4"
              rx="13.48575"
              className={"hover:fill-blue-300"}
              ry="13.48575"
              cursor={"pointer"}
              transform="translate(245.491921 455.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-32"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 455.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-42"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 456.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D3"
              id="workmate-block-b-df-u-r2d3"
              rx="13.48575"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 456.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-52"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 315.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-62"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 176.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D2"
              id="workmate-block-b-df-u-r2d2"
              rx="13.48575"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 315.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R2-D1"
              id="workmate-block-b-df-u-r2d1"
              className={"hover:fill-blue-300"}
              rx="13.48575"
              ry="13.48575"
              cursor={"pointer"}
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 176.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
          </g>
          <g
            id="workmate-block-b-df-u-copy-of-one-2"
            transform="matrix(1, 0, 0, 1, 697.5004272460938, -4.461380958557129)"
          >
            <g
              id="workmate-block-b-df-u-row13"
              transform="translate(35.311505-10.757981)"
            >
              <rect
                id="workmate-block-b-df-s-rect7"
                width="152.360499"
                height="421.909"
                rx="0"
                ry="0"
                transform="translate(71.486501 114.503)"
                fill="#fff"
                stroke="#dde5eb"
                stroke-width="8"
              />
              <line
                id="workmate-block-b-df-s-line7"
                x1="0"
                y1="-210.9545"
                x2="0"
                y2="210.9545"
                transform="translate(144.7325 325.4575)"
                fill="none"
                stroke="#9fb3c2"
                stroke-width="7"
              />
              <line
                id="workmate-block-b-df-s-line8"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(147.66675 392.5965)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
              <line
                id="workmate-block-b-df-s-line9"
                x1="-72.20765"
                y1="0"
                x2="72.207651"
                y2="0"
                transform="translate(144.514349 254.388)"
                fill="none"
                stroke="#88a3b8"
                stroke-width="3"
              />
            </g>
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D6"
              id="workmate-block-b-df-u-r3d6"
              rx="13.48575"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="translate(245.491921 176.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              id="workmate-block-b-df-u-copy-of-ellipse3"
              rx="13.48575"
              cursor={"pointer"}
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="translate(270.491921 176.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D5"
              id="workmate-block-b-df-u-r3d5"
              rx="13.48575"
              ry="13.48575"
              className={"hover:fill-blue-300"}
              cursor={"pointer"}
              transform="translate(245.491921 319.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-23"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 319.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D4"
              cursor={"pointer"}
              id="workmate-block-b-df-u-r3d4"
              rx="13.48575"
              className={"hover:fill-blue-300"}
              ry="13.48575"
              transform="translate(245.491921 455.169807)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-33"
              rx="13.48575"
              ry="13.48575"
              transform="translate(270.491921 455.169807)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-43"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 456.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D3"
              id="workmate-block-b-df-u-r3d3"
              rx="13.48575"
              className={"hover:fill-blue-300"}
              ry="13.48575"
              cursor={"pointer"}
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 456.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-53"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 315.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              id="workmate-block-b-df-u-copy-of-ellipse-63"
              rx="13.48575"
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 97.822047 176.068088)"
              fill="#fff"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D2"
              id="workmate-block-b-df-u-r3d2"
              rx="13.48575"
              className={"hover:fill-blue-300"}
              cursor={"pointer"}
              ry="13.48575"
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 315.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
            <ellipse
              onClick={handleEllipseClick}
              data-name="AM-B-DF-R3-D1"
              id="workmate-block-b-df-u-r3d1"
              rx="13.48575"
              ry="13.48575"
              className={"hover:fill-blue-300"}
              cursor={"pointer"}
              transform="matrix(-.999363-.035684 0.035684-.999363 118.822047 176.068088)"
              fill="#d2dbed"
              stroke-width="0"
            />
          </g>
          <g
            id="workmate-block-b-df-s-g3"
            transform="matrix(1, 0, 0, 1, 0.0000010000002390597729, 0)"
          >
            <text
              id="workmate-block-b-df-u-copy-of-text3"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 137.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan14"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 1
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-23"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 276.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan15"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 2
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-32"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 415.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan16"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 3
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-42"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 412.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan17"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 4
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-52"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 275.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan18"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 5
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan19"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-6"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 134.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan20"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan21"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
          </g>
          <g
            id="workmate-block-b-df-u-copy-of-group"
            transform="matrix(1, 0, 0, 1, 342, 2)"
          >
            <text
              id="workmate-block-b-df-u-copy-of-text4"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 137.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan22"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 1
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-24"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 276.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan23"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 2
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-33"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 500.187474 415.127947)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan24"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 3
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-43"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 412.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan25"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 4
              </tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-53"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 275.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan26"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 5
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan27"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
            <text
              id="workmate-block-b-df-u-copy-of-text-62"
              dx="0"
              dy="0"
              font-family='"workmate-block-b-df:::Roboto"'
              font-size="20"
              font-weight="400"
              transform="matrix(.000741 1-1 0.000741 567.002719 134.154939)"
              stroke-width="0"
            >
              <tspan
                id="workmate-block-b-df-s-tspan28"
                y="0"
                font-weight="400"
                stroke-width="0"
              >
                DESK 6
              </tspan>
              <tspan
                id="workmate-block-b-df-s-tspan29"
                x="0"
                y="40"
                font-weight="400"
                stroke-width="0"
              ></tspan>
            </text>
          </g>
          <text
            id="workmate-block-b-df-s-text5"
            dx="0"
            dy="0"
            font-family='"workmate-block-b-df:::Roboto"'
            font-size="31"
            font-weight="700"
            transform="matrix(1, 0, 0, 1, 148.5454559326172, 557.4760131835938)"
            stroke-width="0"
          >
            <tspan
              id="workmate-block-b-df-s-tspan30"
              y="0"
              font-weight="700"
              stroke-width="0"
            >
              Row One
            </tspan>
          </text>
          <text
            id="workmate-block-b-df-u-copy-of-text5"
            dx="0"
            dy="0"
            font-family='"workmate-block-b-df:::Roboto"'
            font-size="31"
            font-weight="700"
            transform="matrix(1, 0, 0, 1, 476.1927795410156, 557.4760131835938)"
            stroke-width="0"
          >
            <tspan
              id="workmate-block-b-df-s-tspan31"
              y="0"
              font-weight="700"
              stroke-width="0"
            >
              Row Two
            </tspan>
          </text>
          <text
            id="workmate-block-b-df-u-copy-of-text-25"
            dx="0"
            dy="0"
            font-family='"workmate-block-b-df:::Roboto"'
            font-size="31"
            font-weight="700"
            transform="matrix(1, 0, 0, 1, 806.2781372070312, 557.4760131835938)"
            stroke-width="0"
          >
            <tspan
              id="workmate-block-b-df-s-tspan32"
              y="0"
              font-weight="700"
              stroke-width="0"
            >
              Row Three
            </tspan>
          </text>
        </svg>
      </div>
    </>
  );
};

export default DeskIcon;
