import { Navlink } from "react-router-dom";

export default function Header(){

    return(
        <header>
            <div id="headerBranding">
                Colour Academy
            </div>
            <nav id="headerNavbar">
                <Navlink to={"/"} >Home</Navlink>
                <Navlink to={"/generator"} >Generator</Navlink>
                <Navlink to={"/generator/saved"} >Saved Themes</Navlink>
            </nav>
        </header>
    )
}