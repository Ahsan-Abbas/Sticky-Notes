import React from 'react';
import RichText from "./RichText";
import Image from "./Image";
import Constant from "../Constant";

const LoadingComponent: React.FC = () => {
    return <div className="loading-page">
        <span className="loader"><RichText text={`# ${Constant.LOADING_DATA}`} /></span>
        <div className="horizontal-line"></div>
        <div className="img-container">
            <Image src="https://sampleorder-prd-cdn-endpoint.azureedge.net/img/general/rockfon-logo.svg" />
        </div>
    </div>
}

export default LoadingComponent
