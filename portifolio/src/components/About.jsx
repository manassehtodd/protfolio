import Work from "./Work";
import AnimatedContent from "./AnimatedContent";
import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight } from "./Logo";

function About() {
    return(
    <section id="about" className="pt-30 p-5">
                <AnimatedContent
                    distance={200}
                    direction="vertical"
                    reverse={false}
                    duration={1}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0.3}
                >
        <div className="flex flex-row justify-between items-center p-5">
            <span className="w-full text-[#f5f5f5]">.../About me...</span>
            <span className="text-[#a6a6a6]">Hello! I'm Manasseh, I'm an upcoming full-stack developer, for now just a front-end developer with the passion and zeal to build great user experiences, I may not have lots of experiences yet, but I am ready to build and learn.</span>
        </div>


        <div>
            <div className="grid grid-cols-2 gap-4 w-120 text-[#a6a6a6]">
                <div className="h-30 w-120 border border-[#a6a6a6] bg-white text-[#121212] rounded-4xl p-5 col-span-2">
                    <span className="text-xl">Front-end</span>
                    <ul className="flex flex-row gap-2">
                        <li>React /</li>
                        <li>Nextjs /</li>
                    </ul>
                </div>
                <div className="h-30 w-50 border border-[#a6a6a6] bg-transparent p-5 rounded-4xl text-[#a6a6a6]">
                    <span className="text-xl">Style</span>
                    <ul className="flex flex-row gap-2">
                        <li>Tailwindcss</li>
                    </ul>
                </div>
                <div className=" flex flex-row items-center static">
                    <div className="border border-[#a6a6a6] w-10 rounded-full p-2.5"><BrandGithub className="h-5 w-5" /></div>
                    <div className="absolute left-74 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                </div>
                <div className="h-30 w-120 border border-[#a6a6a6] bg-transparent p-5 rounded-4xl col-span-2">
                    <span className="text-xl">Back-end</span>
                    <ul className="flex flex-row gap-2">
                        <li>Nodejs</li>
                        <li>Express</li>
                    </ul>
                </div>
                <div>
                    <span className="text-[#a6a6a6] text-sm">Some of my <em className="text-[#f5f5f5]">favorite technologies or tools</em>, that I worked with</span>
                </div>
                <div className="h-30 w-50 border border-[#a6a6a6] bg-transparent p-5 rounded-4xl">
                    <span className="text-xl">DevOps</span>
                    <ul className="flex flex-row gap-2">
                        <li>Git</li>
                        <li>Github</li>
                        <li>Gitlab</li>
                    </ul>
                </div>
            </div>
        </div>
</AnimatedContent>
        <Work />
    </section>);
}

export default About;