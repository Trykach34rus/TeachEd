import HeroPricing from "../Commponets/HeroPricing/HeroPricing";
import FeaturesPricing from "../Commponets/FeaturesPricing/FeaturesPricing";
import EnhanceStudents from "../Commponets/EnhanceStudents/EnhanceStudents";
import TestDrivePricing from "../Commponets/TestDrivePricing/TestDrivePricing";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <div>
      <HeroPricing />
      <FeaturesPricing />
      <EnhanceStudents />
      <TestDrivePricing />
    </div>
  );
}
