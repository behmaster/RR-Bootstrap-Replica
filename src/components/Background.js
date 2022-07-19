import Card from "react-bootstrap/Card";

export default function Background() {
  return (
    <div>
      <Card style={{ margin: "auto", width: "1000px", minHeight: "250px", marginBottom: "50px", backgroundColor: "#DEEED6" }} className="text-black">
        <Card.Img
          style={{
            height: "300px",
            width: "25%",
            marginLeft: "auto",
            backgroundSize: "auto",


          }}
          src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay style={{margin: "50px 50px 50px 20px", textAlign: "left"}} >
          <Card.Title style={{fontSize: "45px", fontWeight: "bold", textAlign: "left"}}>Order groceries for delivery <br /> or pickup today</Card.Title>
          <Card.Text>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
