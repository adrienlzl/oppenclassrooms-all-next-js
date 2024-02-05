import Image from "next/image";
import {useGetAllProjectsList} from "@/queries/projectsList";
import Link from "next/link";

export default async function Home() {

const projects = useGetAllProjectsList();

    return (
        <main className={"bg-red-600"}>
            <h1>Bienvenue sur mes projets OpenClassrooms</h1>
            <h2>Liste des projets</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <Link href={project.href}>
                            <Image src={project.image} alt={project.name} width={200} height={200} />
                    </Link>
                </div>
            ))}
        </main>
    );
}