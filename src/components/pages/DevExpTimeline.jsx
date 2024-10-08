import {devEdu} from "../../constants/details";
import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {HomeRepairServiceRounded} from "@mui/icons-material";

const DevExpTimeline = ({loading}) => {
  return (
      <Timeline position="right" sx={{direction: 'ltr'}}>
        {
          devEdu.map((item, index) => (
              <Slide direction="up" in={loading} key={index}
                     style={{transitionDelay: loading ? `${index + 1}000ms` : '0ms'}}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot color="warning" variant="outlined">
                      <HomeRepairServiceRounded color="warning"/>
                    </TimelineDot>
                    {index != (devEdu.length - 1) ? <TimelineConnector/> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="caption" color="gray">
                      {item.year}
                    </Typography>
                    <Typography variant="body1" color="black">
                      {item.cert}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {item.major}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {item.place}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              </Slide>
          ))
        }
      </Timeline>
  )
}

export default DevExpTimeline;
