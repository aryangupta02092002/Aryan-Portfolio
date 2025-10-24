import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-21 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>
                        <p className="text-muted-foreground">
                            With over 2 years of experience in App and Web Development, I specialize in creating
                            responsive, accessible and user centric web and mobile applications using modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about crafting solutions to complex problems, with that I am flexible in learning
                            new technologies and techniques to stay at the forefront of the ever-evolving software environment.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="https://drive.google.com/file/d/1xEPxJQiP5D8eL39Msari11b5NIpFd9_E/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Review and Download CV
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="https://leetcode.com/aryangupta02092002" target="_blank" className="cosmic-button">
                                Leetcode
                            </a>
                            <a href="https://www.codechef.com/users/aryangupta0209" target="_blank" className="cosmic-button">
                                Codechef
                            </a>
                            <a href="https://auth.geeksforgeeks.org/user/aryangupta02092002/profile" target="_blank" className="cosmic-button">
                                GeeksforGeeks
                            </a>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web & Android Development</h4>
                                    <p className="text-muted-foreground">
                                        Developing responsive web apps with React, Node.js, and PostgreSQL, 
                                        and building modern Android applications using Kotlin.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Implementation</h4>
                                    <p className="text-muted-foreground">
                                        Translating design concepts into functional, accessible, and 
                                        visually engaging interfaces that enhance user satisfaction and retention. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">End-to-End Project Delivery</h4>
                                    <p className="text-muted-foreground">
                                        Owning projects from concept to deployment, integrating secure features, 
                                        optimizing, and ensuring timely delivery.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}