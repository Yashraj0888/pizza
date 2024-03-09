export default function MenuItems(){
    return (
        
        <div className="bg-gray-300 p-4 rounded-lg text-center hover:bg-gray-700 hover:shadow-2xl hover:shadow-black/70 transition-all ">
            <img src="/pngwing.com.png" alt="Pizza" width={150 } height={150} className="mx-auto"/>
            <h4 className="font-semibold my-2">Pepporoni Pizza</h4>
            <p className="text-gray-500 text-sm py-2">Lorem ipsum dolor sit amet consectetur 
            </p>
            <button className="bg-primary text-white px-3 py-2 my-2 rounded-full">
                Add to Cart $10
            </button>
        </div>
                
            
    )
}