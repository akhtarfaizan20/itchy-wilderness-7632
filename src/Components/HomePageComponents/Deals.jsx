import {
  Box,
  Grid,
  GridItem,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const Deals = () => {
  const Images = new Array(18)
    .fill(0)
    .map((el, i) => (el = `/Images/Deals/${i + 1}.png`));
  return (
    <Box>
      <Grid
        templateColumns={useBreakpointValue({
          base: "repeat(3, 1fr)",
          md: "repeat(9, 1fr)",
        })}
      >
        {Images.map((el) => {
          return (
            <GridItem key={el}>
              <Image src={el} w="100%" />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Deals;
