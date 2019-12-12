import React from 'react';
//import { func } from 'prop-types';

// export default function DeveloperBio() {
//     return (
//         <div className="card d-inline-block text-dark">
//             <div className="card-body">
//                 <h5 className="card-title">Sri harsha Akurathi</h5>
//                 <p className="card-text">
//                     <span className="bold">Fav Dev Language : </span> Java
//                 </p>
//                 <p className="card-text">
//                     <span className="bold">Year Started : </span> 2011
//                 </p>
//             </div>

//         </div>
//     );
// }

export default function DeveloperBio(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h5 className="card-title">{props.developer.firstName}{props.developer.lastName}</h5>
                <p className="card-text">
                    <span className="bold">Fav Dev Language : </span> {props.developer.favDevLanguage}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started : </span> {props.developer.yearStarted}
                </p>
            </div>
        </div>
    )
}