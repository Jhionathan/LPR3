import React from "react";

const Logistc = () => {
    return (
        <div className="w-100% bg-green-text min-h-screen">
            <div className="max-w-screen-xl p-7 m-auto flex items-center justify-center gap-4 pt-28  max-md:flex-col">
                <div className="max-w-lg">
                    <div>
                    <h2 className="text-4xl text-blue-950 font-bold mb-3 max-md:text-xl" data-aos="fade-left" data-delay="500">Abrangência</h2>
                    <p className="text-sm max-md:text-xs" data-aos="fade-left" data-delay="500" >
                        Atuamos em todo o estado de Goiás e no Distrito Federal.
                        Para Goiânia e Região Metropolitanas as entregas são realizadas em até 24 horas pela empresa.
                        No interior e no Distrito Federal, em até 48h, através de transportadoras bem selecionadas, mantendo assim um bom índice de qualidade na prestação de serviços.
                        Todos os pedidos são monitorados até chegarem ao seu destino.
                        Assim, proporcionamos ao cliente segurança, agilidade e garantia do pedido no prazo estabelecido.
                    </p>
                    </div>
                </div>
                <div>
                    <img src="/Atuacao.png" className="max-w-screen-sm max-md:w-80 max-lg:w-96" data-aos="fade-left" data-delay="500" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Logistc