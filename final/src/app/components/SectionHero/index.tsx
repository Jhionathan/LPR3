
import Background from "./Background";
import { ImagesSliderDemo } from "./imageSliderDemo";


const SectionHero = () => {
    return (
        <section>
            <div>
                <Background></Background>
            </div>
            <div className="flex items-center min-h-screen pr-3 justify-end md:pr-10">            
                {/* <h1 className="font-bold text-5xl text-center text-white" data-aos="fade-up"><span>A R3 Suprimentos</span> <br/> <span className="text-green-text">fornece o essencial</span> para <span className="text-blue-text"> sua empresa fazer o que faz de melhor</span></h1> */}
                {/* <h1 className="font-bold text-5xl text-center text-white" data-aos="fade-up">A R3 Suprimentos <br/>fornece o essencial para sua empresa fazer o que faz de melhor</h1> */}
                <h1 className="font-bold text-5xl text-end text-white leading-snug max-sm:text-3xl" data-aos="fade-up">A R3 Suprimentos <br/> fornece o essencial <br/>para sua empresa fazer <br/> o que faz de melhor</h1>

            </div>
        </section>
    )
}


export default SectionHero;