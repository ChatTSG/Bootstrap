
import Container from "react-bootstrap/Container";
import UniorHead from "@/components/UniorHead"; 
import UniorMain from '@/components/UniorMain';
import UniorNavigation from '@/components/UniorNavigation';
import UniorSearchModal from '@/components/UniorSearchModal';
import UniorSettingsModal from '@/components/UniorSettingsModal';
import UniorFooter from "@/components/UniorFooter";

export default function Home() {
  return (
    <>
      <UniorHead title="Home Page" />
      <Container as="div" className="wrapper bg-noise">
        <UniorNavigation />
        <Container as="div" className="nav-backdrop"></Container>
        <UniorMain />
      </Container>
      <UniorSearchModal />
      <UniorSettingsModal />
      <UniorFooter />
    </>
  );
}

