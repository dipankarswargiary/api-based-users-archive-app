export default function AnimatedButton({ link, children }) {
    return (
        <button className="bg-gradient-to-r from-yellow-600 to-blue-400 text-transparent bg-clip-text text-2xl w-46 h-14 rounded-full animate-pulse border-2 border-slate-200 hover:animate-none hover:bg-clip-border hover:text-white transition duration-600">

            <a href={link}>
                {children}
            </a>
        </button>
    );
}