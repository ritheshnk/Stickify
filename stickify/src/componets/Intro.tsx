// Props in TSX
type Props = {
    title: string 
    
}

export default function Intro({title}: Props ) {
    return (
        <>
            <div className="flex flex-col items-center jutify-center space-y-4">
               <h1 className="text-4xl sm:text-5xl font-bold h-40 flex items-center">
                  <span className="hover:text-red-500 transition-colors duration-200">{title}</span> 
                  &nbsp;It’s vibe certified.
                </h1>
            </div>

        </>
    )
}           