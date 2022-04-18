import Education from "../components/education.js";

export default function PersonalPage() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
    return (
      <>
        <Education prefix={prefix}/>
      </>
    )
  }