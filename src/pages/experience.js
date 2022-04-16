import Experiences from "../components/experiences.js";

export default function ExperiencePage() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
    return (
      <>
        <Experiences prefix={prefix}/>
      </>
    )
  }