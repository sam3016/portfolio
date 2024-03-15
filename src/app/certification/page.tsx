import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import ccexpert from "../../../public/certification/app-developer-for-claris-connect-expert.png";
import fmps from "../../../public/certification/app-developer-for-claris-filemaker-pro-specialist.png";
import fmsa from "../../../public/certification/claris-filemaker-server-administrator-associate.png";
import ccs from "../../../public/certification/app-developer-for-claris-connect-specialist.png";
import fmpa from "../../../public/certification/app-developer-for-claris-filemaker-pro-associate.png";
import cca from "../../../public/certification/app-developer-for-claris-connect-associate.png";
import tsa from "../../../public/certification/tableau-server-certified-associate.png";
import da from "../../../public/certification/tableau-certified-data-analyst.1.png";
import tcc from "../../../public/certification/tableau-certified-consultant.1.png";
import az900 from "../../../public/certification/microsoft-certified-azure-fundamentals.png";
import defmp from "../../../public/certification/developer-essentials-for-claris-filemaker.png";
import fm17 from "../../../public/certification/fm_17.png";
import fm16 from "../../../public/certification/certified_16_logo_4clr.jpg";
import fm18 from "../../../public/certification/certified_18_logo_rev.png";
import fm2020 from "../../../public/certification/Claris-Developer-Badge-White.png";

function certification() {
  const data = [
    {
        "name": "FileMaker16: Developer Essentials for FileMaker 16",
        "image": fm16
    },
    {
      "name": "FileMaker17: Developer Essentials for FileMaker 17",
      "image": fm17
    },
    {
      "name": "FileMaker18: Developer Essentials for FileMaker 18",
      "image": fm18
    },
    {
      "name": "FileMaker2020: Developer Essentials for Claris FileMaker",
      "image": fm2020
    },
    {
      "name": "Developer Essentials for Claris FileMaker",
      "image": defmp
    },
    {
      "name": "App Developer for Claris FileMaker Pro Associate",
      "image": fmpa
    },
    {
      "name": "App Developer for Claris Pro Specialist",
      "image": fmps
    },
    {
      "name": "App Developer for Claris Connect Specialist",
      "image": ccs
    },
    {
      "name": "Claris FileMaker Server Administrator Associate",
      "image": fmsa
    },
    {
      "name": "App Developer for Claris Connect Expert",
      "image": ccexpert
    },
    {
      "name": "App Developer for Claris Connect Associate",
      "image": cca
    },
    {
      "name": "Salesforce Certified Administrator (SCA)",
      "image": ""
    },
    {
      "name": "Tableau Certified Data Analyst",
      "image": da
    },
    {
      "name": "Tableau Server Certified Associate",
      "image": tsa
    },
    {
      "name": "Tableau Certified Associate Consultant",
      "image": tcc
    },
    ,
    {
      "name": "Microsoft Certified: Azure Fundamentals",
      "image": az900
    }
];

  return (
    <>
        <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Certification</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Certification</TableHead>
              <TableHead>Badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              data.map((skill, index) => (
                <TableRow key={index}>
                  <TableCell>{skill?.name}</TableCell>
                  <TableCell>
                    <Image
                      src={skill?.image ?? "" }
                      width={200}
                      height={200}
                      alt={skill?.name ?? "" }
                    />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
    </>
  )
}

export default certification