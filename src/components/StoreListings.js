import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Image  from "react-bootstrap/Image";

export default function StoreListings() {
  return (
    <div>
      <h2>Browse stores in Kansas City, KS</h2>
      <Container style={{ marginTop: "40px", display: "flex", justifyContent: "space-evenly",textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid black",
            display: "grid",
            justifyContent: "space-evenly",
            gridTemplateColumns: "auto-fill"
          }}
        >
          <Row style={{border: "1px solid grey"}}>
            <Col  xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                roundedCircle
              />
            </Col> 
            <Col>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup 1.6mi</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png"
                roundedCircle
              />
            </Col>
            <Col>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup 1.8mi</p>
            </Col>
          </Row>
          <Col sm="1"></Col>
          <Row>
            <Col xs=".5">
              <Image
                src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/457/87419e93-2e92-4c73-8d48-2fc0c2cd390c.png"
                roundedCircle
              />
            </Col>
            <Col md="6">
              <h5 style={{ fontWeight: "bold" }}>Hy-Vee</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Row>




      </Container>
    </div>
  );
}
