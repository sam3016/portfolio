import Image from "next/image";
import { skills } from "../backend/skills/skills";

type Data = [{
    id: number;
    name: string;
    image: string;
}]

async function getSkills() {
    const res = await fetch(process.env.HOST + `/backend/skills`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch skills')
    }

    return res.json()
}

export default async function Skills() {
    //const skills: Data = await getSkills();

    return (
        <>
            <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Skills</h1>
            <div className="pt-10 flex justify-center items-center h-100">
                <div className="grid grid-cols-4 gap-20">
                    {
                        skills.map((skill, index) => (
                            <Image 
                                src={skill.image}
                                width={100}
                                height={100}
                                alt={skill.name}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}