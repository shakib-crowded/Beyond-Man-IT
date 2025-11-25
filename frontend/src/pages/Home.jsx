import Hero from "../components/common/Hero";
import Services from "../components/home/Services";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero
        heading={"Your IT Solution "}
        keyword={"Partner"}
        description={
          "Transforming businesses with cutting-edge technology solutions and innovative digital strategies."
        }
        btnText={"Descover Our Services"}
        path={"/#services"}
        gradient={""}
      />
      <Services />
    </>
  );
};

export default Home;
