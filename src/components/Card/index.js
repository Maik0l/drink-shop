import { Container, Content } from "./styles";
import Button from "../Button";

const Card = ({ name, image_url, first_brewed, description, unit, value }) => {
  return (
    <Container>
      <Content>
        <div>{name}</div>
        <img alt={name} src={image_url} />
        <description>{description}</description>
        <div>{first_brewed}</div>
        <div>{`${value} ${unit}`}</div>
        <div>
          <Button />
        </div>
      </Content>
    </Container>
  );
};

export default Card;
