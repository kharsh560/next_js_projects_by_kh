export default function ProjectDetails({params}) {
    return (
      <div>
        <h1 className=" font-bold text-6xl ">Project {params.projectId}</h1>
      </div>
    );
}