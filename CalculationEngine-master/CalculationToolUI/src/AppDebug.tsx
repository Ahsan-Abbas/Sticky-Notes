import { useEffect, useState } from "react";
import { getProductModelInfo, getProductModels } from "./backend/configure";
import Select from "./components/Select";
import Button from "./components/Button";

interface IAppDebugProps {
  onChange: (input: Record<string, any>) => void;
}
const AppDebug = ({ onChange }: IAppDebugProps) => {
  let [products, setProducts] = useState<AceProduct[]>([]);
  let [selectedProduct, setSelectedProduct] = useState("");
  let [productDetails, setProductDetails] = useState<AceProductResponse | null>(null);
  let [selectedView, setSelectedView] = useState("");

  useEffect(() => {
    getProductModels().then(models => setProducts(models.products));
  }, []);

  useEffect(() => {
    if (productDetails)
      getProductModelInfo(productDetails.id).then(p => {
        setProductDetails(p);
        let defaultView = p.views.find(v => v.default);
        if (defaultView)
          setSelectedView(defaultView.id);
        else
          setSelectedView("");
      });
  }, [selectedProduct]);

  return <>
    <div>
      Select Model:
      <Select
        options={products.map(p => ({
          name: p.name + " (" + p.description + ")",
          value: p.id
        }))}
        onChange={v => setSelectedProduct(v)}
        value={selectedProduct}
      />
    </div>
    <div>
      Select View:
      <Select
        options={productDetails?.views.map(v => ({
          name: v.id,
          value: v.id
        })) || []}
        onChange={v => setSelectedView(v)}
        value={selectedView}
      />
    </div>
    TODO: work item, language, market, version
    <div>
      <Button
        label="Go"
        onClick={() => onChange({
          model: selectedProduct
        })}
      />
    </div>
  </>;
}
export default AppDebug;
