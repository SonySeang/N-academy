import React from 'react';
import {cn} from "@/lib/utils";

type ContentBlockProps = {
    className?: string;
    children: React.ReactNode;
}

function ContentBlock({children, className}: ContentBlockProps) {
    return (
        <div className={cn(" border-gray-200  rounded-md overflow-hidden  ", className)}>
            {children}
        </div>
    );
}

export default ContentBlock;