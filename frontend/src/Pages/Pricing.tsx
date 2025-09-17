import HeroPricing from "../Commponets/HeroPricing/HeroPricing";
import FeaturesPricing from "../Commponets/FeaturesPricing/FeaturesPricing";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <div>
      <HeroPricing />
      <FeaturesPricing />
    </div>
  );
}
