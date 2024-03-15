import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { certifications } from "../backend/certifications/certifications";

type Data = [{
  id: number;
  name: string;
  image: string;
}]

async function getCertifications() {
  const res = await fetch(`${process.env.HOST}/backend/certifications`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch certifications')
  }

  return res.json()
}

export default function Certification() {
  //const certifications: Data = await getCertifications();
  if (!certifications) return null;

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
              certifications.map((certification, index) => (
                <TableRow key={index}>
                  <TableCell>{certification?.name}</TableCell>
                  <TableCell>
                    <Image
                      src={certification?.image ?? null }
                      width={200}
                      height={200}
                      alt={certification?.name ?? null }
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