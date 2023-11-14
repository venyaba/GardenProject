import Input from "@mui/joy/Input";
import Checkbox from "@mui/joy/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./FilteredPanel.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getMinPrice,
  getMaxPrice,
  getIsDiscount,
  getSortValue,
} from "../../core/redux/store/slices/categoriesSlices";
import { useEffect } from "react";

const FilteredPanel = () => {
  const { sortValue } = useSelector((state) => state.categoriesState);

  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <div className={styles.filteredPanel}>
      <label>
        <span>Price:</span>
        <div className={styles.inputs}>
          <Input
            placeholder="from"
            sx={{ borderColor: "black", width: "103px" }}
            onChange={(e) => dispatch(getMinPrice(e.target.value))}
          />
          <Input
            placeholder="to"
            sx={{ borderColor: "black", width: "103px" }}
            onChange={(e) => {
              dispatch(getMaxPrice(e.target.value));
            }}
          />
        </div>
      </label>
      <label>
        <span>Discounted items</span>
        <Checkbox onChange={(e) => dispatch(getIsDiscount(e.target.checked))} />
      </label>
      <label>
        {/* <Select placeholder="Choose one…"  onChange={e=>dispatch(getSortValue(e.target.value))}/> */}

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sorted </InputLabel>
            <Select
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortValue}
              label="Price"
              onChange={(e) => dispatch(getSortValue(e.target.value))}
            >
              <MenuItem value="Low-to-high">Low to High</MenuItem>
              <MenuItem value="High-to-low">High to Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </label>
    </div>
  );
};

export default FilteredPanel;
