
import Container from "react-bootstrap/Container";
import UniorHead from "@/components/UniorHead"; 
import UniorHeader from "@/components/UniorHeader";
import UniorMain from '@/components/UniorMain';
import UniorSidebar from '@/components/UniorSidebar';
import UniorSearchModal from '@/components/UniorSearchModal';
import UniorSettingsModal from '@/components/UniorSettingsModal';
import UniorFooter from "@/components/UniorFooter";

export default function Home() {
  return (
    <>
      <UniorHead title="Home Page" />
      <Container as="div" className="wrapper bg-noise">
        <UniorHeader />
        <UniorMain />
        <UniorSidebar />
        <UniorSearchModal />
        <UniorSettingsModal />
        <UniorFooter />
      </Container>
    </>
  );
}