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
            background:
              "linear-gradient(237deg, rgba(1,71,55,1) 0%, rgba(238,238,238,1) 61%)",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <POS />
        </div>
        <div
          style={{
            background: "#eeeeee",
          }}
          class="basis-3/12 shadow-lg"
        >
          <RightDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;
