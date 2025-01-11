import "leaflet/dist/leaflet.css";
import { motion } from "motion/react";
import { MapContainer, TileLayer } from "react-leaflet";

const HomeAuth = () => {
  return (
    <div className="w-[100vw] h-[100vh] relative">
      {/* layers */}
      <div className="layer absolute z-[1] w-full h-full bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0),rgba(255,255,255,0.3),rgba(255,255,255,0.6),rgba(255,255,255,1))] pointer-events-none"></div>
      <div className="layer absolute z-[1] w-full h-full bg-[radial-gradient(ellipse_at_70%_70%,rgba(255,255,255,0),rgba(255,255,255,0.3),rgba(255,255,255,.8))] pointer-events-none"></div>
      <div className="layer absolute z-[1] w-full h-full bg-[radial-gradient(rgba(255,255,255,0),rgba(255,255,255,.7))] pointer-events-none"></div>
      <div className="layer absolute z-[1] w-full h-full bg-[radial-gradient(ellipse_at_30%_60%,rgba(255,255,255,0),rgba(255,255,255,.4))] pointer-events-none"></div>

      <motion.div
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="layer absolute z-[1] w-full h-full bg-white pointer-events-none"
      ></motion.div>

      {/* searchbar */}
      <div className="search-bar overflow-hidden z-[999] absolute w-[clamp(100px,550px,90vw)] h-[40px] rounded-full bg-white border hover:border-[1.5px] hover:border-gray-600 focus:border-gray-600 duration-200 border-gray-400 top-[10%] left-[50%] translate-x-[-50%]">
        <input
          type="text"
          className="w-full h-full rounded-full px-3 outline-none text-sm"
          placeholder="Enter For Search"
        />
      </div>
      <MapContainer
        style={{
          height: "100vh",
          width: "100%",
          filter: "saturate(.13) brightness(1.1)",
        }}
        center={[21.7537, 78.9629]}
        zoom={5}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        {/* add google map tile url  */}
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
      </MapContainer>
    </div>
  );
};

export default HomeAuth;
