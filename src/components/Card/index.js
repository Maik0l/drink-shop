import { Container, Content } from "./styles";
import Button from "../Button";
import { useState } from "react";

const Card = ({
  name,
  image_url,
  first_brewed,
  description,
  unit,
  value,
  item,
  id,
  type,
}) => {
  const [option, setOption] = useState();

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Container>
      <Content>
        <div>{name}</div>
        <img alt={name} src={image_url} />
        <div>{description}</div>
        <div>{first_brewed}</div>
        <div>{`${value} ${unit}`}</div>
        <div>
          {type === "add" && (
            <select name="options" onChange={handleChange}>
              <option defaultValue>Send to</option>
              <option value="wedding">Wedding</option>
              <option value="prom">Prom</option>
              <option value="celebration">Celebration</option>
            </select>
          )}
          <div>
            <Button type={type} option={option} item={item} id={id} />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Card;
