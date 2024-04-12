import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Data = [{
    id: number;
    name: string;
    image: string;
}];

async function getSkills() {
    const res = await fetch(`${process.env.HOST}/backend/skills`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch skills')
    }

    return res.json()
}

export default async function Skills() {
    const skills: Data = await getSkills();
    if (!skills) return (
        <>
            <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Skills</h1>
            <div className="pt-10 flex justify-center items-center h-100">
                <div className="grid grid-cols-4 gap-20">
                {
                        Array.from({ length: 11 }, (v, i) => (
                            <div key={i} className="flex items-center space-x-4 p-5 w-full">
                                <Skeleton className="w-48 h-48" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );

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