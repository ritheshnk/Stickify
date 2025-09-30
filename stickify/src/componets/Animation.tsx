export default function Animation() {
    const randomNum = Math.random();
    return(
        <>
            {/* dynamic class name */}
            <h1 className={`${randomNum>0.5?"text-red-500":"text-white-500"} flex flex-col text-center`}>This is Animation page</h1>
        </>
    )
}