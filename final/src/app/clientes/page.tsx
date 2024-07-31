import Clients from "./Clients";


const Clientes = () => {
    return (
        <div className=" w-full flex items-center flex-col">
            <div className="w-1/2 mt-28">
                <h2 className="text-green-text font-semibold text-3xl text-center pb-2">CASES</h2>
                <p className="text-black text-sm text-center leading-relaxed">
                    Apresentamos alguns Cases, de forma prática, contados por clientes
                    que confiaram no modelo de gestão da R3 Suprimentos. São experiências e
                    resultados obtidos por clientes que possuem grande complexidade
                    operacional, de diversos segmentos da economia.
                    Mensalmente, são publicados Cases de Sucesso nas revistas de bordo
                    das principais Cias Aéreas do país. Conheça:
                </p>
            </div>
            <div className="w-3/5 flex flex-col py-5 gap-5">
                <div className="flex flex-col">
                    <small>Shopping</small>
                    <div className="flex gap-5">
                        <Clients
                            url="/clientes/flamboyant.png"
                        />
                        <Clients
                            url="/clientes/buriti.png"
                        />
                        <Clients
                            url="/clientes/goianiashopping.png"
                        />
                        <Clients
                            url="/clientes/aguaslindas.png"
                        />
                        <Clients
                            url="/clientes/terral.png"
                        />
                    </div>
                </div>
                    
                <div className="flex flex-col">
                    <small>Hospital</small>
                    <div className="flex gap-5">
                        <Clients
                            url="/clientes/hospitaldocor.png"
                        />
                        <Clients
                            url="/clientes/unimed.png"
                        />
                         <Clients
                            url="/clientes/encore.png"
                        />
                    </div>
                </div>
                    <hr />
                <div className="flex flex-col">
                    <small>Bares e Restaurantes</small>
                    <div className="flex gap-5">
                        <Clients
                            url="/clientes/emporioprime.png"
                        />
                        <Clients
                            url="/clientes/pirquiras.png"
                        />
                        <Clients
                            url="/clientes/lifebox.png"
                        />
                        <Clients
                            url="/clientes/chefehouse.png"
                        />
                        <Clients
                            url="/clientes/celsincia.png"
                        />
                    </div>
                </div>
                    <hr />
                <div className="flex flex-col">
                    <small>Supermercados</small>
                    <div className="flex gap-5">
                        <Clients
                            url="/clientes/cerrado.png"
                        />
                        <Clients
                            url="/clientes/tatico.png"
                        />
                        <Clients
                            url="/clientes/moreira.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Clientes;