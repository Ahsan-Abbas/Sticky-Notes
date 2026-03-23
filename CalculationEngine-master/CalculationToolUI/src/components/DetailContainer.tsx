import Constant from "../Constant";
import "./DetailContainer.scss";
import RichText from "./RichText";

const DetailContainer = ({ details }: any) => {
  return details.length ? (
    <div className="detail-container">
      {details.map((item: any, index: number) => <div key={index} className="detail">
        <div className="detail-heading">

          <span className="detail-title">
            <RichText text={item.name} />
          </span>
          {item?.RF_S_ADDTIONAL_DESCRITION_FAMILY ? <span className="detail-title-description ">
            <RichText text={item.RF_S_ADDTIONAL_DESCRITION_FAMILY} />
          </span> : null}
        </div>
        <div className="detail-properties">
          {item.values.map((val: ValueSampleOrderpage, ind: number) => <div className="property" key={ind}>
            {val.name && <span className="prop-name"><RichText text={val.name} /></span>}
            {val.properties.map((property: PropertySampleOrderPage, ind: number) => property.id === Constant.RF_S_FEATURE_DESCRIPTION && property.value ? < span key={ind} className="prop-description" > <RichText text={`${property.value}`} /></span> : null)}
          </div>)}
        </div>
      </div>)}
    </div>
  ) : null
}

export default DetailContainer
