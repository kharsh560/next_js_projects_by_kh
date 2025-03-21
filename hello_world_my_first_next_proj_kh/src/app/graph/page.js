import React from 'react'

function Graph() {
  return (
    <div className="flex h-screen">
      <div className="min-w-[15vw] p-2 flex flex-col items-center border-2 m-2 rounded-lg">
        
        
      </div>
      <div className="m-2 relative flex h-[98vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-2 bg-background md:shadow-xl">
        <Meteors number={20} />
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

export default Graph