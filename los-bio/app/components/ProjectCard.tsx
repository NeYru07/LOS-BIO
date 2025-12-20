import Image from "next/image";

interface ProjectCardProps {
  imageSrc: any;
  altText: string;
  heading: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  heading,
}) => {
  return (
    <div className="w-94.25 h-fit bg-[#1215237D] p-9.5 flex flex-col gap-7 border border-(--gradient-border) rounded-[1.1875rem]">
      <Image
        src={imageSrc}
        alt={altText}
        width={301}
        height={208}
        className="h-52 w-75.25 rounded-xl"
      />
      <h2 className="font-semibold text-2xl/[117%]">{heading}</h2>
      <div className="w-full h-fit flex flex-col gap-4.25 [&_p]:text-base/[148%] [&_p]:w-fit [&_p]:font-medium [&_span]:font-normal [&_span]:text-[#FFFFFF4A]">
        <h3 className="w-fit text-lg/[137%]">
          Mauris varius sem lacinia felis pellentesque. Maecenas vulputate
          tortor mattis consectetur.
        </h3>
        <div className="line"></div>
        <p>
          <span>Тип работы:</span> Строительство станции биологической очистки
        </p>
        <div className="line"></div>
        <p>
          <span>Тип работы:</span> Строительство станции биологической очистки
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
