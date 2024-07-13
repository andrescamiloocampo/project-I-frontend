import type { ReactElement } from "react";
import type { LinkM } from "./Link.model";
import styles from './Link.module.css';
import type { cssVar } from "../types/cssVar";
import Link from "next/link";

export const CustomLink = ({text,bg,color,border,href='',hColor,hDecoration}:LinkM):ReactElement =>{
    const cssStyles:cssVar = {
        '--bg':bg,  
        '--color':color,
        '--border':border,
        '--hColor':hColor,
        '--hDecoration':hDecoration
    }

    return(        
        <Link href={href} className={styles.btn} style={cssStyles}>
            {text}
        </Link>        
    )
}