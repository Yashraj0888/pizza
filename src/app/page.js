import Image from "next/image";
import Link from "next/link";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Menu from "../components/layout/Menu";
import SectionHeader from "../components/layout/SectionHeader";
export default function Home() {
  return (
    <>
      
      <Hero/>
      <Menu/>
      <section className="text-center my-16">
        <SectionHeader 
          subHeader={'About us'}
          mainHeader={'My Story'}
        />
        <div className="  text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
        <p className=" text-gray-500">
          Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Atque sed nostrum, 
          explicabo obcaecati aut facere quod 
          dolor architecto sint! Nulla aliquam 
          perspiciatis mollitia at expedita 
          numquam dolorum tenetur delectus laudantium!
        </p>
        <p className=" text-gray-500">
          Lorem ipsum, dolor sit amet consectetur 
          adipisicing elit. Atque sed nostrum, 
          explicabo obcaecati aut facere quod 
          dolor architecto sint! Nulla aliquam 
          perspiciatis mollitia at expedita 
          numquam dolorum tenetur delectus laudantium!
        </p>
        </div>
        
      </section>
      <section className="text-center my-8">
        <SectionHeader 
        subHeader={'Don\'t be shy'}
        mainHeader={'Contact Us'}
        />
        <div className="mt-5">
        <a className="text-xl underline text-gray-500" href="tel:+918881384160">+918881384160</a><br />     
        
        <a className="text-xl underline text-gray-500" href="mailTo:yashraj88813@gmail.com">yashraj88813@gmail.com</a>     
        </div>
          
      </section>

      
    </>
  );
}
