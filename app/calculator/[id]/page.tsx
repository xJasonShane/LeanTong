import { notFound } from "next/navigation";
import { getCalculatorById, getCalculatorIds, type Calculator } from "@/lib/calculators";
import { CalculatorClient } from "@/components/CalculatorClient";

interface CalculatorDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const ids = getCalculatorIds();
  return ids.map((id) => ({ id }));
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
