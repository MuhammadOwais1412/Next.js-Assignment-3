import Image from "next/image"

const MainSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start p-5">
            <Image src={"/next.webp"} alt="Next.js" width={250} height={250} className="w-full max-w-md rounded-lg lg:mr-8"/>
            <section className="mt-28 text-center mr-5">
                <h2 className="font-semibold text-2xl text-violet-700 mt-5 lg:mt-0">Explore the World of Next.js</h2>
                <p className="font-medium text-lg mt-3 text-gray-700">Next.js provides everything you need to create a fast and modern web application. It offers hybrid static and server rendering, TypeScript support, and powerful APIs that make web development easier.</p>
                <p className="font-medium text-lg mt-3 text-gray-700">
                    Whether you are building small projects or large-scale applications, Next.js gives you the flexibility 
                    to create amazing user experiences with excellent performance.
                </p>
            </section>
        </div>
    )
}

export default MainSection