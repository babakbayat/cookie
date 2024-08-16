import { Button, Image } from "@nextui-org/react";
import { BiMenu } from "react-icons/bi";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="h-full flex w-full items-center justify-center min-h-screen">
      <div className="flex flex-col relative z-10 max-w-xl w-full mx-auto h-[300px] border border-b-0 border-slate-700/20  rounded-b-2xl">
        <div className="absolute h-full w-full scale-x-95 -bottom-[13px] border border-slate-700/20 -z-30 bg-primary rounded-xl "></div>
        <div className="absolute h-full w-full scale-x-85 -bottom-[23px] border border-slate-700/20 -z-40 bg-primary rounded-xl "></div>
        <div className="h-1/3 bg-default w-full"></div>
        <div className="absolute w-[100px] h-[100px] z-50 rounded-full shadow-xl shadow-default  top-1/3 right-1/2 translate-x-1/2 -translate-y-1/2">
          <Image
            src="/cookie (1).jpg"
            alt="عمو قناد کوکی"
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full  "
          />
        </div>
        <div className="flex flex-col items-center gap-2 justify-center border-b border-slate-700/20  p-4 bg-primary rounded-b-2xl h-2/3">
          <span className="text-2xl font-bold mt-4">شیرینی پزی عمو قناد</span>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
              <Button
                variant="light"
                color="secondary"
                as={Link}
                to="/menu"
                isIconOnly
              >
                <BiMenu size={30} />
              </Button>
              <span className="text-sm">لیست منو</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button
                variant="light"
                className="text-black/70"
                as={Link}
                isIconOnly
              >
                <BsInstagram size={30} />
              </Button>
              <span className="text-sm">پیج اینستاگرام</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Button
                variant="light"
                className="text-black/70"
                as={Link}
                isIconOnly
              >
                <BsTelegram size={30} />
              </Button>
              <span className="text-sm">پیج تلگرام</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
