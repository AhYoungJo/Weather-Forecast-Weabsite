// import React, { useReducer, Dispatch } from 'react';
// // import _ from 'lodash';
// import {ChartOptions, ChartTypeRegistry} from 'chart.js'
// import { createContext } from 'vm';

// interface AuxProps {
//     children: React.ReactNode
// }

// const initialOptions: ChartOptions<keyof ChartTypeRegistry> = {
//     responsive: true,
//     maintainAspectRatio: true,
//     indexAxis: 'x' as const, 
//     scales: {
//         x: {
//             stacked: false,
//         },
//         y: {
//             stacked: false
//         }
//     },
//     plugins: {
//         legend: {
//             position: 'top' as const
//         },
//         title: {
//             display: true,
//             text: "Chart.js Chart"
//         }
//     }
// };

// //option reducer before type??
// interface OptionAction { 
//     type: 'vertical' | 'horizontal' | 'stacked' | 'custom',
//     modifiedOptions?: ChartOptions<keyof ChartTypeRegistry>
// }

// function optionReducer(
//     options: ChartOptions<keyof ChartTypeRegistry>,
//     action:OptionAction
// ): ChartOptions<keyof ChartTypeRegistry> {
//         switch(action.type) {
//             case 'vertical': {
//                 const newOptions =  _.cloneDeep(options) as ChartOptions<"bar">
//                 if(newOptions.scales && newOptions.scales.x && newOptions.scales.x.stacked && newOptions.scales.y && newOptions.scales.y.stacked) {
//                     newOptions.scales.x.stacked = false;
//                     newOptions.scales.y.stacked = false;
//                 }
//                 if(newOptions.indexAxis = 'y') {
//                     newOptions.indexAxis = 'x'
//                 }
//                 return newOptions
//             }
//             case 'horizontal': {
//                 const newOptions =  _.cloneDeep(options) as ChartOptions<"bar">
//                 if(newOptions.scales && newOptions.scales.x && newOptions.scales.x.stacked && newOptions.scales.y && newOptions.scales.y.stacked) {
//                     newOptions.scales.x.stacked = false;
//                     newOptions.scales.y.stacked = false;
//                 }
//                 if(newOptions.indexAxis = 'x') {
//                     newOptions.indexAxis = 'y'
//                 }
//                 return newOptions
//             }
//             case 'stacked': {
//                 const newOptions =  _.cloneDeep(options) as ChartOptions<"bar">
//                 if(newOptions.scales && 
//                     newOptions.scales.x && 
//                     newOptions.scales.x.stacked && 
//                     newOptions.scales.y && 
//                     newOptions.scales.y.stacked
//                 ) {
//                     newOptions.scales.x.stacked = true;
//                     newOptions.scales.y.stacked = true;
//                 }
//                 return newOptions
//             }
//             case 'custom': {
//                 const newOptions =  _.cloneDeep(options) as ChartOptions<"bar">;
//                 return {...newOptions, ...action.modifiedOptions}
//             }

//         }
//     }


// const OptionsContext = createContext<ChartOptions<keyof ChartTypeRegistry>>(initialOptions)
// const OptionDispatchContext = createContext<Dispatch<any> | undefined> (undefined)

// export const OptionsProvider: React.FC<AuxProps> = ({children}) => {
//     const [optionProv, dispatchOptionProv]: [ChartOptions<keyof ChartTypeRegistry>, Dispatch<any>] = useReducer(optionReducer, initialOptions)
//     return (<OptionsContext.Provider value = {optionProv}>
//         <OptionDispatchContext.Provider value={dispatchOptionProv}>
//             {children}
//         </OptionDispatchContext.Provider>
//         </OptionsContext.Provider>)
// }

 import React from 'react';
 
 const OptionDataContext = () => {
    return (
        <div>
            
        </div>
    );
 };
 
 export default OptionDataContext;