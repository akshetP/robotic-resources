import { getAllJsonLdGraphs } from "@/lib/seo";

export function JsonLd() {
  const graphs = getAllJsonLdGraphs();

  return (
    <>
      {graphs.map((graph, index) => {
        const record = graph as Record<string, unknown>;
        const key = String(record["@id"] ?? record["@type"] ?? index);

        return (
          <script
            key={key}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
          />
        );
      })}
    </>
  );
}
