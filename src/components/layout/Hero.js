import Image from "next/image"
import Right from "../icons/Right"
export default function Hero(){

return(

    <section className="hero mt-6">
        <div className="py-12">
        <h1 className="text-4xl mb-4 ">
            Slice into Happiness: 
            A Melty Journey of 
            <span className="text-primary"> Pizza </span> 
            Pleasure! 
        </h1>
        <p className="text-gray-500 my-6 text-sm">
            Indulge in the divine fusion of 
            bubbling mozzarella, tangy tomato sauce, 
            and an array of toppings atop a hand-tossed crust. 
            Each bite of pizza is a flavorful adventure, 
            where crispy perfection meets melty satisfaction. 
            It's not just a dish; it's a savory symphony 
            that unites palates and ignites joy.
        </p>
        
        <div className="flex gap-4 text-sm">
            <button className="bg-primary flex gap-2  text-white 
            px-4  py-2 items-center rounded-full">
            ORDER NOW <Right/></button>
            <button className="flex gap-2 py-2  text-gray-500 font-semibold">Learn More  <Right/></button>
        </div>
        </div>

        <div className="w-30 h-30 relative  ">
            <img src={'/pngwing.com.png'} width={450} height={100}
              alt={'pizza'}></img>
        </div>
    </section>
)
}