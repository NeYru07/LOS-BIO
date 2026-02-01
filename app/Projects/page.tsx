"use client"
import Button from "../components/Button"
import Link from "next/link"

export default function Projects() {
	return(
		<div>
			<h1 className="page-name">Cтраница: Проекты</h1>
			<Button className="w-max pl-2.5 pr-2.5 ml-33.75"><Link href="\Projects\Mine">Перейти: Васильевская шахта</Link></Button>
		</div>
	)
}