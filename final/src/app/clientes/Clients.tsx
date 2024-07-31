
interface ClientsProps {
    url: string
}


const Clients = ({ url }: ClientsProps) => {
    return (
        <div className="flex items-center justify-center shadow-sm hover:shadow-inner rounded-xl w-44 max-md:w-38 h-38" data-aos="fade-up" data-aos-delay="300">
            <img className="h-44 object-contain p-1" src={url} alt=""></img>
        </div>
    )
}

export default Clients;