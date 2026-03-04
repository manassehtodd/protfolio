import { BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight, ArrowUpRight, EmailIcon } from "./Logo";

const projectDetails = [
    {
        name: "Finovo",
        description: "Finovo - a cutting-egde microservice-based application designed to handle HTTP requests authentication and staticstics with finance.",
        toolUsed: ["Goland", "TypeScript", "Gin", "NextJS", "PostgrSQL", "Redis"],
        githubLink: "https://manassehtodd.github.io/Finovo/"
    }
]
function ProjectMobile() {
    return(
        <div className="pt-10 md:hidden block">
            <div className="grid grid-cols-4 grid-rows-3 gap-5">
                <div className="col-span-3 row-span-2 w-full bg-white rounded-xl"></div>
                <div className="row-span-3 w-full bg-green-600 rounded-xl"></div>
                <div className="col-span-2 w-full bg-amber-500 rounded-xl"></div>

            </div>
            <div className="mt-5">
                    <h1 className="text-xl">{projectDetails[0].name}</h1>
                        <ul className="flex flex-row gap-3 flex-wrap text-sm pt-5 pb-5">
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Goland</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">TypeScript</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Gin</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">NextJS</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">PostgrSQL</li>
                            <li className="border border-[#3d3d3d] p-2 rounded-3xl">Redis</li>
                        </ul>
                        <span>
                            {projectDetails[0].description}
                        </span>
                    <a href={projectDetails[0].githubLink} target="_blank" rel="noopener noreferrer">
                        <div className=" flex flex-row items-center static">
                            <div className="border border-[#3d3d3d] w-10 rounded-full p-2.5">
                                <BrandGithub className="h-5 w-5" />
                            </div>
                            <div className="absolute left-10 h-10 w-10 bg-white rounded-full items-center flex justify-center">
                                <ArrowUpRight className="h-5 w-5 cursor-pointer" />
                        </div>
                    </div>
                    </a>
            </div>
        </div>
    );
}

export default ProjectMobile;