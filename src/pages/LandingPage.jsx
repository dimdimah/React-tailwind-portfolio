import Layout from "../components/Layout";
import CardImage from "../components/images";

function LandingPage() {
  return (
    <Layout title={"Galeri"}>
      <div className="flex flex-wrap">
        <CardImage imageSrc={"/Frame1.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame2.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame3.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame4.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame5.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame6.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame7.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame8.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame9.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame10.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame11.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame12.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame13.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame14.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame15.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame16.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame17.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame18.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame19.png"} title="Shoes!" />
        <CardImage imageSrc={"/Frame20.png"} title="Shoes!" />
      </div>
    </Layout>
  );
}

export default LandingPage;
