
const currentYear : number = new Date().getFullYear();
export default function Footer() {
    return (
        <>
        <div className=" flex justify-center fixed bottom-0 w-full h-10">
            <footer> Stickify @ {currentYear} All Rights Reserved</footer>
        </div>
        </>
    )
}