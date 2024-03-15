import Image from "next/image";
import aws from "../../../public/skills/aws.png";
import css from "../../../public/skills/css.png";
import firebase from "../../../public/skills/firebase.png";
import github from "../../../public/skills/github.png";
import html from "../../../public/skills/html.png";
import javascript from "../../../public/skills/javascript.png";
import mongo from "../../../public/skills/mongo.png";
import nextjs from "../../../public/skills/nextjs.png";
import node from "../../../public/skills/node.png";
import tailwind from "../../../public/skills/tailwind.png";
import react from "../../../public/skills/react.png";

type Data = [{
    id: number;
    name: string;
    image: string;
}]

const data = [
    {
        "name": "html",
        "image": html
    },
    {
        "name": "css",
        "image": css
    },
    {
        "name": "javascript",
        "image": javascript
    },
    {
        "name": "react",
        "image": react
    },
    {
        "name": "nextjs",
        "image": nextjs
    },
    {
        "name": "tailwind",
        "image": tailwind
    },
    {
        "name": "github",
        "image": github
    },
    {
        "name": "node",
        "image": node
    },
    {
        "name": "mongo",
        "image": mongo
    },
    {
        "name": "aws",
        "image": aws
    },
    {
        "name": "firebase",
        "image": firebase
    }
];

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
    const skills = data;

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