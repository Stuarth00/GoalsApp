function Header() {

    return (
        <header className="flex flex-nowrap justify-between items-center p-4 w-full shadow-md bg-white relative">
                <div className="flex items-center space-x-4 w-full">
                    <img src="/connection.svg" alt="Image Icon" className="w-16 h-16" />
                    <h3 className="text-3xl font-bold">Kingtsugui Connection</h3>
                </div>
                <div className="w-full flex justify-end">
                    <button className="font-bold py-2 px-4 rounded">
                        Sign In
                    </button>
                </div>
        </header>
    )
}

export default Header;