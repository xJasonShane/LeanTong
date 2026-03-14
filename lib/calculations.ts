import type { Calculator } from "./calculators";

export interface CalculationResult {
  value: number;
  unit: string;
  formatted: string;
  details?: number[];
  detailLabels?: string[];
}

export function calculate(calculator: Calculator, values: Record<string, number>): CalculationResult | null {
  const { calculation, resultUnit, showDetails, detailLabels } = calculator;

  try {
    const params = Object.keys(values);
    const vals = Object.values(values);

    let result: number;
    let details: number[] | undefined;

    if (showDetails && calculator.id === "oee-calculator") {
      const plannedTime = values["plannedTime"];
      const downtime = values["downtime"];
      const actualOutput = values["actualOutput"];
      const standardCycleTime = values["standardCycleTime"];
      const goodProducts = values["goodProducts"];

      const runTime = plannedTime - downtime;
      const availability = (runTime / plannedTime) * 100;
      const theoreticalOutput = (runTime * 60) / standardCycleTime;
      const performance = (actualOutput / theoreticalOutput) * 100;
      const quality = (goodProducts / actualOutput) * 100;

      details = [availability, performance, quality];
      result = (availability / 100) * (performance / 100) * (quality / 100) * 100;
    } else {
      const func = new Function(...params, `let result; ${calculation}; return result;`);
      result = func(...vals);
    }

    return {
      value: result,
      unit: resultUnit,
      formatted: formatResult(result, resultUnit),
      details,
      detailLabels,
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
  if (unit === "张" || unit === "人" || unit === "件") {
    return `${Math.round(value)} ${unit}`;
  }
  if (unit === "件/天" || unit === "件/人/天") {
    return `${value.toFixed(1)} ${unit}`;
  }
  if (unit === "小时") {
    return `${value.toFixed(1)} ${unit}`;
  }
  if (unit === "天") {
    return `${value.toFixed(1)} ${unit}`;
  }
  return `${value.toFixed(2)} ${unit}`;
}
