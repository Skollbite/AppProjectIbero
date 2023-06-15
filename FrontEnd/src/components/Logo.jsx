import styled from "@emotion/styled";
import logo from "../assets/logo-ibero-transparent.png";

const Img = styled("img")({
    width: 200,
    objectFit: "cover",
    objectPosition: "center",
    marginTop: "2em"
})

export default function Logo(props) {
    return (
        <Img src={logo} alt="Logo" />
    )
}