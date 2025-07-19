export default function NavLink({ link, children }) {
    return (
        <a href="{link}" className="text-blue-600 glow-on-hover">
            {children}
        </a>
    );
}