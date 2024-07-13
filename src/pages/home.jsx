import POS from "../components/pos";
import RightDetail from "../components/rightDetail";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <div className=" h-screen w-full" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="flex flex-row">
        <div class="basis-1/12 bg-green-800 shadow">
          <Sidebar />
        </div>
        <div
          class="basis-9/12 p-5"
          style={{
            backgroundColor: "#EEEEEE",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <POS />
        </div>
        <div style={{ backgroundColor: "#EEEEEE" }} class="basis-3/12 shadow">
          <RightDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;
