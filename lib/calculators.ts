import calculatorsData from "@/data/calculators/calculators.json";

export interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "select" | "text";
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
}

export function getAllCalculators(): Calculator[] {
  return calculatorsData.calculators as Calculator[];
}

export function getCalculatorById(id: string): Calculator | undefined {
  return getAllCalculators().find((calculator) => calculator.id === id);
}

export function getCalculatorIds(): string[] {
  return getAllCalculators().map((calculator) => calculator.id);
}
