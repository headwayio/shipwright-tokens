import Container from "./container";
import Text from "../Text";

const Typography = () => {
  return (
    <Container title="Typography">
      <Text variant="h1-700">H1 700</Text>
      <Text variant="h1-400">H1 400</Text>
      <Text variant="h2-700">H2 700</Text>
      <Text variant="h2-400">H2 400</Text>
      <Text variant="h3-700">H3 700</Text>
      <Text variant="h3-400">H3 400</Text>
      <Text variant="h4-700">H4 700</Text>
      <Text variant="h4-400">H4 400</Text>
      <Text variant="h5-700">H5 700</Text>
      <Text variant="h5-400">H5 400</Text>
      <Text variant="h6-700">H6 700</Text>
      <Text variant="h6-400">H6 400</Text>
      <Text variant="700">700</Text>
      <Text variant="600">600</Text>
      <Text variant="500">500</Text>
      <Text variant="400">400</Text>
    </Container>
  );
};

export default Typography;
