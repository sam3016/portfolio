import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import cloudsign from "../../../public/projects/cloudsign.png";
import biztel from "../../../public/projects/BizTel.png";
import media4u from "../../../public/projects/media4u.png";
import student from "../../../public/projects/student.png";
import contract from "../../../public/projects/ContractManagement.png";
import Image from "next/image";

function work() {
  const data = [
    {
        "title": "CloudSign",
        "content": "Integration Web Services to existing FileMaker systems so that contracts could be exchanged between clients efficiently.",
        "image": cloudsign,
        "video": "",
        "github": "",
        "categories": ["FileMaker", "Web API"]
    },
    {
        "title": "SMS",
        "content": "Send SMS messages from existing FileMaker systems.",
        "image": media4u,
        "video": "",
        "github": "",
        "categories": ["FileMaker", "Web API"]
    },
    {
        "title": "Physical Status Confirmation System",
        "content": "Confirmation of the physical status of customers through automatic phone-call system.",
        "image": biztel,
        "video": "",
        "github": "",
        "categories": ["FileMaker", "Web API"]
    },
    {
        "title": "CLI for FileMaker Web Widget Development",
        "content": "Develop web widget in FileMaker more efficiently using React, TypeScript and Tailwind CSS.",
        "image": "",
        "video": "",
        "github": "https://www.npmjs.com/package/fmwebapp",
        "categories": ["TypeScript"]
    },
    {
        "title": "Temperature Monitoring",
        "content": "Using Next.js as Front-End, FileMaker OData API as backend system to track body temperature changes.",
        "image": "",
        "video": "https://vimeo.com/777979227?share=copy",
        "github": "",
        "categories": ["FileMaker", "TypeScript", "Next.js", "React"]
    },
    {
      "title": "Temperature Monitoring",
      "content": "Using Swift as Front-End, FileMaker Data API as backend system to track body temperature changes.",
      "image": "",
      "video": "https://vimeo.com/901521439?share=copy",
      "github": "",
      "categories": ["FileMaker", "Swift"]
  },
    {
        "title": "Item Management",
        "content": "Management of the usage of items, estimate the next finished date.",
        "image": "",
        "video": "https://vimeo.com/901521439?share=copy",
        "github": "",
        "categories": ["Swift"]
    },
    {
        "title": "Coupon Management",
        "content": "Management of the expiry date of coupons.",
        "image": "",
        "video": "",
        "github": "",
        "categories": ["Swift"]
    },
    {
        "title": "Temperature Tracking",
        "content": "Track the body temperature change.",
        "image": "",
        "video": "https://vimeo.com/901522625?share=copy",
        "github": "",
        "categories": ["Swift"]
    },
    {
        "title": "Expiry Date Management",
        "content": "Management of the expiry date of items.",
        "image": "",
        "video": "https://vimeo.com/901522589?share=copy",
        "github": "",
        "categories": ["Swift"]
    },
    {
        "title": "Usage Management",
        "content": "Management of usages of electricity, water and gas.",
        "image": "",
        "video": "https://vimeo.com/901522672?share=copy",
        "github": "",
        "categories": ["Swift"]
    },
    {
      "title": "Ultimate Portfolio",
      "content": "Portfolio Application based on SwiftUI",
      "image": "",
      "video": "",
      "github": "",
      "categories": ["Swift"]
  },
    {
        "title": "Send Log Data to MongoDB",
        "content": "Node.js Web Service to pass log data from FileMaker to MongoDB.",
        "image": "",
        "video": "",
        "github": "",
        "categories": ["Node.js", "MongoDB"]
    },
    {
        "title": "JavaScript Add-on",
        "content": "JavaScript based add-on in FileMaker(Calendar, Sketch, Kanban, DataTables, etc.)",
        "image": "",
        "video": "",
        "github": "",
        "categories": ["FileMaker", "React"]
    },{
        "title": "Recruiting System",
        "content": "A system to manage client, candidate, application, job, interview, invoice in a recruiting company.",
        "image": "",
        "video": "",
        "github": "",
        "categories": ["FileMaker"]
    },
    ,{
      "title": "Student Management System",
      "content": "A system to manage students'contracts, the payment tracking and summary within a year.",
      "image": student,
      "video": "",
      "github": "",
      "categories": ["FileMaker"]
    },
    {
      "title": "Contract Management System",
      "content": "A system to manage students, their test scores, school selection and tour schedule.",
      "image": contract,
      "video": "",
      "github": "",
      "categories": ["FileMaker"]
    }
  ]

  return (
    <>
      <h1 className="p-4 mt-4 text-4xl text-center font-semibold mb-6">My Works</h1>
      <div className="lg:grid grid-cols-3 gap-10">
        {
          data.map((item, index) => (
            <div className="p-1" key={index}>
              <Card className="h-[350px] min-w-4">
                <CardHeader>
                  <CardTitle className="text-center">{item?.title}</CardTitle>
                  { !item?.image ? "" : (
                  <div className="flex flex-row justify-center pt-3">
                    <Image 
                      src={item.image}
                      width={200}
                      height={200}
                      alt={item?.title}
                    />
                  </div>
                  
                )}
                </CardHeader>
                <CardContent className="grid gap-4">
                  <p className="flex-1 space-y-1">{item?.content}</p>
                  {!item?.github ? "" : (
                    <div className="flex flex-col-1">
                    <span>
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                    </svg>
                    </span>
                    <Link href={item.github} className="flex-1 space-y-1 italic">
                      {item.github}
                    </Link>
                    </div>
                  )}
                  {!item?.video ? "" : (
                    <div className="flex flex-col-1">
                    <span>
                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <Link href={item.video} className="flex-1 space-y-1 italic">
                      {item.video}
                    </Link>
                  </div> 
                  )}
                </CardContent>
                <div className="pl-5">
                { (item?.categories !== undefined && item?.categories?.length > 0) ? (
                    item?.categories.map((category, index) => (
                        <Badge variant="secondary" className="rounded-full text-sm font-semibold text-gray-700 mr-2" key={index}>{category}</Badge>
                    ))
                ) : ""}
                </div>
              </Card>
            </div>
          ))
        }
      </div>
    </>
    
  )
}

export default work;