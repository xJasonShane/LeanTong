import calculatorsData from "@/data/calculators/calculators.json";

export type FieldType = "number" | "select" | "text";

export interface CalculatorField {
  id: string;
  label: string;
  type: FieldType;
  unit?: string;
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: string;
  formula: string;
  fields: CalculatorField[];
  calculation: string;
  resultUnit: string;
  showDetails?: boolean;
  detailLabels?: string[];
}

export function getAllCalculators(): Calculator[] {
  return calculatorsData.calculators as Calculator[];
}

export function getCalculatorById(id: string): Calculator | undefined {
  return calculatorsData.calculators.find((calc) => calc.id === id) as Calculator | undefined;
}

export function getCalculatorCategories(): string[] {
  const categories = new Set<string>();
  calculatorsData.calculators.forEach((calc) => {
    categories.add(calc.category);
  });
  return Array.from(categories);
}
