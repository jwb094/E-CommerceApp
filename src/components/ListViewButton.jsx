import React from 'react';
import { ListViewIcon,GridViewIcon } from '../assets/Icons';


function ListViewButton(props) {
    //logic use state if view equal Grid display grid else display list
    return (
                   <button
              class="rounded-md bg-grey-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                {props.title}
                <ListViewIcon width={16} height={16}/>
                   <GridViewIcon width={16} height={16}/>
                </button>
    );
}

export default ListViewButton;