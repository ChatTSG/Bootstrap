import Container from "react-bootstrap/Container";
import UniorHead from "@/components/UniorHead"; 
import UniorMain from '@/components/UniorMain';
//import UniorNavigation from '@/components/UniorNavigation';
//import UniorFooter from "@/components/UniorFooter";

export default function Home() {
  return (
    <>
      <UniorHead title="Home Page" />
      <div className="wrapper bg-noise">
        {/*<UniorNavigation />*/}
        <Container as="div" className="nav-backdrop"></Container>
        <UniorMain />
      </div>
      {/*<UniorFooter />*/}
    </>
  );
}
