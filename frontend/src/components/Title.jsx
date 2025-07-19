export default function Title() {
    return (
        <div className="flex gap-6">
            <img
                src="/logo.png"
                alt="Logo"
                className="max-w-10 h-auto"
            />

            <h1 className="text-yellow-600 text-4xl font-bold">
                USER TRACKER
            </h1>
        </div>
    );
}