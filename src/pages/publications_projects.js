import Publications from "../components/publications.js";
import Projects from "../components/projects.js";

export default function PublicationsProjects() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
    return (
      <>
        <Publications prefix={prefix}/>
        <Projects prefix={prefix}/>
      </>
    )
  }
  