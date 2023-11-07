import Input from "@mui/joy/Input";
import Checkbox from "@mui/joy/Checkbox";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";


import styles from "./FilteredPanel.module.css";

const FilteredPanel = () => {
  return (
    <div className={styles.filteredPanel}>
      <label>
        <span>Price:</span>
        <div className={styles.inputs}>
          <Input
            placeholder="from"
            sx={{ borderColor: "black", width: "103px" }}
            onChange={(e) => console.log(e.target.value)}
          />
          <Input
            placeholder="to"
            sx={{ borderColor: "black", width: "103px" }}
          />
        </div>
      </label>
      <label>
        <span>Discounted items</span>
        <Checkbox />
      </label>
      <label>
        <span>Sorted</span>
        <Select placeholder="Choose one…">
          <Option value={'1'}>1</Option>
          <Option value={'1'}>2</Option>
          <Option  value={'1'}>3</Option>
        </Select>
      </label>
    </div>
  );
};

export default FilteredPanel;
