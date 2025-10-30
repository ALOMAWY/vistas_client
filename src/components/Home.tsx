import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import Discover from "./Discover";
import OurProducts from "./OurProducts";
import Footer from "./Footer";
import styled from "styled-components";
// import CustomersTalk from "./CustomersTalk";

const StyledHeader = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem 0;
`;

export default function Home() {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Landing />
      <About />
      {/* <CustomersTalk /> */}
      <Discover />
      <OurProducts />
      <Footer />
    </>
  );
}
