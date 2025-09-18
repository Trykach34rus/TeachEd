import HeroPricing from "../Commponets/HeroPricing/HeroPricing";
import ProductsCard from "../Commponets/ProductsCard/ProductsCard";
import FeaturesPricing from "../Commponets/FeaturesPricing/FeaturesPricing";
import EnhanceStudents from "../Commponets/EnhanceStudents/EnhanceStudents";
import TestDrivePricing from "../Commponets/TestDrivePricing/TestDrivePricing";
import Footer from "../Commponets/Footer/Footer";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <div>
      <HeroPricing />
      <ProductsCard />
      <FeaturesPricing />
      <EnhanceStudents />
      <TestDrivePricing />
      <Footer />
    </div>
  );
}
