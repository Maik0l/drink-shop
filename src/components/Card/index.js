import { Container, Content } from "./styles";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton";
import { useContext, useState } from "react";
import { OptionContext } from "../../providers/Option";

const Card = ({
  name,
  image_url,
  first_brewed,
  description,
  unit,
  value,
  item,
  item_id,
  type,
}) => {
  const { option, setOption } = useContext(OptionContext);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Container>
      <Content>
        <div>{name}</div>
        <img alt={name} src={image_url} />
        <div>{description}</div>
        <div>{item_id}</div>
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
            {/* {type === "add" ? ( */}
            <AddButton
              type={type}
              option={option}
              item={item}
              item_id={item_id}
            />
            {/* // ) : (
            //   <RemoveButton item_id={item_id} option={option} />
            // )} */}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Card;
