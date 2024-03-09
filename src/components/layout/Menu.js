import Image from "next/image"
import MenuItems from "./MenuItems"
import SectionHeader from "./SectionHeader"
export default function Menu(){
    return (

        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -top-[90px] left-0 -z-10">
                <Image src={'/sallad1.png'} width={109} height={189} alt="'salad"
                />
                </div>
                <div className=" absolute -top-[120px] right-0 -z-10">
                <Image src={'/sallad2.png'} width={107} height={195} alt="'salad"
                />
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeader subHeader={'Check Out'}
                 mainHeader={'Menu'}/>
            </div>
            
            
            <div className="grid grid-cols-3 gap-4">
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
                <MenuItems/>
            </div>
            
        
        </section>
        

    )
}