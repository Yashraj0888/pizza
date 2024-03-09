//import Register from "@/app/register/page"
export default function Header() {
    return (
        <>
        <header className="flex items-center justify-between">
        <nav className="flex gap-8 text-gray-500 font-semibold items-center">
            <a className="text-primary font-semibold text-2xl" href="">Pizza</a>
            <a href={''}>Home</a>
            <a href={''}>Menu</a>
            <a href={''}>About</a>
            <a href={''}>Contact</a>
        </nav>
        <nav className="text-gray-500 flex items-center gap-4 font-semibold">
            <a href="/login" >Login</a>
            <a href={'/register'} className="bg-primary rounded-full text-white px-6 py-2">Register</a>
        </nav>
      </header>
        </>
    )
}