import Image from "next/image";

interface AdvantagesCardProps{
	imageSrc: any;
	altText: string;
	heading: string;
}

const AdvantagesCard: React.FC<AdvantagesCardProps> = ({ imageSrc, altText, heading }) => {
	return(
		<div className='w-142.25 h-61.25 bg-[#121F2380] py-10 px-13 flex flex-col gap-3.75 border-2 border-[#121F2380] drop-shadow-(--box-shadow) rounded-[1.1875rem]'>
			<div className='w-auto h-fit flex gap-7.5 items-center'>
				<Image src={imageSrc} alt={altText} width={75} height={75} className='h-18.75 w-auto'/>
				<h2 className='font-semibold text-3xl/[117%]'>{heading}</h2>
			</div>
			<p className='w-98.25 h-18.75 text-lg/[137%]'>Рассчитываем стоимость производства необходимого вам оборудования в течение нескольких часов после заявки</p>
		</div>
	)
}

export default AdvantagesCard;