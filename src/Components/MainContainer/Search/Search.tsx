import { IconButton } from "@mui/material";
import Input from "../../../Utils/Input";
import SearchIcon from "@mui/icons-material/Search";
import "../main.css";

export default function Search() {
  return (
    <div className="search_container">
      <Input
        type="text"
        placeholder="Search..."
        style={{
          fontSize: "1em",
          padding: "10px 10px",
          borderRadius: "10px",
          width: "100%",
        }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </div>
  );
}
