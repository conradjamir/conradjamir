import Loading from "../loading";

export default function Home() {
    return (
        <>
            <section id="projects" className="flex items-center justify-center py-10 bg-black bg-center bg-cover h-dvh lg:py-20 md:px-0 scroll-mt-navbar">

                <h1 className="text-white">Projects</h1>
                <Loading />

            </section>
        </>
    );
}
