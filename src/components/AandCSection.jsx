import { ExternalLink } from "lucide-react";
import { useState } from "react";

const achievements = [
  "Ranked in the top 15% globally on LeetCode with a 1600+ rating",
  "Secured 5th position for overall academic performance 2020-2021",
  "Advanced to Round 1 in Google CodeJam 2021, 2022",
  "Secured Global Rank of 8229 at Google KickStart 2021",
  "August Long Challenge 2021, Global Rank 609",
  "Successfully merged multiple pull requests in GitHub repository having issues labelled Hacktoberfest 2020, 2022",
];

const certifications = [
  {
    title: "SAP Backend Developer - ABAP Cloud",
    description: "Certified SAP ABAP on HANA developer",
    certicateURL: "https://drive.google.com/file/d/1XC_ClCLgGgSyVJbaC1CF8lgs7xgHUkr-/view?usp=sharing", // certificate image
  },
  {
    title: "Java Advanced / Spring",
    description:
      "Courses on Spring Framework by Cognizant Digital Nurture 2.0 through Udemy",
    certicateURL: "https://drive.google.com/drive/folders/1kCxLLJKjvVDaqtpAz6a3EZcg_UKpN47P?usp=sharing", // certificate image
  },
];

export const AandCSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="achievementsandcertificates" className="px-4 py-24 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Achievements <span className="text-primary"> & </span> Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Achievements */}
          <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
            <h3 className="text-xl font-semibold mt-4 mb-6">
              🚀 Achievements
            </h3>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-3 mb-4">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold mt-4 mb-6">📜 Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-card rounded-lg p-4 shadow hover:shadow-lg transition card-hover"
                    >
                        <a
                        href={cert.certicateURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition"
                        >
                        <ExternalLink />
                        {cert.title}
                        </a>
                        <p className="text-muted-foreground text-sm mt-2">{cert.description}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
}