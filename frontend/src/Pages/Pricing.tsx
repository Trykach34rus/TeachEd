import HeroPricing from "../Commponets/HeroPricing/HeroPricing";
import FeaturesPricing from "../Commponets/FeaturesPricing/FeaturesPricing";
import EnhanceStudents from "../Commponets/EnhanceStudents/EnhanceStudents";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <div>
      <HeroPricing />
      <FeaturesPricing />
      <EnhanceStudents />
    </div>
  );
}
