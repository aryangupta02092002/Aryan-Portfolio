import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import {cn} from "@/lib/utils";
import {useToast} from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            setIsSubmitting(true);

            setTimeout(() => {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for your message. I'll get back to you as soon as possible"
                });
                setIsSubmitting(false);
            }, 1500)

            setFormData({name: "", email: "", message: ""})
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
        
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I am open for learning and discussing new technologies or projects. 
                    Have something in mind and want to collaborate? Feel free to reach out.
                    I am open for new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a href="mailto:aryangupta02092002@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        aryangupta02092002@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a href="tel:+917908713743" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 (790) 871-3743
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Asansol, W.B., India
                                    </a>
                                </div>
                            </div>
                        </div> 

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/aryan-gupta-1bb108192/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/the_aryan_gupta?igsh=MWhnY3B0MmZ6N2Q2cg==" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com/share/1DrE1AGqA9/" target="_blank">
                                    <Facebook />
                                </a>
                                <a href="https://x.com/the_aryan__g?t=DlTxKrBr2b2ltpatD_VdaQ&s=09" target="_blank">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "}Your Name </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Aryan Gupta"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> {" "}Your Email </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="abc@mail.com"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> {" "}Your Message </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    value={formData.message}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hi! I'd like to talk about."
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    />
                            </div>

                            <button disabled={isSubmitting} type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};