import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const [searchQuery,setSearchQuery] = useState("");
    const [suggestion , setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    
    const dispatch = useDispatch();

    const searchCache = useSelector((store) => store.search)

    useEffect(() => {
        // make an API call after every keyPress
        // but if the difference between two api calls is <200ms
        // decline the api call

        const timer = setTimeout(() =>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSearchSuggestion()
            }
            
        },200);

        return () => {
            clearTimeout(timer);
        };

    },[searchQuery]);

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestion(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    }

    
    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return(

        <div className="sticky top-0 bg-white grid grid-flow-col m-2 p-5 shadow-lg ">
            <div className="flex col-span-1">
                <img 
                    onClick={() => handleToggleMenu()}
                    className="h-10 cursor-pointer"
                    alt="menu"
                    src="https://imgs.search.brave.com/qyH4wBvo_Kf9TDjpJ3h64HQC8wBpOJHkeFqPFkF7rDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/NTY4LzY1MS9zbWFs/bC9tb25vbGluZS1o/YW1idXJnZXItbWVu/dS1uYXZpZ2F0aW9u/LXN5bWJvbC12ZWN0/b3IuanBn"
                />
                <a href="/">
                <img 
                    className="h-10"
                    alt="youtube-logo"
                    src="https://imgs.search.brave.com/6NXZkvZ5GM_NiMaRS49zPhWBM1wN2vDYey6ezsqSn1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzU2LzA0LzUz/LzM2MF9GXzEyNTYw/NDUzNjVfdElsWlBh/d3pwSk54clBNUGdG/c0IzZkV3RkJBc0w1/QUguanBn"
                />
                </a>
            </div>
            <div className="col-span-10 px-30">
             <div>
                <input
                    className="px-5 border border-gray-400 w-1/2 p-2 rounded-l-full"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}  
                />
                <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">🔍</button>
             </div>
             {(suggestion.length > 0) && showSuggestion && (<div className="fixed bg-white px-2 py-2 w-[36rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {suggestion.map((s) => <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}    
                </ul>
              </div>)
             }
            </div>
            <div className="col-span-1">
                <img
                   className="h-10"
                   alt="user-icon"
                   src="https://imgs.search.brave.com/XLM6WQZOOjg4USteTMmA56CbGwKhBGOcLHTpbDno-xU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/MTM4MjYzMy92ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tYW5v/bnltb3VzLXBlcnNv/bi1zeW1ib2wtYmxh/bmstYXZhdGFyLWdy/YXBoaWMtdmVjdG9y/LWlsbHVzdHJhdGlv/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WndPRjZOZk9S/MHpoWUM0NHhPWDA2/cnlJUEFVaER2QWFq/clBzYVo2djEtdz0"
                />
            </div>
        </div>
    )
}

export default Head;