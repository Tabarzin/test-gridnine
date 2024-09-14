import { Container, Grid } from "@mantine/core";

import "./App.css";
import Controls from "./components/Controls/Controls";

function App() {
  return (
    <Container fluid bg="var(--mantine-color-blue-light)" className="container">
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
        <Grid.Col span={3}>
          <Controls />
        </Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
