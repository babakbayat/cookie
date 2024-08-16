import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="min-h-screen px-4 flex justify-center ">
      <div className="flex flex-col gap-2 mt-20 max-w-lg  w-full mx-auto  p-3">
        <div className="">
          <Breadcrumbs dir="ltr">
            <BreadcrumbItem>
              <Link to="/">خانه</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">منو</Link>
            </BreadcrumbItem>
          </Breadcrumbs>
          <div className="text-center text-2xl font-bold text-secondary">
            لیست منو
          </div>
        </div>
        <Card isPressable>
          <CardBody className="flex flex-col gap-2 justify-center items-center ">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full  h-[100px] object-cover"
              src="/cookie1.jpg"
              width={200}
            />
            <p className="text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between gap-4 w-full items-center">
              <span className="flex gap-2 items-center">
                قیمت
                <ImPriceTag size={24} className="text-primary" />
              </span>
              <span>{Number(200000).toLocaleString("fa-IR")} تومان</span>
            </div>
          </CardFooter>
        </Card>
        <Card isPressable>
          <CardBody className="flex flex-col gap-2 justify-center items-center">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[100px]  object-cover"
              src="/cookie2.jpg"
              width={200}
            />
            <p className="text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between gap-4 w-full items-center">
              <span className="flex gap-2 items-center">
                قیمت
                <ImPriceTag size={24} className="text-primary" />
              </span>
              <span>{Number(200000).toLocaleString("fa-IR")} تومان</span>
            </div>
          </CardFooter>
        </Card>
        <Card isPressable>
          <CardBody className="flex flex-col gap-2 justify-center items-center">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[100px] object-cover"
              src="/cookie3.jpg"
              width={200}
            />
            <p className="text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between gap-4 w-full items-center">
              <span className="flex gap-2 items-center">
                قیمت
                <ImPriceTag size={24} className="text-primary" />
              </span>
              <span>{Number(200000).toLocaleString("fa-IR")} تومان</span>
            </div>
          </CardFooter>
        </Card>
        <Card isPressable>
          <CardBody className="flex flex-col gap-2 justify-center items-center">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[100px] object-cover"
              src="/cookie4.jpg"
              width={200}
            />
            <p className="text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between gap-4 w-full items-center">
              <span className="flex gap-2 items-center">
                قیمت
                <ImPriceTag size={24} className="text-primary" />
              </span>
              <span>{Number(200000).toLocaleString("fa-IR")} تومان</span>
            </div>
          </CardFooter>
        </Card>
        <Card isPressable>
          <CardBody className="flex flex-col gap-2 justify-center items-center">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-[100px] object-cover"
              src="/cookie5.jpg"
              width={200}
            />
            <p className="text-xs text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between gap-4 w-full items-center">
              <span className="flex gap-2 items-center">
                قیمت
                <ImPriceTag size={24} className="text-primary" />
              </span>
              <span>{Number(200000).toLocaleString("fa-IR")} تومان</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
