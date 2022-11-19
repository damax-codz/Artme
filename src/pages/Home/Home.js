import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import anim from "../../components/images/anim.jpg";
import dance from "../../components/images/dance.png";
import eat from "../../components/images/eat.jpg";
import flow from "../../components/images/flow.jpg";
import hand from "../../components/images/hand.jpg";
import lit from "../../components/images/lit.jpg";
import mam from "../../components/images/mam.jpg";
import "./home.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />

      <div className="main">
        <div className="page">
          <div className="img-text">
            <img src="https://cdn.pixabay.com/photo/2018/03/22/08/11/art-3249631_1280.png" />
          </div>
          <div className="left-text">
            <span>Exploring Art </span>
            <span>Around</span>
            <span> The World</span>
          </div>
        </div>

        <div className="collection-scroll"></div>

        <div className="image-grid-container">
          <div className="disappear-text">
            <h2 className="text-one">Art in the Collection</h2>
            <h2 className="text-two">Check Them Out</h2>
          </div>
          <Grid container className="image-grid">
            <Grid item className="image-container long-row">
              <Box className="container">
                <Box
                  component="img"
                  src={anim}
                  alt="green iguana"
                  className="container-img"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>

            <Grid item className="image-container">
              <Box className="container">
                <Box
                  component="img"
                  src={dance}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsuum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container long-row-three">
              <Box className="container">
                <Box
                  component="img"
                  src={eat}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container ">
              <Box className="container">
                <Box
                  component="img"
                  src={flow}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container ">
              <Box className="container">
                <Box
                  component="img"
                  src={hand}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container long-row-two">
              <Box className="container">
                <Box
                  component="img"
                  src={lit}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container ">
              <Box className="container">
                <Box
                  component="img"
                  src={mam}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
            <Grid item className="image-container long-row-three">
              <Box className="container">
                <Box
                  component="img"
                  src={eat}
                  className="container-img"
                  alt="green iguana"
                />
                <Box className="container-text">
                  <Typography gutterBottom variant="p" className="artist-name">
                    by Damax and Ezra
                  </Typography>
                  <p className="art-description">Lorem Ipsum</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Link to="/Art_me/gallery" className="more_collections_wrapper">
            <Button className="more_collections" variant="contained">
              Discover more collections{" "}
              <CallMadeIcon sx={{ fontSize: 15, marginLeft: "3px" }} />
            </Button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
