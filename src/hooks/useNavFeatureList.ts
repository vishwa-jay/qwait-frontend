// import { useSelector } from "react-redux"
// import { AppState } from "../store/reducers/rootReducer"
// import { useEffect, useState } from "react";
// import { NAV_BAR_MENU_DATA } from "../components/NavBar/navBar.data";

// export type navItem = {
//     key: number
//     icon: string
//     title: string | undefined
//     url: string | undefined
//     childLinks: navItem[]
// }

// const UseNavFeatureList = () =>{
//     const navList = useSelector((state: AppState) => state.NavFeatureList);
//     const [navBarItems, setNavBarItems] = useState<navItem[]>();

//     useEffect(()=>{
//         const navBar : navItem[] = navList.response && navList.response.data.length > 0 ? navList.response.data.map((item) =>{

//             return {
//                 key: item.id,
//                 icon: item.feature?.icon_class || "",
//                 title: item.feature?.feature,
//                 url: item.feature?.url,
//                 childLinks: item.featureLinks && item.featureLinks.length > 0 ? item.featureLinks.map(sub =>{
//                     return {
//                         key: sub.id,
//                         icon: sub.icon_class,
//                         title: sub.menu_caption,
//                         url: sub.url,
//                         childLinks: []
//                     }
//                 }) : []
//             }
//         }) : []

//         setNavBarItems(navBar);
//     },[navList]);

//     return navBarItems;
// }

// export default UseNavFeatureList;
export {};