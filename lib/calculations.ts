import { getCalculatorById } from "./calculators";

export interface CalculationResult {
  value: number;
  unit: string;
  formatted: string;
}

export function calculate(
  calculatorId: string,
  inputs: Record<string, number>
): CalculationResult | null {
  const calculator = getCalculatorById(calculatorId);
  if (!calculator) return null;

  const { calculation, resultUnit } = calculator;

  try {
    const params = Object.keys(inputs);
    const values = Object.values(inputs);

    const fn = new Function(...params, `return ${calculation}`);
    const result = fn(...values);

    if (typeof result !== "number" || !isFinite(result)) {
      return null;
    }

    return {
      value: result,
      unit: resultUnit,
      formatted: formatResult(result, resultUnit),
    };
  } catch {
    return null;
  }
}

function formatResult(value: number, unit: string): string {
  if (unit === "%") {
    return `${value.toFixed(2)}%`;
  }
  if (unit.includes("分钟") || unit.includes("秒")) {
    return `${value.toFixed(2)} ${unit}`;
  }
  if (unit.includes("次")) {
    return `${value.toFixed(2)} ${unit}`;
  }
  return `${value.toFixed(2)} ${unit}`;
}
