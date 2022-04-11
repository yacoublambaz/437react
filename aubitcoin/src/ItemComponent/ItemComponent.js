import "./ItemComponent.css";
import { Box, Button, Typography } from "@mui/material";

export default function ItemComponent({
  ItemPrice,
  ItemName,
  ItemDescription,
  ImageSrc,
}) {
  return (
    <Box className="ItemBox" display={"flex"} flexDirection="row">
      <Box sx={{ marginLeft: "1rem" }} display={"flex"} flexDirection="column">
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Arial",
            fontWeight: "bolder",
            color: "white",
          }}
        >
          {ItemName}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Arial",
            fontWeight: "bolder",
            color: "#808080",
          }}
        >
          {ItemDescription}
        </Typography>
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: "Arial",
            fontWeight: "bolder",
            color: "#f3c317",
          }}
        >
          Price: {ItemPrice} ABC
        </Typography>
      </Box>

      <img width={100} height={100} className="circ" src={ImageSrc} />
    </Box>
  );
}
