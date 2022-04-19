import Education from "../components/education.js";
import General from "../components/general.js"

export default function PersonalPage() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
    return (
      <>
        <Education prefix={prefix}/>
        <General prefix={prefix}></General>
      </>
    )
  }