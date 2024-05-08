import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { VCK, SUSL } from "../../images";
import "./timelineComponent.css";
import EventNoteIcon from "@mui/icons-material/EventNote";

const TimelineComponent = () => {
  return (
    <div className="bg">
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
              <img src={SUSL} alt="" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, lineHeight: 0 }}>
            <div className="tlcontainer">
              <span className="tltxt1">
                BSc. Honours Degree in Software Engineering
                <br />
              </span>
              <span className="tltxt2">
                Sabaragamuwa University of Sri Lanka
                <br />
              </span>
              <div className="tldate">
                <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                <span className="tltxt2">2021 - Present</span>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
              <img src={VCK} alt="" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, lineHeight: 0 }}>
            <div className="tlcontainer2">
              <span className="tltxt1">
                GCE Advanced Level
                <br />
              </span>
              <span className="tltxt2">
                Vidyartha Collage Kandy
                <br />
              </span>
              <div className="tldate">
                <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                <span className="tltxt2">2019</span>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ py: "12px", px: "12px", padding: "0px" }}>
              <img src={VCK} alt="" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2, lineHeight: 0 }}>
            <div className="tlcontainer3">
              <span className="tltxt1">
                GCE Ordinary Level
                <br />
              </span>
              <span className="tltxt2">
                Vidyartha Collage Kandy
                <br />
              </span>
              <div className="tldate">
                <EventNoteIcon sx={{ fontSize: "0.8rem" }} />
                <span className="tltxt2">2016</span>
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
