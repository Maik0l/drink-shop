import { Container, Content, DiminuteInfo } from "./styles";
import AddButton from "../AddButton";
import { useContext } from "react";
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
        <span>{name}</span>
        <img alt={name} src={image_url} />
        <div>
          <p>
            {description.length > 85
              ? description.slice(0, 85) + "..."
              : description}
          </p>
          {/* <p>{description}</p> */}
        </div>
        <DiminuteInfo>
          <div>First brewed: {first_brewed}</div>
          <div>Volume: {`${value} ${unit}`}</div>
        </DiminuteInfo>
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
            <AddButton
              type={type}
              option={option}
              item={item}
              item_id={item_id}
            />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Card;
