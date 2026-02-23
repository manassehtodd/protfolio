import DecryptedText from "./DecryptedText";

function Hero() {
    return(
        <section id="hero" className="pt-30">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-row items-center justify-center gap-6 w-full">
                    <h1 className="text-9xl tracking-widest linefont font-semibold">
                        <DecryptedText
                            text="Front-end"
                            speed={100}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                    <div className="items-end flex flex-row justify-end gap-4">
                    <button className="bg-[#f5f5f5] p-2 text-[#121212] h-12 w-60 rounded-full italic ">Projects</button>
                    <button className="h-12 w-12 bg-[#f5f5f5] p-5 rounded-full">
                    </button>
                    </div>
                </div>
                <div className="flex flex-row  justify-center items-center gap-6 w-full">
                    <span className="text-wrap w-75 text-[#a6a6a6]">
                        My Goals is to write <span className="text-[#f5f5f5]">maintainable, clean</span> and <span className="text-[#f5f5f5]">understandable code</span> to process development was enjoyable.
                        </span>
                    <h1 className="text-9xl tracking-widest linefont font-semibold">
                        <DecryptedText
                            text="Developer"
                            speed={100}
                            animateOn="view"
                            revealDirection="start"
                            sequential
                            useOriginalCharsOnly={false}
                        />
                    </h1>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-center items-center gap-6 w-full mt-10 italic ">
                    <button className="h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">
                <div className="flex items-center justify-center">                   
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="#f5f5f5"
                    >
                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59     -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                </svg>

                        Github
                        </div>
                        </button>
                    <button className="h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">Linkedin</button>
                    <button className="h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">Telegram</button>
                    <button className="h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">Whatsapp</button>
                    <button className="h-12 w-30 border border-[#a6a6a6] shadow-md transition-all duration-300 hover:transform-[translateY(-.335rem)] hover:shadow-xl rounded-full text-sm text-[#a6a6a6]">Instagram</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;