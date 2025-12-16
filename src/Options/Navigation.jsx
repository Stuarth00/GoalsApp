import React, { useState } from 'react';

function Navigation( {onOpen}){


    return (
        <div className="col-span-1 bg-zinc-300 pt-4">
            <button 
            onClick={onOpen}
            className="w-full bg-zinc-300 hover:bg-amber-50 font-bold py-2 px-4 " >
                Add New Goal
            </button>
        </div>
    )
}

export default Navigation;