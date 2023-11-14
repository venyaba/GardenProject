import { Button } from "@mui/material";

const CustomButton = ({title,size,style,handleClick})=>{
   return  <Button variant="contained" color="success"  style={style} size={size} onClick={handleClick}>{title}</Button>
}

export default CustomButton;