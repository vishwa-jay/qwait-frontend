import { Card, CardActionArea, CardContent } from "@mui/material";
import { ReactNode } from "react";

interface CustomCardProps {
  children: ReactNode;
  handleOnClick?: (e: any) => void
}

const CustomCard = (props: CustomCardProps) => {
  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth:250,
        marginTop: 2,
        marginX: 2,
        paddingTop: 2,
        border: "4px solid #a133a1",
        borderRadius: "10px",
        "&.MuiPaper-root:hover":{
            boxShadow: "1px 1px 5px 5px #c59dcb"
        }
      }}
    >
        <CardActionArea onClick={props.handleOnClick}>
            <CardContent>{props.children}</CardContent>
        </CardActionArea>
      
    </Card>
  );
};

export default CustomCard;
