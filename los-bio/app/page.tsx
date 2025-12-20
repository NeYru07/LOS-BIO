import Image from "next/image";
import Button from "./components/Button";
import AdvantagesCard from "./components/AdvantagesCard";
import ProjectCard from "./components/ProjectCard";

//images
import Los from "../public/img/los.png";
import Calculat from "../public/svg/calculat.svg";
import Production from "../public/svg/production.svg";
import XP from "../public/svg/xp.svg";
import Plan from "../public/svg/plan.svg";
import ProjectImg1 from "../public/img/project1.jpg"
import ProjectImg2 from "../public/img/project2.jpg"
import ProjectImg3 from "../public/img/project3.jpg"

export default function Home() {
  const card1 = {
    imageSrc: Calculat,
    altText: "Calculat",
    heading: "Оперативность расчётов",
  };
  return (
    <div className="flex flex-col gap-36.75 pl-33.75">
      {/* Первый блок */}
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
      {/* Второй блок */}
      <div className="w-auto h-fit flex flex-col gap-20 pr-33.75">
        <h1 className="H1">Наши преимущества</h1>
        <div className="w-auto h-fit flex flex-wrap gap-8 pr-33.75">
          <AdvantagesCard
            imageSrc={card1.imageSrc}
            altText={card1.altText}
            heading={card1.heading}
          />
          <AdvantagesCard
            imageSrc={Production}
            altText="Production"
            heading="Производство полного цикла"
          />
          <AdvantagesCard
            imageSrc={XP}
            altText="Experiencs"
            heading="Большой опыт работы"
          />
          <AdvantagesCard
            imageSrc={Plan}
            altText="Plan"
            heading="Полное 
соответствие чертежам"
          />
        </div>
      </div>
		{/* Третий блок */}
		<div className='w-auto h-fit flex flex-col gap-22.25'>
			<h1 className='H1'>Проекты</h1>
			<div className='w-auto h-fit flex flex-wrap gap-5'>
				<ProjectCard imageSrc={ProjectImg1} altText="ProjectImg1" heading="Проект 1"/>
				<ProjectCard imageSrc={ProjectImg2} altText="ProjectImg2" heading="Проект 2"/>
				<ProjectCard imageSrc={ProjectImg3} altText="ProjectImg3" heading="Проект 3"/>
			</div>
		</div>
    </div>
  );
}
