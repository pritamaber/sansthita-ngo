import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <Reveal className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </Reveal>
  );
}
