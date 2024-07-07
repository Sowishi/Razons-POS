import Sidebar from "../components/sidebar";

const Menus = () => {
  return (
    <div className="h-screen w-full" style={{ backgroundColor: "#FBFBFB" }}>
      <div className="flex flex-row">
        <div class="basis-1/12 bg-green-800 shadow">
          <Sidebar />
        </div>
        <div
          class="basis-11/12 p-5"
          style={{
            backgroundColor: "red",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <h1>Menus</h1>
        </div>
      </div>
    </div>
  );
};

export default Menus;
