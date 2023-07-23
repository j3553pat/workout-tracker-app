import React from "react";
import { Container, Typography } from '@mui/material'
const SuccessMessage = () => {
  return (
    <div>
    <Container>
        <Typography variant="h2" color="success">Success!</Typography>
      <Typography variant="h3" color="success">You have successfully signed up.</Typography>
    </Container>
    </div>
  );
};

export default SuccessMessage;
