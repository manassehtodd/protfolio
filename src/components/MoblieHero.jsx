import DecryptedText from "./DecryptedText";
import {BrandLinkedin, BrandTelegram, BrandWhatsapp, BrandInstagram, BrandGithub, ArrowNarrowRight } from "./Logo";
function MoblieHero() {
    return(
        <div className="md:hidden block">
            <div className="flex flex-col">
                <span className="text-4xl font-semibold">
                                            <DecryptedText
                                                text="Front-end"
                                                speed={100}
                                                animateOn="view"
                                                revealDirection="start"
                                                sequential
                                                useOriginalCharsOnly={false}
                                            />
                </span>
                <span className="text-4xl flex items-end justify-around font-semibold">
                                            <DecryptedText
                                                text="Developer"
                                                speed={100}
                                                animateOn="view"
                                                revealDirection="start"
                                                sequential
                                                useOriginalCharsOnly={false}
                                            />
                </span>
            </div>
            <div className="mt-3 flex flex-wrap p-5">
                <span className="text-wrap text-[#a6a6a6] cursor-target">My Goals is to write <span className="text-[#f5f5f5]">maintainable, clean</span> and <span className="text-[#f5f5f5]">understandable code</span> to process development was enjoyable.</span>
            </div>
            <div>
            <button className="bg-[#f5f5f5] p-2 text-[#121212] h-12 w-45 ml-5 mr-3 rounded-full hover:cursor-pointer italic ">Projects</button>
                    <button className="h-12 w-12 bg-[#f5f5f5] p-5 hover:cursor-pointer rounded-full">
                        <ArrowNarrowRight className="relative -top-2.5 -left-2.5 h-8 w-8" />
                    </button>
            </div>
        </div>
    );
}

export default MoblieHero;