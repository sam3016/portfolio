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
          {
            Array.from({ length: 17 }, (v, i) => (
                <div className="flex items-center space-x-4 p-5 w-full" key={i}>
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-20 w-[500px]" />
                </div>
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
        <ScrollToTopButton />
    </>
  )
}