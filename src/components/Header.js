import React, { useState, useEffect, useMemo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

import FeelingProud from "./CenterIcon/FeelingProud"

const Header = (props) => {
  const [checked, setChecked] = useState(false);
  const [titles, setTitles] = useState([]);
  

const themeColors = {
  accentBright: "#FC1056",
  accentColor: "#E3405F",
  avatarMisc: "#212121",
  avatarShoes: "#2B2B2B",
  body: "#1D1D1D",
  dark: "#000000",
  imageClothes: "#000000",
  imageDark: "#292A2D",
  name: "dark",
  projectCard: "#292A2D",
  secondaryText: "#8D8D8D",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  text: "#FFFFFF",
};

const themeColorsDark = {
accentBright:"#FC1056",
accentColor: "#E3405F",
avatarMisc: "#e9ecf2",
avatarShoes: "#ccd2e3",
body: "#FFFFFF",
dark: "#000000",
imageClothes: "#dce4f2",
imageDark: "#dce4f2",
name: "light",
projectCard: "#DCE4F2",
secondaryText: "#7F8DAA",
skinColor: "#F7B799",
skinColor2: "#FCB696",
text: "#343434"

};
const [themeIcon, setThemeIcon] = useState(themeColorsDark);

  useEffect(() => {
    if (props.sharedData) {
      setTitles(
        props.sharedData.titles.map((x) => [x.toUpperCase(), 1500]).flat()
      );
    }
  }, [props.sharedData]);

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);

    setThemeIcon( themeIcon === themeColors ? themeColorsDark : themeColors);
  };

  const HeaderTitleTypeAnimation = useMemo(() => {
    return (
      <Typical className="title-styles" steps={titles} loop={50} />
    );
  }, [titles]);

  const name = props.sharedData ? props.sharedData.name : "";

  return (
    <header
      id="home" 
      style={{ height: window.innerHeight - 140, display: "block" }}
    >

        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="greeting-icon" style={{ height: "40px" }}>
        <FeelingProud theme={themeIcon}  style={{ width: "30px", height: "30px" }} />
        </div>

      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              
            >
             
            </span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">{HeaderTitleTypeAnimation}</div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;