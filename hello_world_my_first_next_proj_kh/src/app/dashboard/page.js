import React from 'react'
import Meteors from "@/components/ui/meteors";
import ShineBorder from "@/components/ui/shine-border";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";



function Dashboard() {
    const sideBarButtons = ["Home", "My Apps", "My Developments", "Other Features"]
    const projects = [
  {
    projectTitle: "Smart Home Automation",
    projectDescription: "A system that integrates IoT devices for remotely controlling lights, thermostat, and security cameras via a mobile app."
  },
  {
    projectTitle: "E-commerce Web Platform",
    projectDescription: "An online shopping platform with features like product search, secure payment, order tracking, and user reviews."
  },
  {
    projectTitle: "Personal Finance Tracker",
    projectDescription: "An app that allows users to track expenses, set budgets, and visualize spending trends with charts and analytics."
  },
  {
    projectTitle: "AI Chatbot for Customer Service",
    projectDescription: "A conversational chatbot powered by NLP, designed to handle customer inquiries, complaints, and FAQs for businesses."
  },
  {
    projectTitle: "Health Monitoring Wearable",
    projectDescription: "A wearable device to track vital signs such as heart rate, blood pressure, and physical activity, with alerts for irregularities."
  },
  {
    projectTitle: "Real-time Weather Dashboard",
    projectDescription: "A web app that provides real-time weather updates, forecasts, and alerts for different locations using an external API."
  },
  {
    projectTitle: "Educational Quiz Platform",
    projectDescription: "An interactive platform for creating and taking quizzes on various topics, with scoring and progress tracking for users."
  },
  {
    projectTitle: "Blockchain-based Voting System",
    projectDescription: "A secure voting platform leveraging blockchain to ensure transparency, tamper-proof records, and voter anonymity."
  },
  {
    projectTitle: "AR-Based Interior Design Tool",
    projectDescription: "An augmented reality app that helps users visualize and design room layouts by placing virtual furniture in real-world spaces."
  },
  {
    projectTitle: "Recipe Recommendation App",
    projectDescription: "A mobile app that suggests recipes based on available ingredients, dietary preferences, and popular cuisine trends."
  }
];

  return (
    <div className="flex h-screen">
      <div className="min-w-[15vw] p-2 flex flex-col items-center border-2 m-2 rounded-lg">
        <Sheet>
          <SheetTrigger>
            <ShineBorder
              className="p-8 m-2 relative flex min-w-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background "
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <button className=" text-xl font-semibold">Switch Org</button>
              <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
                height={800}
                width={800}
              />
            </ShineBorder>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Select>
                <SelectTrigger className="min-w-36">
                  <SelectValue placeholder="Select your organization." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Microsoft</SelectItem>
                    <SelectItem value="blueberry">Amazon</SelectItem>
                    <SelectItem value="grapes">PWC</SelectItem>
                    <SelectItem value="pineapple">Black Rock</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        {sideBarButtons.map((eachButton) => (
          <ShineBorder
            className="m-2 relative flex min-w-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background "
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            key={eachButton}
          >
            <button>{eachButton}</button>
          </ShineBorder>
        ))}
      </div>
      <div className="m-2 relative flex h-[98vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 bg-background md:shadow-xl">
        {/* <Meteors number={20} /> */}
        <span className="p-3 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 overflow-y-auto h-[70vh]">
          {projects.map((IndvProject) => (
            <div
              key={IndvProject.projectTitle}
              className="relative flex flex-col min-h-[400px] max-w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
            >
              <p className="p-2 z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white">
                <span className=" text-zinc-500 font-semibold mr-2">
                  Project Title:
                </span>
                {IndvProject.projectTitle}
              </p>
              <p className="p-2 z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white">
                <span className=" text-zinc-500 font-semibold mr-2">
                  Project Description:
                </span>
                {IndvProject.projectDescription}
              </p>
              <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                  "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                  "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard


