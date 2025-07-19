export default function AnimatedText({ children }) {
    return (
        <h1 className="text-7xl bg-gradient-to-r from-red-300/80  via-green-300/80 to-blue-300/80 text-transparent bg-clip-text font-bold animate-pulse">
            {children}
        </h1>
    );
}