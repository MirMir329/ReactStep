import { useMemo } from "react"

const useSortedPosts = (postArr, sort) => {
    return useMemo(() => {
        if (sort) {
            return ([...postArr].sort((a, b) => a[sort].localeCompare(b[sort])))
        }
        return postArr
    }, [sort, postArr])
} 

export const usePosts = (postArr, sort, search) => {
    const sortedPosts = useSortedPosts(postArr, sort)
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts])
}
 
 
 