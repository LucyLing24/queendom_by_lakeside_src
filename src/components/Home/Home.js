import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Picture from "../Gallery/Pictures";
import Sildebar from "../Gallery/Sildebar";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
            <Row>
                <Col md={3} className="home-header">
                    <h1 className="heading-name">
                        Queendom by Lakeside
                    </h1>
                    <p style={{textAlign: "justify"}}>
                        This project is an immersive game experience highlighting the last matriarchal clan society in China. Locating in Lugu Lake, Yunnan Province, Mosuo people follow the philosophy of coexistence. As a matriclan, the Mosuo continue their families through the practice of a dynamic and open marriage called “Walking Marriage.” When interacting with nature, this female-led clan emphasizes decentralization, which means people should follow the course of nature and utilize resources to a limited extent. Therefore, the Lugu Lake was praised as a paradise in China. However, fast-pacing urbanization and tourism disrupt the local environment and culture, leading to climate questions like the loss of the grass sea, shoreline encroachment, etc. Based on the VR engine, Queendom by the Lakeside would create a virtual world of Mosuo’s legend, in which users could experience the beauty of the Lugu River, the culture of Mosuo, and the way to interact with nature to reach a dynamic balance.
                    </p>
                </Col>
            </Row>
          </Container>
      </Container>
        <Sildebar />
        <Picture />
    </section>
  );
}

export default Home;
