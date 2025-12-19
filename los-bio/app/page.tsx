import Image from "next/image";
import Button from "./components/Button";

//images
import Los from "../public/img/los.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-36.75 pl-33.75">
      <div className="w-262 h-133.25 flex gap-27 mt-20">
        <div className="w-144.25 h-109 flex flex-col gap-7.5 pt-5.75">
          <h1 className="font-bold text-6xl w-[36.0625rem] h-[11.25rem]">
            Автономная канализация для частного дома
          </h1>
          <p className="text-xl w-[26.4375rem] h-[8.6875rem]">
            Производим автономные канализации, очистные сооружения,
            накопительные ёмкости и различные комплектующие к ним.
          </p>
          <Button className="w-[14.875rem] h-[3.5625rem] rounded-xl">
            Перейти в каталог
          </Button>
        </div>
        <Image
          src={Los}
          alt="Los"
          width={363}
          height={482}
          className="w-90.75 h-120.5"
        />
      </div>
    </div>
  );
}
