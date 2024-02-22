import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

interface SearchBoxProps {
  onChange : (value: any) => void
}

const SearchBox = (props: SearchBoxProps)=> {
  const [term, setTerm] = useState("");

    return (
      <Paper
        component="form"
        sx={{ p: '2px 4px', marginX:"5px", marginBottom:"5px", display: 'flex', alignItems: 'center',width:"100%", maxWidth: 400, borderRadius: "25px" }}
      >
        
        <InputBase
          sx={{ ml: 1, flex: 1}}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e) => setTerm(e.currentTarget.value)}
        />
        <IconButton type="button" sx={{  backgroundColor: "#8c3c99", color: "#fff" }} aria-label="search" onClick={()=>props.onChange(term)}>
          <SearchIcon />
        </IconButton>
        
      </Paper>
    );
  }

  export default SearchBox;