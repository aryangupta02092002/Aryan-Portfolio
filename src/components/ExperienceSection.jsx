import { Github } from "lucide-react";

const experience = [
    {
        id: 1,
        jobRole: "Application Developer",
        companyName: "IBM India Pvt Ltd",
        location: "Bhubaneswar, India",
        date: "Feb 2024 - Present",
        description1: "Tools: Used SAP ABAP, ABAP on HANA, OOPS, CDS",
        description2: "Worked as a certified SAP ABAP developer on the ECC to S/4 HANA migration project with the Central Custom Development team",
        description3: "Involved various activities in S4 Conversion projects which includes Code remediation, RUTMSJOB, SUMTOOLBOX, SPAU/SPDD",
        description4: "Worked as SPOC for ECC -> S4 project conversion. Successfully completed all assigned development and remediation tasks and received appreciation",
        description5: "Optimized and modernized custom ABAP code for compatibility with S/4 HANA, enhancing overall performance and processing speed",
        description6: "Received appreciation for independently delivering high-quality technical solutions that ensured timely project success",
        image: "/projects/ibm_logo.jpg",
        appreciationCert: "/projects/IBM_Certificate.jpeg",
        jobUrl: "https://www.ibm.com/in-en",
    },
    {
        id: 2,
        jobRole: "Software Developer",
        companyName: "Weptex Technology",
        location: "Kolkata, India",
        date: "July 2023 - Feb 2024",
        description1: "Tools: Used React, Angular, Streamlit, Flask as techstack",
        description2: "Developed a robust web-based chatbot application using Streamlit, featuring user authentication (including login, signup, and forgot password with security questions), real-time messaging, secure file and folder sharing (utilizing Tkinter), zip compression capabilities, copying bot responses, and the ability for users to download conversations in PDF format. Delivered a seamless and secure user experience, enhancing overall functionality and user engagement",
        description3: "Led the development of a dynamic web-based Healthcare Management User Interface (UI) using React JS, CSS, and Bootstrap. This project involved crafting a responsive and user-friendly interface, streamlining data management, and improving the overall user experience",
        description4: "Crafted a dynamic ETL website UI using React JS, CSS, and Bootstrap, enhancing data processing and user interaction. Harnessing the power of PostgreSQL alongside Express, and Node JS for robust backend operations, data management, and seamless user experience",
        description5: "Developed end-to-end Flask backend which seamlessly integrates with an Angular frontend, it also effectively handles URI requests validation",
        image: "/projects/weptex_logo.jpg",
        jobUrl: "https://weptex.tech/",
    },
    {
        id: 3,
        jobRole: "Software Engineer Intern (Android)",
        companyName: "Bobble AI",
        location: "Gurgaon, India",
        date: "June 2022 - Feb 2023",
        description1: "Tools: Used Java, Kotlin as techstack, and MVVM and TDD for development",
        description2: "Reduced the beam value which in turn reduced the latency by 96% for word suggestion while in typing state in Mint Keyboard",
        description3: "Reduced the janks for story sharing and saving feature using Glide from 35% to 4.98% frames",
        description4: "Created container registry for Docker, build and pushed the image",
        description5: "Responsible for developing a POC on server-driven UI using Jetpack compose end-to-end and API parsing in suggestions",
        image: "/projects/bobble_logo.png",
        jobUrl: "https://www.bobble.ai/en/home",
    },
]

export const ExperienceSection = () => {
    return (
        <section id= "experience" className="py-24 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Professional<span className="text-primary"> Path</span></h2>
                
                <div className="space-y-10 p-6">
                {experience.map((exp) => (
                    <div
                    key={exp.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                    {/* Top Row: Logo & Job Info */}
                    <div className="flex flex-col text-center items-center gap-4 mb-2">
                        <img
                        src={exp.image}
                        alt={`${exp.companyName} logo`}
                        className="w-30 h-20 object-contain mt-3"
                        />
                        <div>
                        <h3 className="text-xl font-semibold">{exp.jobRole}</h3>
                        <a
                            href={exp.jobUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            {exp.companyName}
                        </a>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                        <p className="text-gray-400 text-sm">{exp.date}</p>
                        </div>
                    </div>

                    {/* Job Descriptions */}
                    <ul className="list-disc list-inside text-muted-foreground text-sm mb-3 space-y-1 text">
                        {[
                        exp.description1,
                        exp.description2,
                        exp.description3,
                        exp.description4,
                        exp.description5,
                        ]
                        .filter(Boolean)
                        .map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>

                    {/* Appreciation Certificate (only if available) */}
                    {exp.appreciationCert && (
                        <div className="mt-4 flex flex-col items-center">
                        <h4 className="text-md font-semibold mb-2 text-center">
                            Appreciation Certificate
                        </h4>
                        <img
                            src={exp.appreciationCert}
                            alt="Appreciation Certificate"
                            // className="rounded-lg shadow-md max-w-md border mb-4 card-hover"
                            className="rounded-lg shadow-md max-w-md border mt-4 mb-4 card-hover w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        </div>
                    )}
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};