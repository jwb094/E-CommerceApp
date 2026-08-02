import React from 'react';
import { ListViewIcon,GridViewIcon } from '../assets/Icons';


function ListViewButton({onClick,view}) {
    //logic use state if view equal Grid display grid else display list
    return (
                   <button
                   onClick={onClick}
                   value={view === true ? "Grid" : "List"}
              className="rounded-md bg-grey-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                {view === true ? <GridViewIcon width={16} height={16}/> :  <ListViewIcon width={16} height={16}/>} 
               
                   
                </button>
    );
}

export default ListViewButton;