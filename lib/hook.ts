"use client"
import { useContext } from "react";
import { PostContext } from "@/app/context/post-context-provider";
import { SearchContext } from "@/app/context/search-post-provider";

export function usePostContext() {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePostContext must be used within a PostContextProvider");
    }
    return context;
}

export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchContext must be used within a SearchContextProvider");
    }
    return context;
}