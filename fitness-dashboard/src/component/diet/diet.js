import React, { useEffect } from "react";
import Main from './main.js'
function Diet() {
    useEffect(() => {
        console.log("OK")
    }, [])
    return (
        <div className="flex flex-col justify-center items-center w-[100%] xl:h-[85%] md:h-[100%]">
            <Main/>
        </div>
    )
}

export default Diet