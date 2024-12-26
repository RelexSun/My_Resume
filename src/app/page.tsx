"use client";

import ContentSection from "@/components/custom/content-sec";
import ListItem from "@/components/custom/list-item";
import SideCardItem from "@/components/custom/side-card";
import {
  ArrowUp,
  Briefcase,
  Github,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import sun from "../../public/sun.png";

export default function Home() {
  const [showFloatButton, setShowFloatButton] = useState(false);

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
    <>
      <div className=" bg-[#eaeffc] min-h-screen max-w-full p-2 md:p-5 lg:p-10">
        <main className="max-w-[1200px] flex flex-col md:flex-row shadow m-auto rounded-lg overflow-hidden">
          <section className="md:w-[360px] p-4 md:p-6 space-y-6">
            <div className="rounded-full w-36 h-36 overflow-hidden m-auto border">
              <Image
                src={sun}
                width={500}
                height={500}
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
                </div>{" "}
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
                    className="text-xs font-semibold text-[#1e56a0]"
                    onClick={() =>
                      window.open("https://anbschool.org/", "_blank")
                    }
                  >
                    Above & Beyond School
                  </span>
                </div>

                <div>
                  <h3 className="text-[#1e56a0] font-bold">
                    Self-Taught Software Developer
                  </h3>
                  <p className="text-xs font-semibold">
                    After six months of training, I began to further enhance my
                    skills independently with guidance from my mentor.
                  </p>
                  <p className="text-xs font-semibold text-gray-600">
                    Dec/2023 - Present
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-[#1e56a0] font-bold">
                    University / Bachelor Degree
                  </h3>
                  <div>
                    <p className="text-xs font-semibold">
                      Cambodia Academy of Digital Technology /{" "}
                      <span className="text-[#1e56a0]">
                        Prek Leab, Phnom Penh
                      </span>
                    </p>
                    <p className="text-xs font-semibold text-gray-600">
                      Feb/2024 - Dec/2024
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">
                      Norton University /{" "}
                      <span className="text-[#1e56a0]">
                        Chroy Chong Va, Phnom Penh
                      </span>
                    </p>
                    <p className="text-xs font-semibold text-gray-600">
                      Dec/2024 - Present
                    </p>
                  </div>
                </div>
              </div>
            </SideCardItem>
            <SideCardItem title="skills">
              <ListItem text="ReactJS, NextJS" />
              <ListItem text="NodeJS, NestJS" />
              <ListItem text="TypeScript, JavaScript" />
              <ListItem text="CSS (Tailwind CSS, Bootstrap, SASS)" />
              <ListItem text="Git, GitHub" />
            </SideCardItem>
            <SideCardItem title="hobbies">
              <ListItem text="🥋 Judo, Gym and Jog" />
              <ListItem text="🎹 Self-taught piano player" />
              <ListItem text="🌐 Exploring new tech trends" />
              <ListItem text="💻 Coding" />
              <ListItem text="🌎 Traveling, eating" />
            </SideCardItem>
          </section>
          <section className="w-full bg-white p-4 md:p-6">
            <div className="mb-8">
              <h1 className="text-[#1e56a0] text-4xl font-extrabold mb-1 uppercase tracking-tighter">
                nop relexsun
              </h1>
              <p className="text-gray-600 text-lg font-semibold ">
                Software Developer
              </p>
            </div>
            <section className="space-y-6">
              <ContentSection title="introduction">
                <p className="text-gray-600 text-sm font-semibold">
                  I{"'"}m a software developer who{"'"}s all about adapting to
                  the fast-paced world of tech. I know my way around agile
                  methods and can easily pick up new tech trends. Git and GitHub
                  are my tools for keeping our code organized and team efforts
                  smooth. I{"'"}m driven by a passion for making things better.
                  I{"'"}m the kind to jump into code reviews and pair
                  programming, always looking for ways to improve. I{"'"}m
                  genuinely curious and always excited to learn, with a
                  commitment to growing my skills and bringing fresh ideas to
                  the table. I{"'"}m pumped about the chance to share my
                  experience and be part of some cool projects with your team.
                </p>
              </ContentSection>
              <ContentSection title="work experiences">
                <div className="flex justify-between mb-1 font-semibold text-sm">
                  <span>Web Developer</span>
                  <span className="text-gray-600">Dec 2023 - Present</span>
                </div>
                <p className="text-[#1e56a0] mb-2 font-semibold text-sm">
                  Freelence
                </p>
                <div className="space-y-2">
                  <ListItem text="" />
                </div>
              </ContentSection>
              <ContentSection title="reference">
                <div className="text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-[#1e56a0]" />
                    <span className="text-[#1e56a0]">Mr. SOUM SOMON</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-[#1e56a0]" />
                    <span className="text-gray-600">
                      Senior Developer at Ministry of Commerce
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#1e56a0]" />
                    <span className="text-gray-600">
                      Phone: (+855) 99 965 943
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#1e56a0]" />
                    <span className="text-gray-600">somon.soum9@gmail.com</span>
                  </div>
                </div>
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
    </>
  );
}
