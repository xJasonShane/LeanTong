import { notFound } from "next/navigation";
import { getCalculatorById, getAllCalculators, type Calculator } from "@/lib/calculators";
import { CalculatorClient } from "@/components/CalculatorClient";

interface CalculatorDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const calculators = getAllCalculators();
  return calculators.map((calc) => ({ id: calc.id }));
}

export default async function CalculatorDetailPage({
  params,
}: CalculatorDetailPageProps) {
  const { id } = await params;
  const calculator = getCalculatorById(id);

  if (!calculator) {
    notFound();
  }

  return <CalculatorClient calculator={calculator} />;
}
