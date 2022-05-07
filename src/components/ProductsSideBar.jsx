import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { 	ChevronDownIcon } from '@heroicons/react/solid';
import {Collapse} from 'react-collapse';

export const ProductSidebar = ()=>{
    
    
       return (
        <div>
        <Collapse isOpened={true || false}>
        <div>Random content</div>
        </Collapse>
    </div>

    )
}