import Title from "../components/Title";
import NavLink from "../components/NavLink";

export default function Header() {
    return (
        <nav className="py-6 shadow-xl bg-slate-900/30 backdrop-blur-md sticky top-0 z-50">
            <div className="container max-w-7xl mx-auto flex items-center justify-between">
                <Title />

                <div className="flex gap-6">
                    <NavLink link="https://www.google.com">
                        Login
                    </NavLink>

                    <NavLink link="amazon.in">
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}