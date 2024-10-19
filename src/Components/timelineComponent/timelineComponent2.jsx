import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { YP, SIGHT, SLSAC, IEEESUSL } from "../../images";
import "./timelineComponent2.css";
import EventNoteIcon from "@mui/icons-material/EventNote";

const timelineComponent2 = () => {
  return (
    <div>
      <div className="bg">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={IEEESUSL} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2, lineHeight: 0, width: 200 }}
            >
              <div className="tlcontainer">
                <span className="tltxt1">
                  Chairperson
                  <br />
                </span>
                <span className="tltxt2">
                  IEEE Student Branch of SUSL
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2024 - Present</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={SIGHT} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2, lineHeight: 0, width: 200 }}
            >
              <div className="tlcontainer2">
                <span className="tltxt1">
                  Technical <br />
                  Sub-committee Member
                  <br />
                </span>
                <span className="tltxt2">
                  IEEE Sri Lanka Section SIGHT
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2024 - Present</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={SLSAC} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2, lineHeight: 0, width: 300 }}
            >
              <div className="tlcontainer3">
                <span className="tltxt1">
                  Graphic Designer
                  <br />
                </span>
                <span className="tltxt2">
                  SLSAC Public Visibility Sub-Committee
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2023 - 2024</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={IEEESUSL} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2, lineHeight: 0 }}>
              <div className="tlcontainer4">
                <span className="tltxt1">
                  Vice Chairperson
                  <br />
                </span>
                <span className="tltxt2">
                  IEEE Student Branch of SUSL
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2023 - 2024</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={SIGHT} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2, lineHeight: 0, width: 300 }}
            >
              <div className="tlcontainer5">
                <span className="tltxt1">
                  Public Visibility Team Member
                  <br />
                </span>
                <span className="tltxt2">
                  IEEE Sri Lanka Section SIGHT
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2022 - 2023</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
                <img src={YP} alt="" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: "12px", px: 2, lineHeight: 0, width: 300 }}
            >
              <div className="tlcontainer6">
                <span className="tltxt1">
                  Graphic Designer
                  <br />
                </span>
                <span className="tltxt2">
                  IEEE Young Professionals Sri Lanka
                  <br />
                </span>
                <div className="tldate">
                  <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                  <span className="tltxt2">2022 - 2023</span>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default timelineComponent2;
