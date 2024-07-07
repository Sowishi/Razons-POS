import POS from "../components/pos";

const Home = () => {
  return (
    <div className=" h-screen w-full" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="flex flex-row">
        <div class="basis-1/12">01</div>
        <div class="basis-8/12 p-5" style={{ backgroundColor: "#F8F8F8" }}>
          <POS />
        </div>
        <div class="basis-3/12">03</div>
      </div>
    </div>
  );
};

export default Home;
