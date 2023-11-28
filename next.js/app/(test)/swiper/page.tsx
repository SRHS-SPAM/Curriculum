import Image from "next/image";
import Carousel from "../_component/carousel";

export default function Page() {
  return (
    <div className="flex justify-center items-center">
      <Carousel
        options={{
          align: "start",
          loop: true,
          skipSnaps: false,
          inViewThreshold: 0.7,
        }}
        slides={[
          <Image key={0} src={"/images/배너1.png"} alt="배너1" layout="fill" />,
          <div key={1}>slide 2</div>,
        ]}
      ></Carousel>
    </div>
  );
}
