import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "sans-serif",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar(props) {

  const classes = useStyles();

  return (
    <div>
      <AppBar
        style={{
          backgroundColor: "#6bc0d1",
        }}
        position="static"
      >
        <Toolbar>
           <IconButton aria-label="home page" color="inherit" href="/welcome">
            <HomeIcon />
          </IconButton> 
          
            <Button color="inherit" href="/about">
              About the data
            </Button>
 
            <Button color="inherit" href="/download">
              Download data
            </Button>
        
            <div style = {{width: 110, display: "flex"}}>

         
            <p style = {{marginTop: 14, marginRight: 10, marginLeft: 15}}>HOUSES</p>

            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Houses"
            value = "Houses"
            style={{width: 35, height: 20, marginTop: 14}}
            >
              <MenuItem  value={10}>
                <Button color="inherit" href="/Lannister">
                    Lannister
                </Button>
              </MenuItem>
              <MenuItem  value={10}>
                <Button color="inherit" href="/Stark">
                    Stark
                </Button>
              </MenuItem>
              <MenuItem  value={10}>
                <Button color="inherit" href="/Targaryen">
                    Stark
                </Button>
              </MenuItem>
            </Select>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
