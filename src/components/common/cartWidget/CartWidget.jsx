import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    
      <Link to="/cart" style={{color: "black"}}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
        </Badge>
      </Link>
    
  );
};

export default CartWidget;
