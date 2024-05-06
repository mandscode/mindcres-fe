import Hero from "../components/Hero";

const Index = () => {

    let content = {
        page : "index", 
        title: "Say Goodbye to Snoring!", 
        btn : "Explore",
        desc : null
    }
    
    return (
        <>
            <main>
                <Hero {...content}/>
            </main>
        </>
    );
}
 
export default Index;