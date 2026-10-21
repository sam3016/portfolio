import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

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

export default async function Certification() {
  const certifications: Data = await getCertifications();
  if (!certifications) {
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
                    {Array.from({ length: 17 }, (_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-20 w-full" /></TableCell>
              <TableCell><Skeleton className="h-20 w-[200px] mx-auto" /></TableCell>
            </TableRow>
          ))}
          </TableBody>
          </Table>
      </>
    );
  }

  return (
    <>
        <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Certification</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Certification</TableHead>
              <TableHead className="text-center">Badge</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              certifications.map((certification, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center">{certification?.name}</TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                    <Image
                      src={certification?.image}
                      width={200}
                      height={200}
                      alt={certification.name ?? ""}
                      style={{ width: "auto", height: "auto" }}
                    />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        <ScrollToTopButton />
    </>
  )
}