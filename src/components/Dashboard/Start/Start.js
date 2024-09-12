import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Button } from "@mui/material";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import useMediaQuery from "@mui/material/useMediaQuery";

import lendingImage from "../../../assets/lending.png";

function Start({ handleDisplaySetup }) {
  const matches = useMediaQuery("(max-width:1060px)");

  return (
    <>
      <Box sx={{ background: "radial-gradient(circle, #0f3a65, #0d0d0e 70%)" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "15px",
            height: "100vh",
            flexWrap: "wrap",
            marginTop: matches ? "50px" : "0px",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "500px",
              alignItems: "flex-start",
              justifyContent: " center",
              textAlign: "justify",
              gap: "7px",
            }}
          >
            <Typography
              variant="h2"
              fontFamily={"Inconsolata "}
              sx={{
                fontWeight: "900",
              }}
              color="textPrimary"
            >
              FUZZY ~ CORPAS ~
            </Typography>

            <Typography color="textPrimary">
              Fuzzy COPRAS (Complex Proportional Assessment) is a multi-criteria
              decision-making (MCDM) method that integrates fuzzy logic to
              handle uncertainty and ambiguity in the evaluation process.
            </Typography>
            <Typography color="textSecondary" fontFamily={"Inconsolata "}>
              introduced by Zavadskas and Kaklauskas
            </Typography>
            <Button
              variant="contained"
              color="green"
              endIcon={<IoArrowForwardCircleOutline />}
              onClick={handleDisplaySetup}
            >
              Get Started
            </Button>
          </Box>
          <img
            src={lendingImage}
            alt="lending"
            loading="lazy"
            style={{ maxWidth: " 100%", width: " 450px" }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Start;
