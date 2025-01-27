import { Layout } from "../components/layout/Layout";
import { MindMapComponent } from "../components/mindmap/MindMapComponent";
import "../styles/components/mindmap.css";

export default function Home() {
  return (
    <Layout>
      <MindMapComponent />
    </Layout>
  );
}
