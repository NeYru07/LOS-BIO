"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function humanize(segment: string) {
    const s = segment.replace(/[-_]/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const translations: Record<string, string> = {
    aboutcompany: "О компании",
    catalog: "Каталог",
    contacts: "Контакты",
    projects: "Проекты",
    mine: "АО «Васильевский рудник»",
};

export default function Breadcrumb() {
    const pathname = usePathname() ?? "/";
    if (pathname === "/" || !pathname) return null;

    const parts = pathname.split("/").filter(Boolean);
    let acc = "";

    return(
        <nav className="w-100% flex justify-start ml-33.75 bg-transparent" aria-label="breadcrumb">
            <ol className="flex items-center gap-3.5 list-none m-0 p-0 text-[0.875rem] font-medium text-white">
                <li className="inline-flex items-center gap-3.5 hover:text-[#1078D7]">
                    <Link href="/">Главная</Link>
                </li>
                {parts.map((part, idx) => {
                    acc += "/" + part;
                    const isList = idx === parts.length - 1;
                    const raw = decodeURIComponent(part).toLowerCase();
                    const label = translations[raw] ?? humanize(raw);
                    return (
                        <li key={acc} className="inline-flex items-center gap-3.5 hover:text-[#1078D7]">
                            <span className="text-[0.875rem] ml-1 mr-1 text-[#1078D7]">•</span>
                            {isList ? (
                                <span className="text-[#FFFFFF21] font-medium cursor-default">{label}</span>
                            ) : (
                                <Link href={acc}>{label}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}