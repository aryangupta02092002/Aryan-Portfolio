import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "Project on the development of portfolio. This app showcases your personal and professional details including skills, projects, experience, and contact info – all in one place.",
        image: "/projects/Portfolio.jpeg",
        tags: ["Kotlin", "MVVM", "Fragments"],
        demoUrl: "#",
        githubUrl: "https://github.com/aryangupta02092002/Portfolio",
    },
    {
        id: 2,
        title: "Noteskeeper: Notes Application",
        description:
        "Keeping all the notes, and changing the colour of the existing and newly added notes in particular intervals. Used RoomDB for keeping the notes in local storage.",
        image: "/projects/Noteskeeper.jpeg",
        tags: ["Kotlin", "RoomDB", "MVVM"],
        demoUrl: "#",
        githubUrl: "https://github.com/aryangupta02092002/NotesKeeper",
    },
    {
        id: 3,
        title: "Us: Chatting Web Application",
        description:
        "User Authentication, sending a message with timestamp, emojis, user profile update, interactive navigation bar, among others. Utilizes Socket.io for real-time chat functionality.",
        image: "/projects/Us_chatting.png",
        tags: ["ReactJS", "Node.js", "ExpressJS", "CSS", "MongoDB", "MaterialUI", "Firebase", "Socket.io"],
        demoUrl: "#",
        githubUrl: "https://github.com/aryangupta02092002/Us-Chatting-Site",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Showcasing some of my recent work — thoughtfully engineered with attention to detail, high performance, and seamless user interaction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mt-4 mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span 
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                                {tag}
                                        </span>
                                    ))}
                                </div>    
                            

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 items-center">
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/aryangupta02092002">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};