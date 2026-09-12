import { Dataset } from '../types/dataset';
import { mockDatasets } from './datasets';

export * from './datasets';

export function getAllDatasets(): Dataset[] {
  return mockDatasets;
}

export function getDatasetById(id: string): Dataset | undefined {
  const normalizedId = id.trim().toLowerCase();
  return mockDatasets.find((d) => d.id.toLowerCase() === normalizedId);
}

export function searchDatasets(rawQuery: string): Dataset[] {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return mockDatasets;
  }

  const tokens = query.split(/\s+/).filter(Boolean);

  const scored = mockDatasets.map((dataset) => {
    let score = 0;
    const nameLower = dataset.name.toLowerCase();
    const descLower = dataset.description.toLowerCase();
    const catLower = dataset.category.toLowerCase();
    const providerLower = dataset.provider.toLowerCase();
    const licenseLower = dataset.license.toLowerCase();
    const dataTypesLower = dataset.dataType.map((t) => t.toLowerCase());
    const useCasesLower = dataset.useCases.map((u) => u.toLowerCase());

    if (dataset.id.toLowerCase() === query) score += 120;
    if (dataset.id.toLowerCase().includes(query)) score += 90;
    if (nameLower.includes(query)) score += 80;
    if (catLower === query) score += 70;
    if (catLower.includes(query)) score += 50;
    if (descLower.includes(query)) score += 40;
    if (providerLower.includes(query)) score += 40;

    for (const token of tokens) {
      if (nameLower.includes(token)) score += 25;
      if (catLower.includes(token)) score += 30;
      if (dataTypesLower.some((t) => t.includes(token))) score += 25;
      if (useCasesLower.some((u) => u.includes(token))) score += 25;
      if (providerLower.includes(token)) score += 15;
      if (licenseLower.includes(token)) score += 10;
      if (descLower.includes(token)) score += 5;
    }

    return { dataset, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.dataset);
}
