// import { useSelector } from "react-redux";
// import { AppState } from "../store/reducers/rootReducer";
// import { useEffect, useRef, useState } from "react";
// import { ICompanyFeature } from "../typings/interfaces/ICompanyFeature";

// const useCompanyFeatureColumns = () =>{
//     const companyFeatureLinkList = useSelector((state: AppState)=> state.CompanyFeatureLinkList);
//     const [formattedFeatureList, setFormattedFeatureList] = useState<any[]>();

//     useEffect(()=>{
//         // const formattedList = companyFeatureLinkList.response?.data.flatMap(item =>{
//         //     return item.featureLinks?.map(link =>{
//         //         return {...link, feature_name: item.feature?.feature }
//         //     })
//         // });

//         // setFormattedFeatureList(formattedList);
//     },[companyFeatureLinkList.response])

//     return formattedFeatureList;
// }

// export default useCompanyFeatureColumns;
export {};