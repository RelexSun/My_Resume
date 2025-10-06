"use client";

import ContentSection from "@/components/custom/content-sec";
import ListItem from "@/components/custom/list-item";
import SideCardItem from "@/components/custom/side-card";
import { ArrowUp, Download, Github, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import sun from "../../public/sun.jpg";
import ContentReference from "@/components/custom/content-reference";
import ContentTraining from "@/components/custom/content-traning";
import ContentList from "@/components/custom/content-list";
import { usePDF } from "react-to-pdf";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showFloatButton, setShowFloatButton] = useState(false);
  const { toPDF, targetRef } = usePDF({ filename: "Nop_Relexsun.pdf" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFloatButton(true);
      } else {
        setShowFloatButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFloatButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <div className=" bg-[#eaeffc] min-h-screen max-w-full p-2 md:p-5 lg:p-10">
        <main
          className="max-w-[1200px] flex flex-col md:flex-row shadow m-auto rounded-lg overflow-hidden"
          ref={targetRef}
        >
          <section className="md:w-[360px] p-4 md:p-6 space-y-6 bg-[#e0e7fb]">
            <div className="rounded-full w-36 h-36 overflow-hidden m-auto border">
              <Image
                src={sun}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <SideCardItem title="contact me">
              <div className="space-y-2 mt-3 text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#1e56a0]" />
                  <span>(+855) 10 427 151</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#1e56a0]" />
                  <span>relexsunnop@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#1e56a0]" />
                  <span>Sen Sok, Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-[#1e56a0]" />
                  <span
                    className="cursor-pointer hover:underline text-[#1e56a0]"
                    onClick={() =>
                      window.open("https://github.com/RelexSun", "_blank")
                    }
                  >
                    github.com/RelexSun
                  </span>
                </div>
              </div>
            </SideCardItem>
            <SideCardItem title="education">
              <div className="space-y-4 mt-3 text-sm">
                <div>
                  <h3 className="text-[#1e56a0] font-bold">
                    Above & Beyond School
                  </h3>
                  <p className="text-xs font-semibold">
                    Korea Software training school/{" "}
                    <span className="text-[#1e56a0]">Phnom Penh</span>
                  </p>
                  <p className="text-xs font-semibold text-gray-600">
                    Jun/2023 - Dec/2023
                  </p>
                  <span
                    className="text-xs font-semibold text-[#1e56a0] cursor-pointer"
                    onClick={() =>
                      window.open("https://anbschool.org/", "_blank")
                    }
                  >
                    Above & Beyond School
                  </span>
                </div>

                <div>
                  <h3 className="text-[#1e56a0] font-bold">
                    Korea Software HRD Center
                  </h3>
                  <p className="text-xs font-semibold">
                    Korea Software training school/{" "}
                    <span className="text-[#1e56a0]">Phnom Penh</span>
                  </p>
                  <p className="text-xs font-semibold text-gray-600">
                    Jan/2025 - Present
                  </p>
                  <span
                    className="text-xs font-semibold text-[#1e56a0] cursor-pointer"
                    onClick={() =>
                      window.open("https://www.kshrd.com.kh/", "_blank")
                    }
                  >
                    Korea Software HRD Center
                  </span>
                </div>

                <div className="">
                  <h3 className="text-[#1e56a0] font-bold">
                    University / Bachelor Degree
                  </h3>

                  <div>
                    <p className="text-xs font-semibold">
                      Norton University /{" "}
                      <span className="text-[#1e56a0]">
                        Software Development
                      </span>
                    </p>
                    <p className="text-xs font-semibold text-gray-600">
                      2024 - Present
                    </p>
                  </div>
                </div>
              </div>
            </SideCardItem>
            <SideCardItem title="Interests">
              <ListItem text="Learning automated deployment using Jenkins and ArgoCD" />
              <ListItem text="Actively learning Kubernetes for container orchestration and microservices deployment" />
            </SideCardItem>
          </section>
          <section className="w-full bg-white p-4 md:p-6">
            <div className="mb-8 flex justify-between items-start">
              <div>
                <h1 className="text-[#1e56a0] text-4xl font-extrabold mb-1 uppercase tracking-tighter">
                  nop relexsun
                </h1>
                <p className=" text-lg font-semibold ">Backend Developer</p>
              </div>
            </div>

            <section className="space-y-6">
              <ContentSection title="summary">
                <p className=" text-sm font-semibold">
                  Fast-learning and adaptable backend developer with strong
                  problem-solving skills and expertise in Java Spring Boot,
                  Spring Cloud, and microservices architecture. Experienced with
                  Kafka, RabbitMQ, Docker, and CI/CD, as well as Node.js and
                  React. Known for leadership, collaboration, and a desire to
                  grow in innovative environments.
                </p>
              </ContentSection>

              <ContentSection title="work experiences">
                {experiences.map((item, index) => (
                  <ContentTraining
                    key={index}
                    title={item.title}
                    date={item.date}
                    school={item.school}
                    items={item.items}
                  />
                ))}
              </ContentSection>
              <ContentSection title="technical training">
                {trainings.map((item, index) => (
                  <ContentTraining
                    key={index}
                    title={item.title}
                    date={item.date}
                    school={item.school}
                    items={item.items}
                  />
                ))}
              </ContentSection>
              <ContentSection title="technical skills">
                {<ContentList items={skills} />}
              </ContentSection>
              <ContentSection title="soft skills">
                {<ContentList items={softSkills} />}
              </ContentSection>

              {/* <ContentSection title="projects">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Github className="h-4 w-4 text-[#1e56a0]" />
                    <span
                      className="cursor-pointer hover:underline text-[#1e56a0] "
                      onClick={() =>
                        window.open("https://sun-aba.vercel.app/", "_blank")
                      }
                    >
                      ABA-Cloning
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Github className="h-4 w-4 text-[#1e56a0]" />
                    <span
                      className="cursor-pointer hover:underline text-[#1e56a0] "
                      onClick={() =>
                        window.open(
                          "https://saas-clone-rd4t-git-main-relexsuns-projects.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      Saas-Page
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Github className="h-4 w-4 text-[#1e56a0]" />
                    <span
                      className="cursor-pointer hover:underline text-[#1e56a0] "
                      onClick={() =>
                        window.open(
                          "https://github.com/RelexSun/aba-payway-login",
                          "_blank"
                        )
                      }
                    >
                      E-Menu (Frontend)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Github className="h-4 w-4 text-[#1e56a0]" />
                    <span
                      className="cursor-pointer hover:underline text-[#1e56a0] "
                      onClick={() =>
                        window.open(
                          "https://github.com/RelexSun/nest-authV2",
                          "_blank"
                        )
                      }
                    >
                      E-Menu (Backend)
                    </span>
                  </div>
                </div>
              </ContentSection> */}
              <ContentSection title="reference">
                {references.map((item, index) => (
                  <ContentReference
                    key={index}
                    email={item.email}
                    name={item.name}
                    phone={item.phone}
                    position={item.position}
                  />
                ))}
              </ContentSection>
            </section>
          </section>
        </main>
      </div>
      {showFloatButton && (
        <button
          className="fixed bottom-4 right-4 bg-[#1e56a0] text-white p-2 rounded-full transition duration-400 ease-in-out animate-bounce"
          onClick={handleFloatButtonClick}
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
}

const references = [
  {
    name: "Mr. SOUM SOMON",
    position: "Senior Developer at Ministry of Commerce",
    phone: "Phone: (+855) 99 965 943",
    email: "somon.soum9@gmail.com",
  },
  {
    name: "Mr. KHENG SOVANNAK",
    position: "IT Instructor at Korea Software HRD Center",
    phone: "Phone: (+855) 96 620 4067",
    email: "sovannak.kheng0309@gmail.com",
  },
];

const trainings = [
  {
    title: "Software Development Training",
    date: "Jun 2023 - Dec 2023",
    school: "Above & Beyond School, Phnom Penh",
    items: [
      "Developed an e-commerce platform using MERN stack (MongoDB, Express.js, React, Node.js).",
      "Agile Methodology with daily scrum and sprint-meeting.",
      "Familiars with version control like Git, Gitflow and Github.",
    ],
  },
  {
    title: "Basic Course Training",
    date: "Jan 2025 - Jul 2025",
    school: "Korea Software HRD Center, Phnom Penh",
    items: [
      "Led and managed a backend team to develop RESTful APIs using Spring Boot for both coding challenges and the final project.",
      "Designed and analyzed the Entity Relationship Diagram (ERD) for the final project.",
      "Handling authentication JWTs using Spring Security and Redis for caching OTP.",
      "Resolved diverged branches and merge conflicts to maintain a smooth Git workflow for the team.",
      "Deployed the final project using Docker and GitHub Actions for CI/CD, hosting it on a Linux server using Google Cloud Platform (GCP).",
    ],
  },
  {
    title: "Advanced Course Training",
    date: "July 2025 - Present",
    school: "Korea Software HRD Center, Phnom Penh",
    items: [
      "Accepted into the Spring Advanced Course, focusing on Microservices Architecture using Spring Cloud.",
      "Gained hands-on experience in designing and developing distributed systems with Spring Boot, Eureka, API Gateway, and Config Server.",
      "Implemented inter-service communication using Feign Clients and REST APIs.",
      "Integrated message brokers such as Kafka and RabbitMQ to enable asynchronous communication and event-driven architecture.",
      "Practiced service discovery, load balancing, centralized configuration, and fault tolerance using Spring Cloud components.",
    ],
  },
];

const skills = [
  "Programming Languages: Java, TypeScript, JavaScript.",
  "Frontend Development: Proficient in React.js and Next.js for building responsive, dynamic web interfaces.",
  "Backend Development: Experienced in Node.js and NestJS, with strong expertise in Spring Boot and Spring Cloud for developing RESTful and microservices-based applications.",
  "Database: PostgreSQL, MySQL, MongoDB.",
  "Architecture & Design: SOLID principles, OOP, REST API design, and microservices architecture.",
  "DevOps & Cloud: Skilled with Docker, GitHub Actions (CI/CD), and deployment on Linux servers using Google Cloud Platform (GCP).",
  "Messaging & Integration: Hands-on experience with Kafka and RabbitMQ for asynchronous and event-driven communication.",
];

const softSkills = [
  "Fast learner with adaptability across stacks.",
  "Effective problem-solver who performs well under pressure.",
  "Team-first mindset & strong collaboration skills.",
  "Strong leadership & clear communication.",
  "Reliable and easy to work with; focused on shared success",
];

const experiences = [
  {
    title: "Web Developer",
    date: "Jan 2024 - Dec 2024",
    school: "Freelence",
    items: [
      "As a self-taught developer driven by a passion for continuous learning, I pursued freelancing to refine my skills and gain real-world experience. I have successfully delivered projects such as responsive landing pages and a full-stack web application, utilizing TypeScript along with modern frameworks like Next.js and NestJS.",
      "Collaborated with a senior to further develop my skills by actively contributing to real-world projects.",
    ],
  },
];

// <SideCardItem title="hobbies">
//             <ListItem text="🥋 Judo, Gym and Jog" />
//             <ListItem text="🎹 Self-taught piano player" />
//             <ListItem text="🌐 Exploring new tech trends" />
//             <ListItem text="💻 Coding" />
//             <ListItem text="🌎 Traveling, eating" />
//           </SideCardItem>
