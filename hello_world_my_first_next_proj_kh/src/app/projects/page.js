export default function Projects() {
    return (
      <div>
        <h1 className=" font-bold text-6xl ">Projects:-</h1>
        <h3 className="p-2 bg-orange-400 w-fit rounded-lg m-2">Project 1</h3>
        <h3 className="p-2 bg-orange-400 w-fit rounded-lg m-2">Project 2</h3>
        <h3 className="p-2 bg-orange-400 w-fit rounded-lg m-2">Project 3</h3>
        <h3 className="p-2 bg-orange-400 w-fit rounded-lg m-2">Project 4</h3>
        <h3 className="p-2 bg-orange-400 w-fit rounded-lg m-2">Project 5</h3>
      </div>
    );
}


/*
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { auth } from "@/auth";
import axios from "axios";
import UserSessionToSlice from "./userSessionToSlice.js"
import Projects from "./projects/page.js";
import {getSession} from "next-auth/react";


export default async function Home() {
  const session = await auth();
  // console.log("Frontend Session: ",session);

  // const session = await getSession();

  

  //  if (session?.user?.id) {
  //    // Check if user ID exists
  //    try {
  //      const response = await axios.post(
  //        "https://your-express-backend.com/api/verify-token",
  //        null,
  //        {
  //          headers: {
  //            Authorization: `Bearer ${session?.session-token}`, // Use the JWT token
  //          },
  //        }
  //      );
  //      console.log("Backend response:", response.data);
  //    } catch (error) {
  //      console.error("Error sending token to backend:", error);
  //    }
  //  }

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <main className="grow flex items-center justify-center bg-red-800">
        <Card className="max-w-sm">
          <CardHeader>
            <Image
              className="rounded-lg"
              src="https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="img"
              width={500}
              height={500}
              priority
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2 text-2xl font-bold">
              Welcome, {session?.user?.name}!
            </CardTitle>
            <p className="text-muted-foreground">
              Welcome back to the page of totality.ai. I am happy to see you.
              This is a example of a server component to load the session
            </p>
          </CardContent>
        </Card>
      </main>
 
    </div>
  );
}


// "use client";

// import { useSession } from "next-auth/react";

// const AppBar = () => {
//  const { data: session, status } = useSession();
//   console.log("Session: ",{session });

//   const accessToken = session?.user?.accessToken;
//   console.log("Access Token: ", accessToken);

//   return <div className="mt-20">hiii</div>;
// };

// export default AppBar;

*/