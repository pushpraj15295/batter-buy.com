import { Accordion } from "@chakra-ui/react";
import { FilterSection, PriceFilter } from "./LeftSideFilterComponents";

export const LeftSideFilter = () => {
  return (
    <Accordion allowMultiple>
      <PriceFilter/>
      <FilterSection title={"Gender"} item={["Men", "Women", "Kids"]} />
      <FilterSection title={"Category"} item={["Cloths", "Shoes"]} />
      <FilterSection title={"Size"} item={["Small", "Medium", "Large"]} />
      <FilterSection
        title={"Colour"}
        item={["Black", "White", "Green", "Red", "Blue"]}
      />
    </Accordion>
  );
};
